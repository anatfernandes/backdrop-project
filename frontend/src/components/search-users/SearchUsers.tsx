import { useState } from "react";
import { debounce } from "lodash";
import { useListUsersByName } from "../../hooks/requests/graphql/queries";
import { useLocale } from "../../hooks";
import { Icon } from "../shared";
import { Users } from "./search-users-components";
import { Wrapper } from "./styles";
import { SearchUsersParamsType } from "./types";

function SearchUsers({ handleSetSearchUsers }: Readonly<SearchUsersParamsType>) {
  const { t } = useLocale();
  const [search, setSearch] = useState("");
  const { users, loading, handleRefetchUsers } = useListUsersByName("");

  function handleSearchUsers(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    
    setSearch(name);

    const debouncedSearch = debounce(() => handleRefetchUsers(name), 1000);
    debouncedSearch();
  }

  return (
    <Wrapper>
      <div id="background" onClick={() => handleSetSearchUsers(false)}></div>

      <section id="search-section">
        <article id="search-input">
          <input
            id="search"
            type="text"
            autoComplete="off"
            placeholder={`${t("Search.Placeholder")}...`}
            value={search}
            onChange={handleSearchUsers}
            autoFocus
            required
          />

          <Icon
            id="search-icon"
            type="search"
            title={t("Search.Placeholder")}
            color="var(--dark-gray)"
            aria-hidden
          />

          <article id="search-users">
            <Users
              users={users}
              loading={loading}
              handleSetSearchUsers={handleSetSearchUsers}
            />
          </article>
        </article>
      </section>
    </Wrapper>
  );
}

export { SearchUsers };
