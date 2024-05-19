import { ToastContentParamsType } from "./types";
import { Wrapper } from "./styles";

function ToastContent({ title, text }: Readonly<ToastContentParamsType>) {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      <p>{text}</p>
    </Wrapper>
  );
}

export { ToastContent };
