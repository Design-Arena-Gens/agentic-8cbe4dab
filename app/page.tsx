"use client";

import { CSSProperties } from "react";

const swirlCount = 8;
const sparkleCount = 16;

export default function Home() {
  return (
    <main className="viewport">
      <div className="scene">
        <div className="backdrop" />
        <div className="swirl-field">
          {Array.from({ length: swirlCount }).map((_, index) => (
            <div
              key={index}
              className="swirl"
              style={{ "--index": index } as CSSProperties}
            >
              <span />
            </div>
          ))}
        </div>
        <div className="sparkles">
          {Array.from({ length: sparkleCount }).map((_, index) => (
            <span
              key={index}
              className="sparkle"
              style={{ "--index": index } as CSSProperties}
            />
          ))}
        </div>
        <div className="cat">
          <div className="cat-body">
            <div className="cat-fur" />
            <div className="cat-chest" />
            <div className="cat-paw front left" />
            <div className="cat-paw front right" />
            <div className="cat-paw back left" />
            <div className="cat-paw back right" />
          </div>
          <div className="cat-tail">
            <span />
          </div>
          <div className="cat-head">
            <div className="cat-ear left" />
            <div className="cat-ear right" />
            <div className="cat-face">
              <div className="cat-eye left" />
              <div className="cat-eye right" />
              <div className="cat-blush left" />
              <div className="cat-blush right" />
              <div className="cat-nose" />
              <div className="cat-mouth" />
            </div>
            <div className="cat-fluff left" />
            <div className="cat-fluff right" />
          </div>
        </div>
      </div>
    </main>
  );
}
