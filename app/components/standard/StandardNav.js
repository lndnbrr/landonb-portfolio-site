"use client";

export default function StandardNav({ sections, activeId, onSelect }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex flex-row justify-around border-t border-foreground/20 bg-background/90 px-2 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:inset-x-auto lg:bottom-auto lg:right-1 lg:top-1/2 lg:-mr-1 lg:-translate-y-1/2 lg:flex-col lg:justify-start lg:gap-4 lg:border-0 lg:bg-transparent lg:p-3 lg:backdrop-blur-none">
      {sections.map(({ id, label, icon: Icon }) => {
        const isActive = id === activeId;
        return (
          <button
            key={id}
            type="button"
            aria-label={label}
            aria-current={isActive ? "true" : undefined}
            onClick={() => onSelect(id)}
            className="group relative flex items-center justify-center p-2 lg:p-0"
          >
            <span
              className={`pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-sm font-semibold text-background transition-all duration-300 ease-out lg:block ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
              }`}
            >
              {label}
            </span>
            <Icon
              size={20}
              className={`transition-all duration-300 ${
                isActive ? "scale-125 opacity-100" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            {isActive && <span className="absolute bottom-0 h-0.5 w-4 rounded-full bg-foreground lg:hidden" />}
          </button>
        );
      })}
    </nav>
  );
}
