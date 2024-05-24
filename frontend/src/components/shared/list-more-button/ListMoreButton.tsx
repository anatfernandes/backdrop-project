import { useEffect, useRef, useState } from "react";
import { useLocale } from "../../../hooks";
import { Button } from "../index";
import { ListMoreButtonParamsType } from "./types";

function ListMoreButton({
  type = "new",
  page = 1,
  limit = 20,
  refetch = false,
  loading,
  query,
  handleRefetchConfig,
  ...other
}: Readonly<ListMoreButtonParamsType>) {
  const { t } = useLocale();
  const [config, setConfig] = useState({ page, limit });
  const initialConfig = useRef({ page, limit });
  const loadNew = type === "new";
  const action = loadNew ? "New" : "More";

  useEffect(() => {
    setConfig(initialConfig.current);
  }, [refetch]);

  function handleLoad() {
    let newConfig = {
      ...config,
      page: config.page + 1,
    };

    if (loadNew) {
      newConfig = initialConfig.current;
      if (handleRefetchConfig) handleRefetchConfig(newConfig);
    }

    query(newConfig);
    setConfig(newConfig);
  }

  return (
    <Button
      rounded
      disabled={loading}
      config={{ $width: "fit-content", $padding: "0 1rem" }}
      {...other}
      onClick={handleLoad}
    >
      {t(`Post.Load.${action}`)}
    </Button>
  );
}

export { ListMoreButton };
