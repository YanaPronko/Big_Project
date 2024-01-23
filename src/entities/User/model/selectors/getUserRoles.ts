import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;
export const getIsAdmin = createSelector(getUserRoles, (roles) =>
  roles?.includes("ADMIN"),
);
export const getIsManager = createSelector(getUserRoles, (roles) =>
  roles?.includes("MANAGER"),
);
