"use client";

export default function StandardPanel({ position, children }) {
  const transform =
    position === "active" ? "translateY(0)" : position === "before" ? "translateY(-100%)" : "translateY(100%)";

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center-safe overflow-y-auto px-8 py-24 transition-all duration-500 ease-in-out"
      style={{
        transform,
        opacity: position === "active" ? 1 : 0,
        pointerEvents: position === "active" ? "auto" : "none",
      }}
    >
      <div className="w-full max-w-2xl lg:max-w-full">{children}</div>
    </div>
  );
}
