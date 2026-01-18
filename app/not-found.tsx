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
                if (Math.random() < 0.1) { // 10% chance of noise pixel
                    buffer32[i] = 0xffffffff; // white
                }
            }

            ctx.putImageData(idata, 0, 0);
            requestAnimationFrame(drawNoise);
        };

        const animationId = requestAnimationFrame(drawNoise);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
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
                <Link href="/" className={styles.backButton}>
                    Voltar para o Início
                </Link>
            </div>
        </div>
    );
}
