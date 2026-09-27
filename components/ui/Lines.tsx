import { Fragment } from "react";

/**
 * 카피 줄바꿈 표시.
 *   \n → 모든 화면에서 줄바꿈
 *   ‖  → 데스크탑(md 이상)에서만 줄바꿈 — 폰에서는 띄어쓰기 한 칸으로 이어 흘린다
 *   ¦  → 폰에서만 줄바꿈 — 데스크탑에서는 띄어쓰기 한 칸
 * 문장이 숨 쉬는 자리에서만 끊는다. 단어 중간은 globals.css의 keep-all이 막는다.
 * 표시 앞뒤에는 공백을 두지 않는다(여기서 필요한 쪽에만 한 칸을 넣는다).
 */
export default function Lines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split(/\s*([‖¦])\s*/).map((part, j) =>
            part === "‖" ? (
              <Fragment key={j}>
                <span className="md:hidden"> </span>
                <br className="hidden md:block" />
              </Fragment>
            ) : part === "¦" ? (
              <Fragment key={j}>
                <br className="md:hidden" />
                <span className="hidden md:inline"> </span>
              </Fragment>
            ) : (
              <Fragment key={j}>{part}</Fragment>
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}
