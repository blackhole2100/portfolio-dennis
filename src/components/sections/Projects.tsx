"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { personalProjects } from "@/data/personal-projects";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import Reveal from "@/components/Reveal";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type ProjectMediaProps = {
  title: string;
  media: MediaItem[];
};

function ProjectMedia({ title, media }: ProjectMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [entering, setEntering] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const imageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentItem = media[currentIndex];
  const hasMultipleMedia = media.length > 1;

  const clearImageTimer = () => {
    if (imageTimerRef.current) {
      clearTimeout(imageTimerRef.current);
      imageTimerRef.current = null;
    }
  };

  const goTo = (
    index: number,
    moveDirection: "next" | "previous" = "next"
  ) => {
    if (!media[index]) return;

    clearImageTimer();

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current = null;
    }

    setDirection(moveDirection);
    setEntering(true);
    setCurrentIndex(index);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setEntering(false);
      });
    });
  };

  const next = () => {
    if (!hasMultipleMedia) return;

    goTo(
      (currentIndex + 1) % media.length,
      "next"
    );
  };

  const previous = () => {
    if (!hasMultipleMedia) return;

    goTo(
      (currentIndex - 1 + media.length) % media.length,
      "previous"
    );
  };

  /*
   * Images stay visible for 3 seconds.
   */
  useEffect(() => {
    clearImageTimer();

    if (!currentItem) return;
    if (currentItem.type !== "image") return;
    if (!hasMultipleMedia) return;

    imageTimerRef.current = setTimeout(() => {
      next();
    }, 5000);

    return () => {
      clearImageTimer();
    };
  }, [currentIndex]);

  /*
   * Cleanup.
   */
  useEffect(() => {
    return () => {
      clearImageTimer();

      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  if (!currentItem) {
    return null;
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
      {/* Current Media */}
      <div
        key={`${title}-${currentIndex}`}
        className={`absolute inset-0 ${
          entering
            ? direction === "next"
              ? "translate-x-full"
              : "-translate-x-full"
            : "translate-x-0"
        } transition-transform duration-700 ease-in-out`}
      >
        {currentItem.type === "image" ? (
          <Image
            src={currentItem.src}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <video
            ref={videoRef}
            src={currentItem.src}
            muted
            autoPlay
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            onEnded={next}
            onLoadedData={(event) => {
              const video = event.currentTarget;

              if (video.paused) {
                video.play().catch(() => {});
              }
            }}
          />
        )}
      </div>

      {hasMultipleMedia && (
        <>
          {/* Previous */}
          <button
            type="button"
            onClick={previous}
            aria-label={`Previous media for ${title}`}
            className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            ←
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label={`Next media for ${title}`}
            className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            →
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
            {media.map((item, index) => (
              <button
                key={`${title}-dot-${index}`}
                type="button"
                onClick={() =>
                  goTo(
                    index,
                    index >= currentIndex ? "next" : "previous"
                  )
                }
                aria-label={`Show ${
                  item.type === "video" ? "video" : "image"
                } ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-4 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28"
    >
      <SectionHeading
        index="04"
        eyebrow="Personal Projects"
        title="Selected Projects"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {personalProjects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={Math.min(i * 0.05, 0.25)}
          >
            <SpotlightCard className="group flex h-full flex-col p-6">
              {/* Project Media */}
              <div className="mb-5">
                <ProjectMedia
                  title={p.title}
                  media={p.media}
                />
              </div>

              <div
                className="mb-5 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
                style={{
                  background: p.accent,
                  boxShadow: `0 0 16px ${p.accent}66`,
                }}
                aria-hidden
              />

              <h3 className="font-display mb-2 text-lg font-semibold">
                {p.title}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <div className="mt-auto">
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="glass-chip rounded px-2 py-0.5 font-mono text-[10px] text-subtle-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* <div className="flex items-center gap-2">
                  ...
                </div> */}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}