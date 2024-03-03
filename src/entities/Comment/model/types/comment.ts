import { User } from "@/entities/User";

export interface Comment {
  id: string;
  user: User;
  text: string;
  articleId: string;
}

export interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}
