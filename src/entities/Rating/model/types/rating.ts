export interface Rating {
  rate: number;
  feedback?: string;
}

export interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  rate?: number;
  onCancel?: (starNumber: number) => void;
  onAccept?: (starNumber: number, feedback?: string) => void;
}