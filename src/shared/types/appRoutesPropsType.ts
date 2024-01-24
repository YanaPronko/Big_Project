import { RouteProps } from "react-router-dom";

// eslint-disable-next-line path-checker-pryweb/layers-import
import { UserRole } from "@/entities/User";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
