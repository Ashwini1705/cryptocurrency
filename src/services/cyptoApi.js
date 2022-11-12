import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cyptoApiHeaders = {
    'X-RapidAPI-Key': '731cedb201mshd13f9f79fe3ad8cp1c3179jsn938d97b7bc2c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cyptoApiHeaders }); 

export const cryptoApi = createApi({
    
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl: baseUrl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query: ({count}) => createRequest(`/coins?limit=${count}`)
        }), 
        getCryptoDetails : builder.query({
            query: (({coinId}) => createRequest(`/coin/${coinId}`))
        }),
        getCryptoHistory : builder.query({
            query: (({coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`))
        }),
    }) 
});

export const {useGetCryptosQuery, 
    useGetCryptoDetailsQuery, 
    useGetCryptoHistoryQuery
} = cryptoApi;