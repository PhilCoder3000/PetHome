import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube.googleapis.com/youtube/v3',
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: ({ token }) => ({
        url: `/search?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
    }),
  }),
});

export const { useGetPokemonByNameQuery } = youtubeApi
