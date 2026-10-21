// "use client";

// import { useUIMode } from "./context/UIModeContext";
// import InteractiveUI from "./components/interactive/InteractiveUI";
import StandardUI from "./components/standard/StandardUI";

export default function Home() {
  // const { mode } = useUIMode();
  // return mode === "standard" ? <StandardUI/> : <InteractiveUI/>;
  return <StandardUI/>
}
