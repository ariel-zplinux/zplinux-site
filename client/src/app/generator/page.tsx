"use client";
import React, { useRef } from "react";

export default function IconGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadIcon = (size: number, name: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    // Background: Dark Slate (#020617)
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, size, size);

    // Terminal Box: Blue (#2563eb)
    const padding = size * 0.15;
    const radius = size * 0.1;
    ctx.fillStyle = "#2563eb";
    ctx.beginPath();
    ctx.roundRect(
      padding,
      padding,
      size - padding * 2,
      size - padding * 2,
      radius,
    );
    ctx.fill();

    // Prompt ">"
    ctx.strokeStyle = "white";
    ctx.lineWidth = size * 0.08;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(size * 0.35, size * 0.35);
    ctx.lineTo(size * 0.55, size * 0.5);
    ctx.lineTo(size * 0.35, size * 0.65);
    ctx.stroke();

    // Cursor "_"
    ctx.beginPath();
    ctx.moveTo(size * 0.6, size * 0.65);
    ctx.lineTo(size * 0.75, size * 0.65);
    ctx.stroke();

    // Trigger Download
    const link = document.createElement("a");
    link.download = name;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="p-20 bg-slate-950 min-h-screen text-white text-center">
      <h1 className="text-2xl font-bold mb-10">Zplinux PWA Icon Generator</h1>
      <canvas ref={canvasRef} className="hidden" />
      <div className="flex flex-col gap-4 max-w-xs mx-auto">
        <button
          onClick={() => downloadIcon(192, "icon-192x192.png")}
          className="bg-blue-600 p-4 rounded-xl"
        >
          Download 192x192
        </button>
        <button
          onClick={() => downloadIcon(512, "icon-512x512.png")}
          className="bg-blue-600 p-4 rounded-xl"
        >
          Download 512x512
        </button>
      </div>
      <p className="mt-8 text-slate-500">
        Place these in your <b>/public/icons/</b> folder.
      </p>
    </div>
  );
}
