import { useState } from "react";
import { useLocale, useUser } from "../../../../hooks";
import { Posts } from "../posts";
import { Follow } from "../follow";
import { Wrapper } from "./styles";
import { EventParamsType, EventType, TimelineParamsType } from "./types";

function Timeline({ user, ...other }: Readonly<TimelineParamsType>) {
  const { t } = useLocale();
  const { user: currentUser } = useUser();
  const [currentTab, setCurrentTab] = useState("posts");
  const tabs = [
    {
      label: t("Profile.Timeline.Posts"),
      tab: "posts",
      show: true,
    },
    {
      label: t("Profile.Timeline.Liked"),
      tab: "liked",
      show: true,
    },
    {
      label: t("Profile.Timeline.Saved"),
      tab: "saved",
      show: currentUser.id === user.id,
    },
    {
      label: t("Profile.Timeline.Following"),
      tab: "following",
      show: true,
    },
    {
      label: t("Profile.Timeline.Followers"),
      tab: "followers",
      show: true,
    },
  ];

  function listPosts() {
    return ["posts", "saved", "liked"].includes(currentTab);
  }

  function getClassName(tab: string) {
    return tab === currentTab ? "active-tab" : "";
  }

  function handleChangeTab(e: EventParamsType) {
    const event = e as EventType;
    if (event.type !== "click" && event.key !== "Enter") return;
    setCurrentTab(event.currentTarget.id);
  }

  return (
    <Wrapper {...other}>
      <menu>
        {tabs.map(
          (tab, index) =>
            tab.show && (
              <li
                key={`${tab.tab}-${index}`}
                id={tab.tab}
                tabIndex={0}
                value={tab.tab}
                className={getClassName(tab.tab)}
                onClick={handleChangeTab}
                onKeyUp={handleChangeTab}
              >
                {tab.label}
              </li>
            ),
        )}
      </menu>

      {listPosts() && <Posts tab={currentTab} user={user} />}

      {!listPosts() && <Follow tab={currentTab} user={user} />}
    </Wrapper>
  );
}

export { Timeline };
