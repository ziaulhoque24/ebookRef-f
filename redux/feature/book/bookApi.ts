import { BooksApiResponse } from "@/types/book";
import apiSlice from "../api/apiSlice";

interface GetBooksParams {
  page?: number;
  count?: number;
}

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BooksApiResponse, GetBooksParams>({
      query: (params) => ({
        url: `/api/books`,
        method: "GET",
        params: params,
      }),
      providesTags: ["Books"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          return newItems;
        }
        return {
          items: [...currentCache.items, ...newItems.items],
          total: newItems.total,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetBooksQuery, useLazyGetBooksQuery } = bookApi;
