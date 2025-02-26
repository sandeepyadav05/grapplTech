import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signupPost = createApi({
  reducerPath: "signupPost",
  baseQuery: fetchBaseQuery({
    baseUrl: "htt",
    // baseUrl: "http://192.168.28.155:8000/api/",
  }),
  tagTypes: ["Post", "Category", "Dealers","Brand", "Product"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/register/",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
} = signupPost;
