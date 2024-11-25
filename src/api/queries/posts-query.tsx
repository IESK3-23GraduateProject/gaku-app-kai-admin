import { queryOptions } from '@tanstack/react-query'
import { fetchPost, fetchPosts } from '../posts'

export const postsQueryOptions = queryOptions({         // this is for ALL LIST
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
})

export const postQueryOptions = (postId: string) =>     // this is for each list of post
    queryOptions({
        queryKey: ['posts', { postId }],
        queryFn: () => fetchPost(postId),
    })
