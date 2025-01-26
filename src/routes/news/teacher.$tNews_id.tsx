import { postQueryOptions } from '../../api/queries/tNews-query'
import {
  ErrorComponent,
  createFileRoute,
  useRouter,
} from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { PostNotFoundError } from '../../api/posts'
import type { ErrorComponentProps } from '@tanstack/react-router'

export const Route = createFileRoute('/news/teacher/$tNews_id')({
  // @ts-expect-error queryClient
  loader: ({ context: { queryClient }, params: { tNews_id } }) => {
    return queryClient.ensureQueryData(postQueryOptions(tNews_id))
  },
  errorComponent: MainErrorComponent,
  component: MainComponent,
})

export function MainErrorComponent({ error }: ErrorComponentProps) {
  const router = useRouter()

  if (error instanceof PostNotFoundError) {
    return <div className="text-red-500">{error.message}</div>
  }

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          router.invalidate()
        }}
      >
        Retry
      </button>
      <ErrorComponent error={error} />
    </div>
  )
}

function MainComponent() {
  const postId = Route.useParams().tNews_id
  const { data: post } = useSuspenseQuery(postQueryOptions(postId))

  if (!post) return <div>Loading...</div>

  return (
    <div className="space-y-2 pb-10">
      <h4 className="text-xl font-bold underline">{post[0].title}</h4>
      <p className="text-sm text-gray-500">
        Published on: {new Date(post[0].publish_at).toLocaleDateString()}
      </p>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post[0].news_contents }}
      ></article>
    </div>
  )
}
