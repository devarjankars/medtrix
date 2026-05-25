'use client';
 
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
 
interface CapsuleFlowProps {
  glbUrl?: string;
  count?: number;
  className?: string;
  style?: React.CSSProperties;
}
 
/**
 * CapsuleFlow
 *
 * The renderer is sized to the full viewport so world-space coordinates
 * match the screen. A scissor rect clips drawing to just this container's
 * bounds, so capsules flow across the entire screen width while only
 * appearing inside the section.
 *
 * Usage:
 *   <section className="relative h-[500px] overflow-hidden">
 *     <CapsuleFlow className="absolute inset-0 z-0" />
 *     <div className="relative z-10">content</div>
 *   </section>
 */
export default function CapsuleFlow({
  glbUrl = '/img/capsule.glb',
  count = 600,
  className = '',
  style,
}: CapsuleFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
 
    // ── renderer sized to FULL VIEWPORT ───────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 7, 12);
 
    // Camera aspect = full viewport so world-space X spans the whole screen
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10);
 
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setScissorTest(true); // only draw inside the container rect
 
    // Canvas sits absolute over the container, but is sized to the viewport
    const canvas = renderer.domElement;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);
 
    renderer.setSize(window.innerWidth, window.innerHeight);
 
    // ── lights ─────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.05));
    const keyLight = new THREE.DirectionalLight(0xffeacc, 0.4);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);
    const warmLight = new THREE.PointLight(0xff8a40, 0.5, 22);
    warmLight.position.set(-5, -3, 5);
    scene.add(warmLight);
    const hoverLight = new THREE.PointLight(0xffffff, 0, 0);
    scene.add(hoverLight);
 
    // ── raycaster ─────────────────────────────────────────────────────────
    const plane     = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();
    const ndc       = new THREE.Vector2();
    const hitPoint  = new THREE.Vector3();
    const cursor    = new THREE.Vector3();
    let cursorActive = false;
 
    // ── curve — built in full-viewport world space ─────────────────────────
    let curve = new THREE.CatmullRomCurve3([]);
 
    const getFullVisSize = () => {
      const dist = camera.position.z;
      const visH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * dist;
      const visW = visH * (window.innerWidth / window.innerHeight);
      return { visW, visH };
    };
 
    const buildCurve = () => {
      const { visW, visH } = getFullVisSize();
      const rect = container.getBoundingClientRect();
      // Convert container center from screen-space to world-space Y
      const containerCenterY = rect.top + rect.height / 2;
      const ndcY = 1 - (containerCenterY / window.innerHeight) * 2;
      const worldY = ndcY * (visH / 2);
      curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-visW * 0.52,  worldY + visH * 0.15, 0),
        new THREE.Vector3(-visW * 0.3,   worldY + visH * 0.08, 0),
        new THREE.Vector3(-visW * 0.1,   worldY + visH * 0.02, 0),
        new THREE.Vector3( visW * 0.1,   worldY - visH * 0.02, 0),
        new THREE.Vector3( visW * 0.3,   worldY - visH * 0.08, 0),
        new THREE.Vector3( visW * 0.52,  worldY - visH * 0.15, 0),
      ]);
    };
 
    buildCurve();
 
    // ── beans ──────────────────────────────────────────────────────────────
    type Bean = {
      mesh: THREE.Object3D;
      progress: number;
      radialAngle: number;
      radialDist: number;
      rest: THREE.Vector3;
      vel: THREE.Vector3;
      spin: number;
      phase: number;
      firstFrame: boolean;
    };
 
    const beans: Bean[] = [];
    const TABLET_SIZE = 0.38;
 
    const indices = Array.from({ length: count }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
 
    const addBean = (mesh: THREE.Object3D, index: number) => {
      scene.add(mesh);
      beans.push({
        mesh,
        progress:    -0.5 + (index / count) * 1.6,
        radialAngle: Math.random() * Math.PI * 2,
        radialDist:  Math.sqrt(Math.random()),
        rest:        new THREE.Vector3(),
        vel:         new THREE.Vector3(),
        spin:        (Math.random() - 0.5) * 0.06,
        phase:       Math.random() * Math.PI * 4,
        firstFrame:  true,
      });
    };
 
    new GLTFLoader().load(glbUrl, (gltf) => {
      const source = gltf.scene;
      const size   = new THREE.Vector3();
      new THREE.Box3().setFromObject(source).getSize(size);
      const scale  = TABLET_SIZE / Math.max(size.x, size.y, size.z, 1);
      for (let i = 0; i < count; i++) {
        if (!indices.length) break;
        const mesh = source.clone(true);
        mesh.scale.setScalar(scale);
        addBean(mesh, indices.pop()!);
      }
    });
 
    // ── events ─────────────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      // NDC relative to full viewport for correct world-space hit
      ndc.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(ndc, camera);
      if (raycaster.ray.intersectPlane(plane, hitPoint)) {
        cursor.copy(hitPoint);
        cursorActive = true;
      }
    };
 
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      buildCurve();
    };
 
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
 
    // ── animation loop ─────────────────────────────────────────────────────
    const REPEL_RADIUS   = 2.2;
    const REPEL_STRENGTH = 3.0;
    const SPRING         = 0.000;
    const DAMPING        = 0.0;
    const FLOW_SPEED     = 0;
 
    const clock = new THREE.Clock();
    let rafId: number;
 
    const animate = () => {
      rafId = requestAnimationFrame(animate);
 
      // ── scissor: clip to container's screen rect ───────────────────────
      const rect = container.getBoundingClientRect();
      const dpr  = renderer.getPixelRatio();
 
      // Convert CSS rect → physical pixels (bottom-left origin for WebGL)
      const x      = Math.round(rect.left   * dpr);
      const y      = Math.round((window.innerHeight - rect.bottom) * dpr);
      const width  = Math.round(rect.width  * dpr);
      const height = Math.round(rect.height * dpr);
 
      renderer.setScissor(x, y, width, height);
      renderer.setViewport(0, 0, window.innerWidth * dpr, window.innerHeight * dpr);

      // Rebuild curve every frame so it tracks the container's scroll position
      buildCurve();

      if (curve.points.length < 2 || beans.length === 0) {
        renderer.render(scene, camera);
        return;
      }
 
      const dt = clock.getDelta();
 
      if (cursorActive) {
        hoverLight.position.set(cursor.x, cursor.y, 3.5);
        hoverLight.intensity = THREE.MathUtils.lerp(hoverLight.intensity, 100, 0.05);
      } else {
        hoverLight.intensity = THREE.MathUtils.lerp(hoverLight.intensity, 0, 0.05);
      }
 
      for (const bean of beans) {
        const { mesh, rest, vel, radialAngle, radialDist } = bean;
 
        const p     = THREE.MathUtils.clamp(bean.progress, 0, 1);
        const dir   = curve.getTangentAt(p).normalize();
        const perp1 = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
        const perp2 = new THREE.Vector3(0, 0, 0.8);
        const pipeR = THREE.MathUtils.lerp(2.2, 1.0, p);
 
        bean.progress += FLOW_SPEED * dt;
        if (bean.progress > 1.2) {
          bean.progress -= 1.4;
          mesh.position.copy(curve.getPointAt(THREE.MathUtils.clamp(bean.progress, 0, 1)));
          vel.set(0, 0, 0);
        }
 
        rest.copy(curve.getPointAt(p));
        rest.addScaledVector(perp1, Math.cos(radialAngle) * radialDist * pipeR);
        rest.addScaledVector(perp2, Math.sin(radialAngle) * radialDist * pipeR);
 
        if (cursorActive) {
          const dx = mesh.position.x - cursor.x;
          const dy = mesh.position.y - cursor.y;
          const dz = mesh.position.z - cursor.z;
          const d  = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < REPEL_RADIUS && d > 0.001) {
            const f = (1 - d / REPEL_RADIUS) ** 2;
            vel.x += (dx / d) * f * REPEL_STRENGTH;
            vel.y += (dy / d) * f * REPEL_STRENGTH;
            vel.z += (dz / d) * f * REPEL_STRENGTH * 0.3;
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
 
        mesh.quaternion.copy(camera.quaternion);
        bean.phase += bean.spin + vel.length() * 0.1;
        mesh.rotateZ(bean.phase);
      }
 
      renderer.render(scene, camera);
    };
 
    animate();
 
    // ── cleanup ────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (document.body.contains(canvas)) document.body.removeChild(canvas);
    };
  }, [glbUrl, count]);
 
  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
 