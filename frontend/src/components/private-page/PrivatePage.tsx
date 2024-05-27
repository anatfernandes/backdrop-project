/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage, useLocale, useToast } from "../../hooks";

function PrivatePage({ children }: Readonly<React.PropsWithChildren>) {
  const { localStorageData: user } = useLocalStorage();
  const { t } = useLocale();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user.token) {
      navigate("/sign-in");
      toast({ text: t("Common.NotLoggedUserError"), type: "error" });
      return;
    }

    if (!user?.topics?.length) {
      navigate("/settings/profile");
      toast({ text: t("User.FinishProfile"), type: "warning" });
    }
  }, [user.id, location.pathname]);

  return <>{children}</>;
}

export { PrivatePage };
