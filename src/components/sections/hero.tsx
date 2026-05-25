"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(12,12,12,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,235,205,0.35),_transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      </div>

      <div className="absolute top-24 md:top-32 right-6 md:right-10 text-right">
        <p className="font-serif italic text-foreground/60 text-sm md:text-base">est. 2012 — Osaka, Japan</p>
      </div>

      <div className="mx-auto max-w-[1320px] w-full px-6 md:px-10 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-foreground/60 mb-8"
        >
          BC Partners Co., Ltd.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-balance text-[16vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5rem] leading-[0.92] tracking-[-0.04em]"
        >
          Bridge to<br />
          <span className="italic font-light">BUSINESS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-7">
            <p className="text-balance text-base md:text-lg leading-[2] text-foreground/85 font-serif">
              多様化するお客様のニーズと、サービス企業の課題。
              <br className="hidden md:inline" />
              その間に橋を架ける ── それが、私たちの仕事です。
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:justify-end items-end gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-[13px] tracking-[0.25em] uppercase border-b border-foreground pb-2 hover:gap-5 transition-all"
            >
              事業を見る
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
