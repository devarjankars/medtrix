'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function BeanCanvasAnimation() {
  const mountRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current || !cursorRef.current) return;

    const container = mountRef.current;
    const cursor = cursorRef.current;

    // ---- Inject Cursor Styles Dynamically to avoid Next.js style/script errors ----
    const styleId = 'bean-canvas-custom-styles';
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = `
        .custom-cursor {
          position: fixed;
          top: 0; left: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff;
          pointer-events: none;
          mix-blend-mode: difference;
          transform: translate(-50%, -50%);
          z-index: 100;
          transition: width 0.25s ease, height 0.25s ease;
        }
        .custom-cursor.grow { 
          width: 60px; 
          height: 60px; 
        }
        #beanCanvas canvas {
          display: block;
          width: 100% !important;
          height: 100% !important;
        }
      `;
      document.head.appendChild(styleTag);
    }

    // ---- Custom Cursor Mouse Tracking ----
    const handleMouseMoveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handleMouseMoveCursor);

    // ---- Interactive Pill/Bean Field Physics Engine ----
    class BeanField {
      constructor(container) {
        this.container = container;
        this.beans = [];
        this.cursor = new THREE.Vector3();
        this.cursorActive = false;
        this.clock = new THREE.Clock();
        this.curve = new THREE.CatmullRomCurve3();
        this.lastSectionTop = undefined;

        this.initThree();
        this.createBeans(2000); 
        this.bindEvents();
      }

      initThree() {
        const w = this.container.clientWidth;
        const h = this.container.clientHeight;
        
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 7, 12);

        this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
        this.camera.position.set(0, 0, 10);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(w, h);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.scene.add(new THREE.AmbientLight(0xffffff, 0.05));
        
        const key = new THREE.DirectionalLight(0xffeacc, 0.4);
        key.position.set(6, 8, 6);
        this.scene.add(key);
        
        const warm = new THREE.PointLight(0xff8a40, 0.5, 22);
        warm.position.set(-5, -3, 5);
        this.scene.add(warm);

        this.hoverLight = new THREE.PointLight(0xffffff, 0, 0);
        this.scene.add(this.hoverLight);

        this.plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        this.raycaster = new THREE.Raycaster();
        this.ndc = new THREE.Vector2();
        this.hitPoint = new THREE.Vector3();
      }

      createBeans(count) {
        const gltfLoader = new GLTFLoader();
        const modelUrl = '/img/capsule.glb'; // Located inside your Next.js /public/img/ directory

        const dist = this.camera.position.z;
        const vFov = THREE.MathUtils.degToRad(this.camera.fov);
        const visH = 5 * Math.tan(vFov / 5) * dist;
        const visW = visH * this.camera.aspect;
        
        this.updateCurve(visW, visH); 
        const TABLET_SIZE = 0.38;

        const indices = Array.from({ length: count }, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        gltfLoader.load(modelUrl, (gltf) => {
          const source = gltf.scene;
          const bbox = new THREE.Box3().setFromObject(source);
          const size = new THREE.Vector3();
          bbox.getSize(size);
          const scale = TABLET_SIZE / Math.max(size.y, size.x, size.z, 1);

          for (let i = 0; i < count; i++) {
            if (indices.length === 0) break;
            const mesh = source.clone(true);
            mesh.scale.setScalar(scale);
            this.scene.add(mesh);

            this.beans.push({
              mesh,
              progress: -0.5 + (indices.pop() / count) * 1.6,
              radialAngle: Math.random() * Math.PI * 2,
              radialDist: Math.sqrt(Math.random()),
              offset: Math.random(),
              rest: new THREE.Vector3(),
              vel: new THREE.Vector3(),
              spin: (Math.random() - 0.5) * 0.06,
              phase: Math.random() * Math.PI * 4,
              firstFrame: true
            });
          }
        });
      }

      bindEvents() {
        window.addEventListener('mousemove', this.handleMouseMove);
        
        const section = document.querySelector('.philosophy-section');
        if (section) {
          section.addEventListener('mouseenter', () => cursor.classList.add('grow'));
          section.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        }
      }

      handleMouseMove = (e) => {
        const rect = this.container.getBoundingClientRect();
        this.ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        this.raycaster.setFromCamera(this.ndc, this.camera);
        if (this.raycaster.ray.intersectPlane(this.plane, this.hitPoint)) {
          this.cursor.copy(this.hitPoint);
          this.cursorActive = true;
        }
      };

      updateCurve(visW, visH) {
        const section = document.querySelector('.philosophy-section');
        if (!section) return;

        const rect = section.getBoundingClientRect();

        const getPoint = (rx, ry) => {
          const pxX = rect.left + rx * rect.width;
          const pxY = rect.top + ry * rect.height;
          return new THREE.Vector3(
            (pxX / window.innerWidth - 0.5) * visW,
            (0.5 - (pxY / window.innerHeight)) * visH,
            0
          );
        };

        const points = [
          getPoint(-0.5, 0.8),
          getPoint(0.05, 0.24),
          getPoint(0.18, 0.24),
          getPoint(0.32, 0.30),
          getPoint(0.42, 0.46),
          getPoint(0.52, 0.66),
          getPoint(0.68, 0.82),
          getPoint(0.88, 0.90),
          getPoint(1.12, 0.98),
          getPoint(1.35, 1.12),
        ];
        this.curve = new THREE.CatmullRomCurve3(points);

        if (this.lastSectionTop === undefined) {
          this.lastSectionTop = rect.top;
        }
      }

      resize() {
        const w = this.container.clientWidth;
        const h = this.container.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);

        const dist = this.camera.position.z;
        const vFov = THREE.MathUtils.degToRad(this.camera.fov);
        const visH = 2 * Math.tan(vFov / 2) * dist;
        this.updateCurve(visH * this.camera.aspect, visH);
        this.lastSectionTop = undefined;
      }

      update() {
        if (!this.curve || this.curve.points.length < 2 || this.beans.length === 0) {
          this.renderer.render(this.scene, this.camera);
          return;
        }
        const REPEL_RADIUS = 2.2;
        const REPEL_STRENGTH = 3.0;
        const SPRING = 0.003;
        const DAMPING = 0.88;
        const FLOW_SPEED = 0.025;
        
        const dt = this.clock.getDelta();
        const dist = this.camera.position.z;
        const vFov = THREE.MathUtils.degToRad(this.camera.fov);
        const visH = 2 * Math.tan(vFov / 2) * dist;
        const visW = visH * this.camera.aspect;

        const section = document.querySelector('.philosophy-section');
        if (section) {
          const rect = section.getBoundingClientRect();
          if (this.lastSectionTop !== undefined) {
            const deltaY3D = -((rect.top - this.lastSectionTop) / window.innerHeight) * visH;
            for (const bean of this.beans) {
              bean.mesh.position.y += deltaY3D;
            }
          }
          this.lastSectionTop = rect.top;
        }

        this.updateCurve(visW, visH);

        if (this.cursorActive) {
          this.hoverLight.position.set(this.cursor.x, this.cursor.y, 3.5);
          this.hoverLight.intensity = THREE.MathUtils.lerp(this.hoverLight.intensity, 100.0, 0.05);
        } else {
          this.hoverLight.intensity = THREE.MathUtils.lerp(this.hoverLight.intensity, 0.0, 0.05);
        }

        for (const bean of this.beans) {
          const { mesh, rest, vel, radialAngle, radialDist } = bean;
          
          const dir = this.curve.getTangentAt(THREE.MathUtils.clamp(bean.progress, 0, 1)).normalize();
          const perp1 = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
          const perp2 = new THREE.Vector3(0, 0, 0.8);
          const initialPipeRadius = 2.2;
          const finalPipeRadius = 1;
          
          bean.progress += FLOW_SPEED * dt;
          if (bean.progress > 1.2) {
            bean.progress -= 1.4;
            const pReset = THREE.MathUtils.clamp(bean.progress, 0, 1);
            const startPoint = this.curve.getPointAt(pReset);
            mesh.position.copy(startPoint);
            vel.set(0, 0, 0);
          }

          const p = THREE.MathUtils.clamp(bean.progress, 0, 1);
          
          rest.copy(this.curve.getPointAt(p));
          const currentPipeRadius = THREE.MathUtils.lerp(initialPipeRadius, finalPipeRadius, p);

          rest.addScaledVector(perp1, Math.cos(radialAngle) * radialDist * currentPipeRadius);
          rest.addScaledVector(perp2, Math.sin(radialAngle) * radialDist * currentPipeRadius);

          if (this.cursorActive) {
            const dx = mesh.position.x - this.cursor.x;
            const dy = mesh.position.y - this.cursor.y;
            const dz = mesh.position.z - this.cursor.z;
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (d < REPEL_RADIUS && d > 0.001) {
              const f = 1 - d / REPEL_RADIUS;
              const f2 = f * f;
              vel.x += (dx / d) * f2 * REPEL_STRENGTH;
              vel.y += (dy / d) * f2 * REPEL_STRENGTH;
              vel.z += (dz / d) * f2 * REPEL_STRENGTH * 0.3;
            }
          }

          if (bean.firstFrame) {
            mesh.position.copy(rest);
            bean.firstFrame = false;
          } else {
            vel.x += (rest.x - mesh.position.x) * SPRING;
            vel.y += (rest.y - mesh.position.y) * SPRING;
            vel.z += (rest.z - mesh.position.z) * SPRING;
            vel.multiplyScalar(DAMPING);
            mesh.position.add(vel);
          }

          mesh.quaternion.copy(this.camera.quaternion);
          bean.phase += bean.spin + vel.length() * 0.1;
          mesh.rotateZ(bean.phase);
        }

        this.renderer.render(this.scene, this.camera);
      }

      destroy() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        if (this.renderer) {
          this.renderer.dispose();
          if (this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
          }
        }
      }
    }

    const beanField = new BeanField(container);

    const handleResize = () => beanField.resize();
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      beanField.update();
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveCursor);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      beanField.destroy();
    };
  }, []);

  return (
    <>
      <div 
        id="beanCanvas" 
        ref={mountRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div 
        id="cursor" 
        ref={cursorRef} 
        className="custom-cursor"
      />
    </>
  );
}