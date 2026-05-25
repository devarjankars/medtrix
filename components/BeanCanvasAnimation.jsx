'use client';
 
import CapsuleFlow from '@/components/CapsuleFlow';
 
/**
 * BeanCanvasAnimation — legacy wrapper kept for backward compatibility.
 * Renders CapsuleFlow as a fixed full-viewport background layer.
 * For new usage prefer importing CapsuleFlow directly.
 */
export default function BeanCanvasAnimation() {
  return (
    <CapsuleFlow
      style={{
        position: 'absolute',
     
        width: '99vw',
        height: '100vh',
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
 