import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Tab, TabList, TabGroup } from "@tremor/react";

export default function ModeToggler() {
  const [mode, setMode] = useState(0);
  // const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  useEffect(() => {
    const element = document.querySelector("html");
    element.removeAttribute("class");
    console.log(mode, element.getAttribute("class"));
    element.classList.add(mode === 0 ? "dark" : "light");
    console.log(mode, element.getAttribute("class"));
  }, [mode]);

  return (
    <TabGroup
      className="hidden sm:inline-flex w-max ml-3"
      index={mode}
      onIndexChange={(mode) => setMode(mode)}
    >
      <TabList variant="solid">
        <Tab icon={MoonIcon} />
        <Tab icon={SunIcon} />
      </TabList>
    </TabGroup>
  );
}
