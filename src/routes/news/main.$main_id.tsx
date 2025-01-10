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
  const content = `
<h2>Welcome!</h2>
<p>Edit this content using the editor. It supports <strong>bold</strong>, <em>italic</em>, <u>underline</u>, and more!</p>
<ul>
  <li>Bullet lists</li>
  <li>Are supported too</li>
</ul>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam aspernatur, soluta hic aliquam sapiente sit consectetur quod ipsum, odio tempore doloribus tenetur quibusdam voluptatum dicta voluptate, optio minima. Nihil, minima.</p>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<pre><code>code block</code></pre>
<p><code>code</code> </p>
<p>ひらかな</p>
<p>カタカナ</p>
<p>漢字</p>
`;


  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>

      <article className='prose dark:prose-invert'
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </article>

    </div>
  )
}
