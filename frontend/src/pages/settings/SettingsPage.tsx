import { Outlet } from "react-router-dom";
import { Menu } from "../../components/menu";
import { Wrapper } from "./styles";

function SettingsPage() {
  return (
    <Wrapper>
      <Menu />

      <Outlet />
    </Wrapper>
  );
}

export { SettingsPage };
