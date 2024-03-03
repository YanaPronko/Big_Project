import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";
import {
  ReducersList,
  useDynamicLoad,
} from "@/shared/lib/hooks/useDynamicLoad/useDynamicLoad";

import LoginFormDeprecated from "./LoginFormDeprecated/LoginForm";
import LoginFormRedesigned from "./LoginFormRedesigned/LoginForm";
import { loginReducer } from "../../model/slice/loginSlice";
import { LoginFormProps } from "../../model/types/loginSchema";

const initialAsyncReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  useDynamicLoad(initialAsyncReducers, true);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<LoginFormRedesigned {...props} />}
      off={<LoginFormDeprecated {...props} />}
    />
  );
});

export default LoginForm;
