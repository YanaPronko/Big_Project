import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";
import {
  ReducersList,
  useDynamicLoad,
} from "@/shared/lib/hooks/useDynamicLoad/useDynamicLoad";

import AddCommentFormDeprecated from "./AddCommentFormDeprecated/AddCommentForm";
import AddCommentFormRedesigned from "./AddCommentFormRedesigned/AddCommentForm";
import { addCommentFormReducer } from "../../model/slice/addCommentFormSlice";
import { addCommentFormProps } from "../../model/types/addCommentFormSchema";

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: addCommentFormProps) => {
  useDynamicLoad(reducers, true);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<AddCommentFormRedesigned {...props} />}
      off={<AddCommentFormDeprecated {...props} />}
    />
  );
});

export default AddCommentForm;
