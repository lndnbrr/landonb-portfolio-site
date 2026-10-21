// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const UIModeContext = createContext(null); 
// const STORAGE_KEY = "landonb-ui-mode";

// export function UIModeProvider({ children }) {

//   const [mode, setMode] = useState("interactive");
//   const [hydrated, setHydrated] = useState(false);

//   useEffect(() => {
//     const stored = window.localStorage.getItem(STORAGE_KEY);
//     if (stored === "interactive" || stored === "standard") {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setMode(stored);
//     }
//     setHydrated(true);
//   }, []);

//   useEffect(() => {
//     if (hydrated) {
//       window.localStorage.setItem(STORAGE_KEY, mode);
//     }
//   }, [mode, hydrated]);

//   return (
//     <UIModeContext.Provider value={{ mode, setMode, hydrated }}>
//       {children}
//     </UIModeContext.Provider>
//   );
// }

// export function useUIMode() {
//   const ctx = useContext(UIModeContext);
//   if (!ctx) {
//     throw new Error("useUIMode must be used within a UIModeProvider");
//   }
//   return ctx;
// }
