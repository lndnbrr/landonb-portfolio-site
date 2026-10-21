// "use client";

// import { MdViewAgenda, MdTouchApp } from "react-icons/md";
// import { useUIMode } from "../context/UIModeContext";

// const modes = [
//   { id: "interactive", label: "Interactive", icon: MdViewAgenda },
//   { id: "standard", label: "Standard", icon: MdTouchApp },
// ];

// export default function UIModeToggle() {
//   const { mode, setMode } = useUIMode();

//   return (
//     <div
//       className={`fixed right-10 z-[60] flex gap-1 rounded-full border border-foreground bg-background p-1 shadow-lg ${
//         mode === "standard" ? "top-10" : "bottom-6"
//       }`}
//     >
//       {modes.map(({ id, label, icon: Icon }) => {
//         const isActive = id === mode;
//         return (
//           <button
//             key={id}
//             type="button"
//             aria-label={`${label} mode`}
//             aria-pressed={isActive}
//             onClick={() => setMode(id)}
//             className={`group relative rounded-full p-2 transition-colors duration-300 ${
//               isActive ? "bg-foreground text-background" : "text-foreground"
//             }`}
//           >
//             <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-sm font-semibold text-background opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
//               {label}
//             </span>
//             <Icon
//               size={20}
//               className={`transition-opacity duration-300 ${isActive ? "" : "opacity-60 group-hover:opacity-100"}`}
//             />
//           </button>
//         );
//       })}
//     </div>
//   );
// }
