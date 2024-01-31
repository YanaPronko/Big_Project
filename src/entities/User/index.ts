export type { User, UserSchema, UserRole } from "./model/types/user";
export type { JsonSettings } from "./model/types/jsonSettings";
export { userReducer, userActions } from "./model/slice/userSlice";
export { getUserAuthData } from "./model/selectors/getUserAuthData";
export { getUserInited } from "./model/selectors/getUserInited/getUserInited";
export { useJsonSettings } from "./model/selectors/getJsonSettings";
export {
  getUserRoles,
  getIsAdmin,
  getIsManager,
} from "./model/selectors/getUserRoles";

export { saveJsonSettings } from "./model/services/saveJsonSettings";
export { initUserAuthData } from "./model/services/initAuthData";
