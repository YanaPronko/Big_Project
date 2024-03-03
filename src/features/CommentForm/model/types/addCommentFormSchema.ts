export interface AddCommentFormSchema {
  text?: string;
  error?: string;
}

export interface addCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}
