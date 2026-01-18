'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './not-found.module.css';

export default function NotFound() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawNoise = () => {
            const w = canvas.width;
            const h = canvas.height;
            const idata = ctx.createImageData(w, h);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                // Equivalent to: color = (Math.random() * 255) + 50;
                const gray = (Math.random() * 255) | 0; // 0-255 integer

                // buffer32 is ABGR (little-endian) or RGBA (big-endian).
                // We want opaque grayscale: Alpha=255, R=G=B=gray.
                // 0xff000000 (Alpha) | (gray << 16) | (gray << 8) | gray

                buffer32[i] =
                    (255 << 24) | // Alpha
                    (gray << 16) | // Blue
                    (gray << 8) | // Green
                    gray;          // Red
            }

            ctx.putImageData(idata, 0, 0);
            animationRef.current = requestAnimationFrame(drawNoise);
        };

        const animationRef = { current: 0 };
        animationRef.current = requestAnimationFrame(drawNoise);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>

            <div className={styles.frame}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.caps}>
                <img src="http://ademilter.com/caps.png" alt="Overlay" />
            </div>

            <canvas ref={canvasRef} className={styles.canvas} id="canvas"></canvas>

            <div className={styles.buttonContainer}>
                <p className={styles.subtitle}>Essa página mudou</p>
                <Link href="/" className={styles.backButton}>
                    Voltar para o Início
                </Link>
            </div>
        </div>
    );
}
