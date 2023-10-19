export type UserRole = 'ADMIN' | 'MANAGER' | 'USER'

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: User | undefined;
  _inited: boolean;
}
