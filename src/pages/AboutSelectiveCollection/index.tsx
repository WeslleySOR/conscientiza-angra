import { AboutSelectiveCollectionComponentMobile } from "../../components/AboutSelectiveCollectionComponent/Mobile";
import { AboutSelectiveCollectionComponentWeb } from "../../components/AboutSelectiveCollectionComponent/Web";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function AboutSelectiveCollection() {
  const { width } = useWindowDimensions();

  return (
    <>
      {width < 1024 ? (
        <AboutSelectiveCollectionComponentMobile />
      ) : (
        <AboutSelectiveCollectionComponentWeb />
      )}
    </>
  );
}
