'use client';

import { useRef, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import Link from 'next/link';

interface MagneticLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    strength?: number; // How much the item moves (pixels)
    activeStrength?: number; // How much the item moves when active (pixels) - not used but kept for API compat
}

export default function MagneticLink({
    href,
    children,
    className = '',
    style = {},
    strength = 30
}: MagneticLinkProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics configuration for realistic magnetic feel
    // Stiffness: tension of the spring
    // Damping: friction (opposes motion)
    // Mass: weight of the object
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };

    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        x.set(distanceX * (strength / 100)); // Tune strength divisor
        y.set(distanceY * (strength / 100));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY, ...style }}
            className={className}
        >
            <Link href={href} style={{ display: 'block', width: '100%', height: '100%' }}>
                {children}
            </Link>
        </motion.div>
    );
}
