import { queryOptions } from '@tanstack/react-query'
import { fetchPost, fetchPosts } from '../tnews'

export const postsQueryOptions = queryOptions({         // this is for ALL LIST
    queryKey: ['tnews'],
    queryFn: () => fetchPosts(),
})

export const postQueryOptions = (tNewsId: string) =>     // this is for each list of post
    queryOptions({
        queryKey: ['tnews', { tNewsId }],
        queryFn: () => fetchPost(tNewsId),
    })
