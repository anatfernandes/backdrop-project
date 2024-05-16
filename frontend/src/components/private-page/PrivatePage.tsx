/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocale, useToast, useUser } from "../../hooks";

function PrivatePage({ children }: Readonly<React.PropsWithChildren>) {
  const { user } = useUser();
  const { t } = useLocale();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token) {
      navigate("/sign-in");
      toast({ text: t("Common.NotLoggedUserError"), type: "error" });
    }
  }, [user]);

  return <>{children}</>;
}

export { PrivatePage };
