'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function BeanBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        let beans = [];
        const cursor = new THREE.Vector3();
        let cursorActive = false;
        const clock = new THREE.Clock();
        let curve = new THREE.CurvePath();
        let lastSectionTop;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 7, 12);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 10);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        const maxDPR = window.innerWidth < 768 ? 1.5 : 2;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
        container.appendChild(renderer.domElement);

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

        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const raycaster = new THREE.Raycaster();
        const ndc = new THREE.Vector2();
        const hitPoint = new THREE.Vector3();

        const updateCurve = (visW, visH) => {
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
                getPoint(-0.5, 0.8), getPoint(0.05, 0.24), getPoint(0.18, 0.24),
                getPoint(0.32, 0.30), getPoint(0.42, 0.46), getPoint(0.52, 0.66),
                getPoint(0.68, 0.82), getPoint(0.88, 0.90), getPoint(1.12, 0.98), getPoint(1.35, 1.12),
            ];
            curve = new THREE.CatmullRomCurve3(points);
            if (lastSectionTop === undefined) lastSectionTop = rect.top;
        };

        // Init Curve
        const dist = camera.position.z;
        const vFov = THREE.MathUtils.degToRad(camera.fov);
        const visH = 2 * Math.tan(vFov / 2) * dist;
        updateCurve(visH * (window.innerWidth / window.innerHeight), visH);

        // Dynamic count & size based on screen
        const getConfig = () => {
            const area = window.innerWidth * window.innerHeight;
            const isMobile = window.innerWidth < 768;
            const count = Math.round(THREE.MathUtils.clamp(area / 500, 300, 2000));
            const TABLET_SIZE = isMobile ? 0.28 : 0.38;
            return { count, TABLET_SIZE };
        };

        // Create Beans
        const gltfLoader = new GLTFLoader();
        let { count, TABLET_SIZE } = getConfig();

        let sourceRef = null;
        let sourceScaleRef = 1;

        gltfLoader.load('/img/capsule.glb', (gltf) => {
            const source = gltf.scene;
            const bbox = new THREE.Box3().setFromObject(source);
            const size = new THREE.Vector3();
            bbox.getSize(size);
            sourceScaleRef = Math.max(size.y, size.x, size.z, 1);
            sourceRef = source;
            const scale = TABLET_SIZE / sourceScaleRef;

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
            ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
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
            const maxDPR = window.innerWidth < 768 ? 1.5 : 2;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
            const dist = camera.position.z;
            const vFov = THREE.MathUtils.degToRad(camera.fov);
            const visH = 2 * Math.tan(vFov / 2) * dist;
            updateCurve(visH * camera.aspect, visH);

            // Adjust bean count on resize
            const newConfig = getConfig();
            if (newConfig.count !== beans.length && sourceRef) {
                const newScale = newConfig.TABLET_SIZE / sourceScaleRef;
                while (beans.length > newConfig.count) {
                    const b = beans.pop();
                    scene.remove(b.mesh);
                }
                while (beans.length < newConfig.count) {
                    const i = beans.length;
                    const mesh = sourceRef.clone(true);
                    mesh.scale.setScalar(newScale);
                    scene.add(mesh);
                    beans.push({
                        mesh,
                        progress: -0.5 + (i / newConfig.count) * 1.6,
                        radialAngle: Math.random() * Math.PI * 2,
                        radialDist: Math.sqrt(Math.random()),
                        rest: new THREE.Vector3(),
                        vel: new THREE.Vector3(),
                        spin: (Math.random() - 0.5) * 0.06,
                        phase: Math.random() * Math.PI * 4,
                        firstFrame: true
                    });
                }
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onResize);

        const animate = () => {
            const requestID = requestAnimationFrame(animate);
            const dt = clock.getDelta();
            const REPEL_RADIUS = 2.2;
            const REPEL_STRENGTH = 3.0;
            const SPRING = 0.003;
            const DAMPING = 0.88;
            const FLOW_SPEED = 0.025;

            const currentDist = camera.position.z;
            const currentVFov = THREE.MathUtils.degToRad(camera.fov);
            const currentVisH = 2 * Math.tan(currentVFov / 2) * currentDist;
            const currentVisW = currentVisH * camera.aspect;

            const section = document.querySelector('.philosophy-section');
            if (section) {
                const rect = section.getBoundingClientRect();
                if (lastSectionTop !== undefined) {
                    const deltaY3D = -((rect.top - lastSectionTop) / window.innerHeight) * currentVisH;
                    beans.forEach(b => b.mesh.position.y += deltaY3D);
                }
                lastSectionTop = rect.top;
            }
            updateCurve(currentVisW, currentVisH);

            if (cursorActive) {
                hoverLight.position.set(cursor.x, cursor.y, 3.5);
                hoverLight.intensity = THREE.MathUtils.lerp(hoverLight.intensity, 100.0, 0.05);
            } else {
                hoverLight.intensity = THREE.MathUtils.lerp(hoverLight.intensity, 0.0, 0.05);
            }

            beans.forEach(bean => {
                const { mesh, rest, vel, radialAngle, radialDist } = bean;
                const p = THREE.MathUtils.clamp(bean.progress, 0, 1);
                const dir = curve.getTangentAt(p).normalize();
                const perp1 = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
                const perp2 = new THREE.Vector3(0, 0, 0.8);

                bean.progress += FLOW_SPEED * dt;
                if (bean.progress > 1.2) {
                    bean.progress -= 1.4;
                    mesh.position.copy(curve.getPointAt(THREE.MathUtils.clamp(bean.progress, 0, 1)));
                    vel.set(0, 0, 0);
                }

                rest.copy(curve.getPointAt(p));
                const currentRadius = THREE.MathUtils.lerp(2.2, 1, p);
                rest.addScaledVector(perp1, Math.cos(radialAngle) * radialDist * currentRadius);
                rest.addScaledVector(perp2, Math.sin(radialAngle) * radialDist * currentRadius);

                if (cursorActive) {
                    const distToCursor = mesh.position.distanceTo(cursor);
                    if (distToCursor < REPEL_RADIUS && distToCursor > 0.001) {
                        const f = (1 - distToCursor / REPEL_RADIUS) ** 2;
                        const repel = mesh.position.clone().sub(cursor).normalize().multiplyScalar(f * REPEL_STRENGTH);
                        vel.add(repel);
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
            });

            renderer.render(scene, camera);
            return requestID;
        };

        const requestID = animate();

        return () => {
            cancelAnimationFrame(requestID);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div id="beanCanvas" ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
}