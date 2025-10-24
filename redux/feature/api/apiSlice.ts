import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Session } from "next-auth";
import { getSession } from "next-auth/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: async (headers) => {
    const session: Session | null = await getSession();

    if (session?.accessToken) {
      headers.set("authorization", `Bearer ${session.accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  return result;
};

const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Books"],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export default apiSlice;
