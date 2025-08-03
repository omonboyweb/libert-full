import { useState } from "react";
import { Header } from "./layouts/header";
import { Navigation } from "./components/navigation";
import { Home } from "./pages/home/home";

function App() {
  return (
    <>
      <Header />
      <Navigation
        style="text-base text-blueBorder font-semibold flex cursor-pointer  "
        blockStyle="container w-full max-w-[1240px] px-5 py-2 flex items-center  gap-5"
        parent="  border-y border-borderColor"
      />
      <Home />
    </>
  );
}

export default App;
