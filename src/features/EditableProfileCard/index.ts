export type {
  Profile,
  ProfileSchema,
} from './model/types/profile';

export {
  profileSlice,
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
