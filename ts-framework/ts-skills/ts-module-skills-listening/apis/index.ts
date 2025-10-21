import { baseApi, deleteBaseApi, getBaseApi, postBaseApi } from "fe-base/apis";

export const topicApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTopics: builder.query({
            query: (params) => ({
                url: '/admin/catalog/topics',
                method: 'GET',
                params
            }),
        }),
    }),
});

export const { useGetTopicsQuery } = topicApis;

