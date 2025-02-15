'use client';

import { useRef } from "react";
import Image from "next/image";

export default function Canvas() {
  const canvasRef = useRef(null);
  return (
    <div
      className="relative w-[1000px] h-[1000px]"
    >
      {/* The canvas we are drawing to */}
      <canvas
        id="arcadiaMap"
        ref={canvasRef}
        width={1000}
        height={1000}
        className="absolute top-0 left-0"
      />
      {/* Background image that gets drawn under the canvas */}
      <Image
        src="/images/map.png"
        width={5000}
        height={5000}
        alt="Arcadia Map"
        className="absolute top-0 left-0 -z-10"
      />
    </div>
  )
}