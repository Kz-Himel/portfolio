"use client";

import Image from "next/image";
import { FiAward } from "react-icons/fi";
import Reveal from "./Reveal";

function AchievementCard({ achievement, index, onClick }) {
  const { label, issuer, detail, image } = achievement;

  return (
    <Reveal delay={0.06 + index * 0.06} blur={false}>
      <button
        type="button"
        onClick={onClick}
        className="box p-0 h-full w-full text-left overflow-hidden group cursor-pointer"
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-border">
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-accent">
              <FiAward size={18} />
            </span>
            <span className="font-mono text-[10px] text-text-muted">0{index + 1}</span>
          </div>
          <h3 className="font-mono font-bold text-[14.5px] text-text-main leading-snug mb-1.5">
            {label}
          </h3>
          <div className="text-[12px] text-text-soft">{issuer}</div>
          <div className="text-[11px] text-text-muted mt-0.5">{detail}</div>
        </div>
      </button>
    </Reveal>
  );
}

export default AchievementCard;