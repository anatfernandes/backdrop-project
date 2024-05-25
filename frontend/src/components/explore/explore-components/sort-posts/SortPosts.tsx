import { useRef, useState } from "react";
import { useLocale } from "../../../../hooks";
import { Icon, Popover } from "../../../shared";
import { Wrapper } from "./styles";
import {
  EventParamsType,
  EventType,
  SortPostsParamsType,
  SortOptionsType,
} from "./types";

function SortPosts({ handleChangeSortPosts, ...other }: Readonly<SortPostsParamsType>) {
  const { t } = useLocale();
  const { current: options } = useRef<SortOptionsType>([
    {
      label: t("Explore.Sort.By.Date"),
      value: { by: "date", direction: "desc" },
      icon: "down-arrow",
    },
    {
      label: t("Explore.Sort.By.Date"),
      value: { by: "date", direction: "asc" },
      icon: "up-arrow",
    },
    {
      label: t("Explore.Sort.By.Like"),
      value: { by: "like", direction: "desc" },
      icon: "down-arrow",
    },
    {
      label: t("Explore.Sort.By.Like"),
      value: { by: "like", direction: "asc" },
      icon: "up-arrow",
    },
  ]);
  const [currentSort, setCurrentSort] = useState(options[0]);

  function handleSort(e: EventParamsType) {
    const event = e as EventType;

    if (event.type !== "click" && event.key !== "Enter") return;

    const sort = options[e.currentTarget.value];

    handleChangeSortPosts(sort?.value);
    setCurrentSort(sort);
  }

  return (
    <Wrapper {...other}>
      <hr />

      <Popover>
        <button>
          <span>
            {t("Explore.Sort.SortBy")} <b>{currentSort.label}</b>
          </span>
          <Icon type={currentSort.icon} size="0.7rem" color="var(--dark-gray)" />
        </button>

        <ul className="popover__content">
          {options.map((option, index) => (
            <li
              key={`${option.label}-${index}`}
              value={index}
              tabIndex={0}
              onClick={handleSort}
              onKeyUp={handleSort}
            >
              {option.label}
              <Icon type={option.icon} size="0.7rem" color="var(--dark-gray)" />
            </li>
          ))}
        </ul>
      </Popover>
    </Wrapper>
  );
}

export { SortPosts };
