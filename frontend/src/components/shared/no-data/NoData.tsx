import { useLocale } from "../../../hooks";
import { Wrapper } from "./styles";

function NoData({ children }: Readonly<Partial<React.PropsWithChildren>>) {
  const { t } = useLocale();
  return <Wrapper>{children ?? t("Common.NoData")}</Wrapper>;
}

export { NoData };
