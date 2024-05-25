import { useState } from "react";
import { useLocale } from "../../../../hooks";
import { TopicsSelect } from "../../../topics-select";
import { Form, Icon } from "../../../shared";
import { Title, Wrapper } from "./styles";
import {
  EventParamsType,
  FilterPostsParamsType,
  FilterFormType,
  ConfigType,
} from "./types";

function FilterPosts({
  handleChangeFilterPosts,
  loading = false,
  ...other
}: Readonly<FilterPostsParamsType>) {
  const { t } = useLocale();
  const [form, setForm] = useState({} as FilterFormType);
  const [config, setConfig] = useState<ConfigType>({ show: false, icon: "down-arrow" });

  function handleFilter(e: EventParamsType) {
    e.preventDefault();

    handleChangeFilterPosts(form);
    handleToggleFilter();
  }

  function handleToggleFilter() {
    const newConfig: ConfigType = {
      show: !config.show,
      icon: config.show ? "down-arrow" : "up-arrow",
    };

    setConfig(newConfig);
  }

  function handleChange(event: EventParamsType) {
    const { value, name: key } = event.target;
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleUpdateTopics(topics: string[]) {
    setForm((prev) => ({ ...prev, topics }));
  }

  return (
    <Wrapper tabIndex={0}>
      <Title onClick={handleToggleFilter}>
        <span>{t("Common.Filter")}</span>
        <Icon type={config.icon} size="1rem" color="var(--primary)" />
      </Title>

      <Form
        onSubmit={handleFilter}
        className={`${config.show ? "open" : "closed"}`}
        {...other}
      >
        <TopicsSelect disabled={loading} handleChange={handleUpdateTopics} />

        <Form.InputSection>
          <label htmlFor="locale">{t("Locale.Locale")}</label>
          <input
            id="locale"
            type="text"
            name="locale"
            placeholder={t("Locale.Interest")}
            disabled={loading}
            onChange={handleChange}
          ></input>
        </Form.InputSection>

        <Form.Button loading={loading} disabled={loading}>
          {t("Common.Filter")}
        </Form.Button>
      </Form>
    </Wrapper>
  );
}

export { FilterPosts };
