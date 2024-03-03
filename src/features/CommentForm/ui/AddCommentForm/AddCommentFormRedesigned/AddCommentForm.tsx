import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { InputRedesigned } from "@/shared/ui/redesigned/Input";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

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

const AddCommentFormRedesigned = memo((props: addCommentFormProps) => {
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
      <TextRedesigned
        variant="error"
        title={t("something-goes-wrong")}
        align="center"
      />
    );
  }

  return (
    <CardRedesigned padding="24" max>
      <HStack
        data-testid="AddCommentForm"
        role="form"
        gap="8"
        className={classNames('', {}, [className])}
      >
        <InputRedesigned
          data-testid="AddCommentForm.Input"
          placeholder={t("enter-your-comment")}
          value={text}
          onChange={onCommentTextChange}
        />
        <ButtonRedesigned
          data-testid="AddCommentForm.SendBtn"
          onClick={onSendCommentHandler}
          className={cls.sendBtn}
        >
          {t("send-comment")}
        </ButtonRedesigned>
      </HStack>
    </CardRedesigned>
  );
});

export default AddCommentFormRedesigned;
