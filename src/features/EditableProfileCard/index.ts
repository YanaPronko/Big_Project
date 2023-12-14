export type {
  Profile,
  ProfileSchema,
} from './model/types/profile';

export {
  profileSlice,
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
