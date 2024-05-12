import { Oval as LoaderSpinner } from "react-loader-spinner";
import { LoadingParamsType } from "./types";
import { Wrapper } from "./styles";

function Loading({ size, color, margin = "20px auto" }: Readonly<LoadingParamsType>) {
  let loadingSize = 36;

  if (size === "small") loadingSize = 24;
  if (size === "large") loadingSize = 42;

  return (
    <Wrapper $margin={margin}>
      <LoaderSpinner
        height={loadingSize}
        width={loadingSize}
        color={color ?? "var(--dark-gray)"}
        ariaLabel="loading"
        secondaryColor="none"
        strokeWidth={2}
        strokeWidthSecondary={2}
        visible
      />
    </Wrapper>
  );
}

export { Loading };
