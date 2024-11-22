import { queryOptions } from '@tanstack/react-query'
import { fetchPost, fetchPosts } from '../post'

export const postsQueryOptions = queryOptions({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
})

export const postQueryOptions = (postId: string) =>
    queryOptions({
        queryKey: ['posts', { postId }],
        queryFn: () => fetchPost(postId),
    })
