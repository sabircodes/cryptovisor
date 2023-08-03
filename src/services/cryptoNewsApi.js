import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
    'X-RapidAPI-Key': '1a10740a7cmsh54cf1712f724a5ap16b316jsn2ac9bb179635',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'

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