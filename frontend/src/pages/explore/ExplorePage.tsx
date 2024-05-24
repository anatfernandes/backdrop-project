import { useLocale } from "../../hooks";
import { Title } from "../../components/shared";
import { Explore } from "../../components/explore";

function ExplorePage() {
  const { t } = useLocale();

  return (
    <main>
      <Title align="start">{t("Explore.Explore")}</Title>

      <Explore />
    </main>
  );
}

export { ExplorePage };
