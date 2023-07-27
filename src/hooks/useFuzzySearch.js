import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TextInput } from "@tremor/react";

export function useFuzzySearch(list, options, placeholder) {
  const [results, setResults] = useState([]);

  const fuzzySearchInput = (
    <TextInput
      icon={MagnifyingGlassIcon}
      placeholder={placeholder}
      onChange={async (e) => {
        const { value } = e.currentTarget;
        // Dynamically load fuse.js
        const Fuse = (await import("fuse.js")).default;
        const fuse = new Fuse(list, options);
        setResults(fuse.search(value));
      }}
    />
  );

  return {
    fuzzySearchInput,
    results,
  };
}
