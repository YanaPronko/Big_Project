import { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtk";

interface GetProfileRatingArg {
  profileId: string;
  userId: string;
}

interface RateProfileArg {
  userId: string;
  profileId: string;
  rate: number;
  feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<Rating[], GetProfileRatingArg>({
      query: ({ profileId, userId }) => ({
        url: "/profile-ratings",
        params: {
          profileId,
          userId,
        },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (arg) => ({
        url: "/profile-ratings",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useProfileRate = profileRatingApi.useRateProfileMutation;
