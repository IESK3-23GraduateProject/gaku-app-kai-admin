import { useSuspenseQuery } from '@tanstack/react-query'
import { postQueryOptions } from '../../api/queries/tNews-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/teacher/$tNews_id')({
  // @ts-expect-error queryClient
  loader: ({ context: { queryClient }, params: { tNews_id } }) => {
    return queryClient.ensureQueryData(postQueryOptions(tNews_id))
  },
  component: MainComponent,
})

function MainComponent() {
  const postId = Route.useParams().tNews_id
  const { data: post } = useSuspenseQuery(postQueryOptions(postId))

  if (!post) return <div>Loading...</div>

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  )
}
