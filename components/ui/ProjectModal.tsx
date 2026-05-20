"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  open: boolean;
  title?: string;
  pdfUrl?: string | null;
  screenshots?: string[] | null;
  siteUrl?: string | null;
  onClose: () => void;
}

export default function ProjectModal({
  open,
  title,
  pdfUrl,
  screenshots,
  siteUrl,
  onClose,
}: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // 풀스크린 상태에서 Esc는 브라우저가 풀스크린 해제를 처리하므로
      // 모달까지 닫지 않도록 한 단계만 빠져나가게 함
      if (document.fullscreenElement) return;
      onClose();
    };
    window.addEventListener("keydown", onKey);

    const onFsChange = () =>
      setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFsChange);
      document.body.style.overflow = prevOverflow;
      // 모달 닫을 때 풀스크린도 같이 해제
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, [open, onClose]);

  const toggleFullscreen = async () => {
    if (!panelRef.current) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await panelRef.current.requestFullscreen();
      }
    } catch {
      // 사용자 거부 / 브라우저 미지원 등은 조용히 무시
    }
  };

  const hasContent = Boolean(pdfUrl) || (screenshots && screenshots.length > 0);

  return (
    <AnimatePresence>
      {open && hasContent && (
        <motion.div
          key="project-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Project viewer"}
        >
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />

          <motion.div
            ref={panelRef}
            className={`relative z-10 w-full bg-white shadow-2xl overflow-hidden flex flex-col ${
              isFullscreen
                ? "h-screen rounded-none"
                : "max-w-5xl h-[85vh] rounded-2xl"
            }`}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-100 bg-white">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                {title ?? "Project"}
              </h3>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {siteUrl && (
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md transition-colors"
                    title="사이트 방문"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    사이트 방문
                  </a>
                )}
                {pdfUrl && (
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-indigo-600 px-2.5 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
                    title="새 탭에서 열기"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span className="hidden sm:inline">새 탭</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label={isFullscreen ? "전체화면 해제" : "전체화면"}
                  title={isFullscreen ? "전체화면 해제" : "전체화면"}
                >
                  {isFullscreen ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 9V4M9 9H4M9 9L4 4m11 5h5m-5 0V4m0 5l5-5M9 15v5m0-5H4m5 0l-5 5m11-5h5m-5 0v5m0-5l5 5"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="닫기"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 overflow-hidden">
              {pdfUrl ? (
                <iframe
                  src={pdfUrl}
                  className="w-full h-full"
                  title={title ?? "PDF viewer"}
                />
              ) : screenshots && screenshots.length > 0 ? (
                <div className="w-full h-full overflow-y-auto">
                  <div
                    className={`mx-auto py-6 px-4 sm:px-6 space-y-6 ${
                      isFullscreen ? "max-w-6xl" : "max-w-3xl"
                    }`}
                  >
                    {screenshots.map((src, i) => (
                      <div
                        key={src}
                        className="relative w-full rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200"
                      >
                        <Image
                          src={src}
                          alt={`${title ?? "Screenshot"} ${i + 1}`}
                          width={1600}
                          height={1000}
                          sizes={
                            isFullscreen
                              ? "(max-width: 1280px) 100vw, 1280px"
                              : "(max-width: 768px) 100vw, 768px"
                          }
                          className="w-full h-auto"
                          priority={i === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
