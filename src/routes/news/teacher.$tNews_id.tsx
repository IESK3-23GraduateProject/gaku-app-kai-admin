import * as React from "react";
import { postQueryOptions } from "../../api/queries/tNews-query";
import {
  ErrorComponent,
  createFileRoute,
  useRouter,
} from "@tanstack/react-router";
import {
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { PostNotFoundError } from "../../api/tnews";
import type { ErrorComponentProps } from "@tanstack/react-router";

export const Route = createFileRoute("/news/teacher/$tNews_id")({
  loader: ({ context: { queryClient }, params: { tNews_id } }) => {
    return queryClient.ensureQueryData(postQueryOptions(tNews_id));
  },
  errorComponent: tNewsErrorComponent,
  component: tNewsComponent,
});

export function tNewsErrorComponent({ error }: ErrorComponentProps) {
  const router = useRouter();
  if (error instanceof PostNotFoundError) {
    return <div>{error.message}</div>;
  }
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  React.useEffect(() => {
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <div>
      <button
        onClick={() => {
          router.invalidate();
        }}
      >
        retry
      </button>
      <ErrorComponent error={error} />
    </div>
  );
}

function tNewsComponent() {
  const tNewsId = Route.useParams().tNews_id;
  const { data: post } = useSuspenseQuery(postQueryOptions(tNewsId));

  if (!post) return <div>Loading...</div>;

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.name}</h4>
      <div className="text-sm">Form Name: {post.form_name}</div>
      <div className="text-sm">ID: {post.id}</div>
    </div>
  );
}
