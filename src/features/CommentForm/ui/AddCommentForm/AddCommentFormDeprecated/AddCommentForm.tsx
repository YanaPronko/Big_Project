import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "@/shared/ui/deprecated/Button";
import { Input } from "@/shared/ui/deprecated/Input";
import { Text } from "@/shared/ui/deprecated/Text";
import { HStack } from "@/shared/ui/redesigned/Stack";

import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../../model/selectors/addCommentForm";
import {
  addCommentFormActions,
  // addCommentFormReducer,
} from "../../../model/slice/addCommentFormSlice";
import { addCommentFormProps } from "../../../model/types/addCommentFormSchema";

import cls from "./AddCommentForm.module.scss";

// const reducers: ReducersList = {
//   addCommentForm: addCommentFormReducer,
// };

const AddCommentFormDeprecated = memo((props: addCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();

  // useDynamicLoad(reducers, true);

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendCommentHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onSendComment, onCommentTextChange, text]);

  if (error) {
    return (
      <Text theme="error" title={t("something-goes-wrong")} align="center" />
    );
  }

  return (
    <HStack
      data-testid="AddCommentForm"
      role="form"
      justify="between"
      gap="4"
      className={classNames(cls.addCommentForm, {}, [className])}
    >
      <Input
        data-testid="AddCommentForm.Input"
        className={cls.input}
        placeholder={t("enter-your-comment")}
        value={text}
        onChange={onCommentTextChange}
      />
      <Button
        data-testid="AddCommentForm.SendBtn"
        theme="outline"
        onClick={onSendCommentHandler}
      >
        {t("send-comment")}
      </Button>
    </HStack>
  );
});

export default AddCommentFormDeprecated;
