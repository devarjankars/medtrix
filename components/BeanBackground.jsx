'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function BeanBackground({ className = '', style, spotlightRef }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        let beans = [];
        const cursor = new THREE.Vector3();
        let cursorActive = false;
        const clock = new THREE.Clock();
        let curve = new THREE.CurvePath();

        const W = container.offsetWidth || window.innerWidth;
        const H = container.offsetHeight || window.innerHeight;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 7, 12);

        const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
        camera.position.set(0, 0, 10);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const canvas = renderer.domElement;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '0';
        container.appendChild(canvas);

        // Lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.05));
        const key = new THREE.DirectionalLight(0xffeacc, 0.4);
        key.position.set(6, 8, 6);
        scene.add(key);

        const warm = new THREE.PointLight(0xff8a40, 0.5, 22);
        warm.position.set(-5, -3, 5);
        scene.add(warm);

        const hoverLight = new THREE.PointLight(0xffffff, 0, 0);
        scene.add(hoverLight);

        const sectionLight = new THREE.PointLight(0xffffff, 0, 0);
        scene.add(sectionLight);

        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const raycaster = new THREE.Raycaster();
        const ndc = new THREE.Vector2();
        const hitPoint = new THREE.Vector3();

        const getVisSize = () => {
            const dist = camera.position.z;
            const visH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * dist;
            return { visW: visH * camera.aspect, visH };
        };

        const buildCurve = () => {
            const { visW, visH } = getVisSize();
            const getPoint = (rx, ry) => new THREE.Vector3(
                (rx - 0.5) * visW,
                (0.5 - ry) * visH,
                0
            );
            curve = new THREE.CatmullRomCurve3([
                getPoint(-0.5, 0.8), getPoint(0.05, 0.24), getPoint(0.18, 0.24),
                getPoint(0.32, 0.30), getPoint(0.42, 0.46), getPoint(0.52, 0.66),
                getPoint(0.68, 0.82), getPoint(0.88, 0.90), getPoint(1.12, 0.98), getPoint(1.35, 1.12),
            ]);
        };

        buildCurve();

        // Create Beans
      
        const isMobile = window.innerWidth < 768;
          const count = isMobile ? 500 : 1000;
        const TABLET_SIZE = isMobile ? 0.66 : 0.26;

        new GLTFLoader().load('/img/capsule.glb', (gltf) => {
            const source = gltf.scene;
            const size = new THREE.Vector3();
            new THREE.Box3().setFromObject(source).getSize(size);
            const scale = TABLET_SIZE / Math.max(size.y, size.x, size.z, 1);

            for (let i = 0; i < count; i++) {
                const mesh = source.clone(true);
                mesh.scale.setScalar(scale);
                scene.add(mesh);
                beans.push({
                    mesh,
                    progress: -0.5 + (i / count) * 1.6,
                    radialAngle: Math.random() * Math.PI * 2,
                    radialDist: Math.sqrt(Math.random()),
                    rest: new THREE.Vector3(),
                    vel: new THREE.Vector3(),
                    spin: (Math.random() - 0.5) * 0.06,
                    phase: Math.random() * Math.PI * 4,
                    firstFrame: true
                });
            }
        });

        const onMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(ndc, camera);
            if (raycaster.ray.intersectPlane(plane, hitPoint)) {
                cursor.copy(hitPoint);
                cursorActive = true;
            }
        };

        const onResize = () => {
            const w = container.offsetWidth || window.innerWidth;
            const h = container.offsetHeight || window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            buildCurve();
            beans.forEach(b => { b.firstFrame = true; });
        };

        const resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(container);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onResize);

        // Reusable vectors — allocated once, never inside the loop
        const _dir = new THREE.Vector3();
        const _perp1 = new THREE.Vector3();
        const _perp2 = new THREE.Vector3(0, 0, 0.8);
        const _repel = new THREE.Vector3();
        const _curvePoint = new THREE.Vector3();

        const REPEL_RADIUS = 2.2;
        const REPEL_STRENGTH = 3.0;
        const DAMPING = 0.88;
        const FLOW_SPEED = 0.025;

        // Pause when off-screen
        let isVisible = true;
        const visObserver = new IntersectionObserver(
            ([entry]) => { isVisible = entry.isIntersecting; },
            { threshold: 0 }
        );
        visObserver.observe(container);

        let rafId;
        const animate = () => {
            rafId = requestAnimationFrame(animate);
            if (!isVisible) return;

            const dt = clock.getDelta();

            if (cursorActive) {
                hoverLight.position.set(cursor.x, cursor.y, 3.5);
                hoverLight.intensity = THREE.MathUtils.lerp(hoverLight.intensity, 100.0, 0.05);
            } else {
                hoverLight.intensity = THREE.MathUtils.lerp(hoverLight.intensity, 0.0, 0.05);
            }

            // Tracking the .spotlight element and brightening passing tablets
            if (spotlightRef?.current) {
                const sRect = spotlightRef.current.getBoundingClientRect();
                const cRect = container.getBoundingClientRect();
                const cx = sRect.left + sRect.width / 2 - cRect.left;
                const cy = sRect.top + sRect.height / 2 - cRect.top;
                ndc.x = (cx / cRect.width) * 2 - 1;
                ndc.y = -(cy / cRect.height) * 2 + 1;
                raycaster.setFromCamera(ndc, camera);
                if (raycaster.ray.intersectPlane(plane, hitPoint)) {
                    sectionLight.position.set(hitPoint.x, hitPoint.y, 4.0);
                    sectionLight.intensity = THREE.MathUtils.lerp(sectionLight.intensity, 150.0, 0.05);
                }
            } else {
                sectionLight.intensity = THREE.MathUtils.lerp(sectionLight.intensity, 0.0, 0.05);
            }

            beans.forEach(bean => {
                const { mesh, rest, vel, radialAngle, radialDist } = bean;
                const p = THREE.MathUtils.clamp(bean.progress, 0, 1);

                curve.getTangentAt(p, _dir).normalize();
                _perp1.set(-_dir.y, _dir.x, 0).normalize();

                bean.progress += FLOW_SPEED * dt;
                if (bean.progress > 1.2) {
                    bean.progress -= 1.4;
                    curve.getPointAt(THREE.MathUtils.clamp(bean.progress, 0, 1), mesh.position);
                    vel.set(0, 0, 0);
                }

                curve.getPointAt(p, rest);
                const currentRadius = THREE.MathUtils.lerp(2.2, 1, p);
                rest.addScaledVector(_perp1, Math.cos(radialAngle) * radialDist * currentRadius);
                rest.addScaledVector(_perp2, Math.sin(radialAngle) * radialDist * currentRadius);

                if (bean.firstFrame) {
                    mesh.position.copy(rest);
                    bean.firstFrame = false;
                } else if (cursorActive) {
                    const distToCursor = mesh.position.distanceTo(cursor);
                    if (distToCursor < REPEL_RADIUS && distToCursor > 0.001) {
                        const f = (1 - distToCursor / REPEL_RADIUS) ** 2;
                        _repel.copy(mesh.position).sub(cursor).normalize().multiplyScalar(f * REPEL_STRENGTH);
                        vel.add(_repel);
                    }
                    vel.x += (rest.x - mesh.position.x) * 0.003;
                    vel.y += (rest.y - mesh.position.y) * 0.003;
                    vel.z += (rest.z - mesh.position.z) * 0.003;
                    vel.multiplyScalar(DAMPING);
                    mesh.position.add(vel);
                } else {
                    vel.set(0, 0, 0);
                    mesh.position.copy(rest);
                }

                mesh.quaternion.copy(camera.quaternion);
                bean.phase += bean.spin + vel.length() * 0.1;
                mesh.rotateZ(bean.phase);
            });

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(rafId);
            resizeObserver.disconnect();
            visObserver.disconnect();
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            if (container.contains(canvas)) container.removeChild(canvas);
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%', ...style }} />;
}
