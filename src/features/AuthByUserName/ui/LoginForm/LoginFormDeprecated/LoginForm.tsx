import { memo, useCallback, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";
import { BtnSize, Button } from "@/shared/ui/deprecated/Button";
import { Input } from "@/shared/ui/deprecated/Input";
import { Text } from "@/shared/ui/deprecated/Text";

import { getLoginError } from "../../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { loginByUsername } from "../../../model/services/loginByUsername";
import { LoginFormProps } from "../../../model/types/loginSchema";

import cls from "./LoginForm.module.scss";


const LoginFormDeprecated = memo(
  ({ className, ...otherProps }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const forceUpdate = useForceUpdate();

    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback(
      (value: string) => {
        setUsername(value);
      },
      [setUsername],
    );

    const onChangePassword = useCallback(
      (value: string) => {
        setPassword(value);
      },
      [setPassword],
    );

    const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === "fulfilled") {
        forceUpdate();
      }
    }, [dispatch, username, password, forceUpdate]);

    return (
      <form
        className={classNames(cls.loginForm, {}, [className])}
        {...otherProps}
      >
        <Text title={t("registration-form")} />
        {error && (
          <Text text={t("you-enter-invalid-login-or-password")} theme="error" />
        )}
        <Input
          type="text"
          name="login"
          label={t("vvedite-vashe-imya")}
          autofocus
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          type="text"
          name="password"
          label={t("vvedite-parol")}
          value={password}
          onChange={onChangePassword}
        />
        <Button
          className={cls.loginBtn}
          type="submit"
          theme="clear"
          size={BtnSize.L}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("voiti")}
        </Button>
      </form>
    );
  },
);

export default LoginFormDeprecated;
