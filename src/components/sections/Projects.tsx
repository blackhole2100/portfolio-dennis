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

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const imageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentItem = media[currentIndex];
  const hasMultipleMedia = media.length > 1;

  const clearImageTimer = () => {
    if (imageTimerRef.current) {
      clearTimeout(imageTimerRef.current);
      imageTimerRef.current = null;
    }
  };

  const stopAllVideos = () => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  };

  const goTo = (index: number) => {
    if (!media[index]) return;

    clearImageTimer();
    stopAllVideos();

    setCurrentIndex(index);
  };

  const next = () => {
    if (!hasMultipleMedia) return;

    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const previous = () => {
    if (!hasMultipleMedia) return;

    setCurrentIndex(
      (prev) => (prev - 1 + media.length) % media.length
    );
  };

  /*
   * Images:
   * Display for 3 seconds, then move to the next item.
   */
  useEffect(() => {
    clearImageTimer();

    if (!currentItem) return;
    if (currentItem.type !== "image") return;
    if (!hasMultipleMedia) return;

    imageTimerRef.current = setTimeout(() => {
      next();
    }, 3000);

    return () => {
      clearImageTimer();
    };
  }, [currentIndex]);

  /*
   * Start the active video.
   *
   * Important:
   * We do not reset currentTime here.
   * The video is only started when it becomes the active item.
   */
  useEffect(() => {
    if (!currentItem || currentItem.type !== "video") {
      return;
    }

    const video = videoRefs.current[currentIndex];

    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, {
        once: true,
      });

      return () => {
        video.removeEventListener("canplay", playVideo);
      };
    }
  }, [currentIndex]);

  /*
   * Cleanup.
   */
  useEffect(() => {
    return () => {
      clearImageTimer();
      stopAllVideos();
    };
  }, []);

  if (!currentItem) {
    return null;
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
      {/* Horizontal Media Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {media.map((item, index) => (
          <div
            key={`${title}-${index}-${item.src}`}
            className="relative h-full min-w-full shrink-0"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                src={item.src}
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
                onEnded={() => {
                  if (index === currentIndex) {
                    next();
                  }
                }}
              />
            )}
          </div>
        ))}
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
                onClick={() => goTo(index)}
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