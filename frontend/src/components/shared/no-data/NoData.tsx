import { useLocale } from "../../../hooks";
import { Wrapper } from "./styles";
import { NoDataParamsType } from "./types";

function NoData({ children, ...other }: Readonly<NoDataParamsType>) {
  const { t } = useLocale();
  return <Wrapper {...other}>{children ?? t("Common.NoData")}</Wrapper>;
}

export { NoData };
