"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera error:", error);
      }
    }

    startCamera();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">
        JaryAI
      </h1>

      <p className="mb-6 text-lg">
        Form Checker Assistant
      </p>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full max-w-2xl rounded-xl"
      />
    </main>
  );
}