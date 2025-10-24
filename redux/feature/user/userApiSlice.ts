import apiSlice from "../api/apiSlice";

interface DashboardData {
  totalReferredUsers: number;
  convertedUsers: number;
  conversionRate: number;
  credits: number;
  referralLink: string;
}

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<DashboardData, void>({
      query: () => ({
        url: "/api/user/dashboard",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetDashboardQuery } = userApiSlice;
export default userApiSlice;
