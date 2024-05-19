import { useListTopics } from "../../hooks/requests/graphql/queries";
import { useLocale } from "../../hooks";
import { Form } from "../shared";
import { HandleChangeTopicsParamsType, TopicsSelectParamsType } from "./types";

function TopicsSelect({
  handleChange,
  label,
  placeholder,
  disabled = false,
  required = false,
  defaultOptions = [],
  ...other
}: Readonly<TopicsSelectParamsType>) {
  const { t } = useLocale();
  const { topics, loading } = useListTopics();

  const selectLabel = label ?? t("Topic.Topics");
  const selectPlaceholder = placeholder ?? t("Topic.Select");

  function handleChangeTopics(topics: HandleChangeTopicsParamsType) {
    const formattedTopics = topics.map((topic) => topic.id);
    handleChange(formattedTopics);
  }

  return (
    <Form.InputSection {...other}>
      <Form.MultiSelect
        loading={loading}
        required={required}
        options={topics}
        disabled={disabled}
        defaultOptions={defaultOptions}
        label={selectLabel}
        placeholder={selectPlaceholder}
        handleChange={handleChangeTopics}
      />
    </Form.InputSection>
  );
}

export { TopicsSelect };
