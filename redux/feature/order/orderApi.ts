import apiSlice from "../api/apiSlice";

interface CreateOrderRequest {
  ebookIds: string[];
  creditsToUse: number;
}

interface CreateOrderResponse {
  message: string;
  order: { id: string };
}

export interface Ebook {
  id: string;
  title: string;
  description: string;
  author: string;
  price: number;
  coverImage: string;
  fileUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  ebookId: string;
  priceAtPurchase: number;
  createdAt: string;
  ebook: Ebook;
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  creditsUsed: number;
  amountPaid: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
}

export interface GetOrdersResponse {
  items: Order[];
  total: number;
}

export interface Genre {
  id: string;
  name: string;
}

export interface PurchasedBook {
  id: string;
  title: string;
  description: string;
  author: string;
  price: number;
  coverImage: string;
  fileUrl: string;
  purchasedAt: string;
  genres: Genre[];
}

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<CreateOrderResponse, CreateOrderRequest>({
      query: (data) => ({
        url: "/api/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getOrders: builder.query<
      GetOrdersResponse,
      { page: number; count: number }
    >({
      query: ({ page, count }) => ({
        url: `/api/orders?page=${page}&count=${count}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getPurchasedBooks: builder.query<PurchasedBook[], void>({
      query: () => ({
        url: "/api/user/my-books",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useGetPurchasedBooksQuery,
} = orderApi;
export default orderApi;
