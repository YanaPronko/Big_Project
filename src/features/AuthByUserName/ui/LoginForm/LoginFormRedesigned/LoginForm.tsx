import { memo, useCallback, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { InputRedesigned } from "@/shared/ui/redesigned/Input";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { getLoginError } from "../../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { loginByUsername } from "../../../model/services/loginByUsername";

import { LoginFormProps } from "../../../model/types/loginSchema";

import cls from "./LoginForm.module.scss";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";

const LoginFormRedesigned = memo(
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
        <TextRedesigned title={t("registration-form")} />
        {error && (
          <TextRedesigned
            text={t("you-enter-invalid-login-or-password")}
            variant="error"
          />
        )}
        <InputRedesigned
          type="text"
          name="login"
          label={t("vvedite-vashe-imya")}
          autofocus
          value={username}
          onChange={onChangeUsername}
        />
        <InputRedesigned
          type="text"
          name="password"
          label={t("vvedite-parol")}
          value={password}
          onChange={onChangePassword}
        />
        <ButtonRedesigned
          className={cls.loginBtn}
          type="submit"
          variant="clear"
          size="l"
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("voiti")}
        </ButtonRedesigned>
      </form>
    );
  },
);

export default LoginFormRedesigned;
