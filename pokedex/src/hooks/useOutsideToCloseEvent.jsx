import { useRef, useState, useEffect } from "react";

export default function useOutsideToCloseEvent() {
  const [toogleSelectWeakness, setToogleSelectWeakness] = useState(false);
  const [toogleSelectType, setToogleSelectType] = useState(false);
  const [toogleSelectGeneration, setToogleSelectGeneration] = useState(false);

  const filterWeaknessContainer = useRef(null);
  const filterTypeContainer = useRef(null);
  const filterGenerationContainer = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        filterGenerationContainer.current &&
        !filterGenerationContainer.current.contains(e.target)
      ) {
        setToogleSelectGeneration(false);
      }
      if (
        filterTypeContainer.current &&
        !filterTypeContainer.current.contains(e.target)
      ) {
        setToogleSelectType(false);
      }
      if (
        filterWeaknessContainer.current &&
        !filterWeaknessContainer.current.contains(e.target)
      ) {
        setToogleSelectWeakness(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return {
    filterGenerationContainer,
    filterTypeContainer,
    filterWeaknessContainer,
    toogleSelectGeneration,
    toogleSelectType,
    toogleSelectWeakness,
    setToogleSelectGeneration,
    setToogleSelectType,
    setToogleSelectWeakness,
  };
}
