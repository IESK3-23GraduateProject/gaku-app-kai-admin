import { postQueryOptions } from '../../api/queries/posts-query'
import {
  ErrorComponent,
  createFileRoute,
  useRouter,
} from '@tanstack/react-router'
import {
  useSuspenseQuery,
} from '@tanstack/react-query'
import { PostNotFoundError } from '../../api/posts'
import type { ErrorComponentProps } from '@tanstack/react-router'


export const Route = createFileRoute('/news/main/$main_id')({
  // @ts-expect-error queryClient
  loader: ({ context: { queryClient }, params: { main_id } }) => {
    return queryClient.ensureQueryData(postQueryOptions(main_id))
  },
  errorComponent: MainErrorComponent,
  component: MainComponent,
})

export function MainErrorComponent({ error }: ErrorComponentProps) {
  const router = useRouter()
  if (error instanceof PostNotFoundError) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <button
        onClick={() => {
          router.invalidate()
        }}
      >
        retry
      </button>
      <ErrorComponent error={error} />
    </div>
  )
}

function MainComponent() {
  const postId = Route.useParams().main_id
  const { data: post } = useSuspenseQuery(postQueryOptions(postId))

  if (!post) return <div>Loading...</div>

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  )
}
