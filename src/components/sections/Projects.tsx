"use client";

import { useState } from "react";

// import { ExternalLink } from "lucide-react";
// import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { personalProjects } from "@/data/personal-projects";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});

  const nextImage = (title: string, total: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [title]: ((prev[title] ?? 0) + 1) % total,
    }));
  };

  const previousImage = (title: string, total: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [title]: ((prev[title] ?? 0) - 1 + total) % total,
    }));
  };

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        index="04"
        eyebrow="Personal Projects"
        title="Selected Projects"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personalProjects.map((p, i) => {
          const currentImage = activeImages[p.title] ?? 0;
          const hasMultipleImages = p.image.length > 1;
          return (
            <Reveal key={p.title} delay={Math.min(i * 0.05, 0.25)}>
              <SpotlightCard className="group flex h-full flex-col p-6">
                {/* Project Image */}
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image
                    src={p.image[currentImage]}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {hasMultipleImages && (
                    <>
                      {/* Previous */}
                      <button
                        type="button"
                        onClick={() =>
                          previousImage(p.title, p.image.length)
                        }
                        aria-label={`Previous image for ${p.title}`}
                        className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                      >
                        ←
                      </button>

                      {/* Next */}
                      <button
                        type="button"
                        onClick={() =>
                          nextImage(p.title, p.image.length)
                        }
                        aria-label={`Next image for ${p.title}`}
                        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                      >
                        →
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {p.image.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() =>
                              setActiveImages((prev) => ({
                                ...prev,
                                [p.title]: index,
                              }))
                            }
                            aria-label={`Show image ${index + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                              index === currentImage
                                ? "w-4 bg-white"
                                : "w-1.5 bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
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
          );
        })}
      </div>
    </section>
  );
}