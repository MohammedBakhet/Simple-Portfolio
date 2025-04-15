'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

export default function AnimatedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  loading = 'eager',
  sizes
}: AnimatedImageProps) {
  return (
    <div className="relative group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Subtle Background Effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%]">
            <div className="w-full h-full bg-gradient-to-r from-purple-100/20 via-transparent to-purple-100/20 blur-3xl rounded-[100%] animate-pulse"></div>
          </div>
        </div>

        {/* Image Container with Gradient Overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/10 to-purple-100/20 mix-blend-overlay"></div>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} relative z-10`}
            loading={loading}
            sizes={sizes}
            style={{ 
              objectFit: 'contain',
              filter: 'contrast(1.05) brightness(1.1) saturate(0.9)'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
} 