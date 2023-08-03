import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
    'X-RapidAPI-Key': 'ADD UR OWN KEY',
    'X-RapidAPI-Host': 'ADD UR OWN KEY'

}

const baseUrl = 'https://crypto-news16.p.rapidapi.com';

const createRequest = (url)=>({url , headers :cryptoNewsHeader });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptoNews: builder.query({
            query:(count)=>createRequest(`/news/top/${count}`),
            // createRequest('/news/top/5'),
        })

    })
})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;
