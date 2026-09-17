"use client";

import { useRef, useState } from "react";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startCamera() {
    setError(null);
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = cameraStream;
      }

      setStream(cameraStream);
    } catch (error) {
      console.error("Camera error:", error);
      setError("Camera access failed. Please allow camera access and try again.")
    }
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });

      setStream(null);
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full max-w-2xl rounded-xl -scale-x-100"
      />

      <div className="mt-4">
        {!stream ? (
          <button
            onClick={startCamera}
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white"
          >
            Start Camera
          </button>
        ) : (
          <button
            onClick={stopCamera}
            className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white"
          >
            Stop Camera
          </button>
        )}
        {error && (
        <p className="mt-4 text-red-500">
        {error}
        </p>
        )}
      </div>
    </div>
  );
}