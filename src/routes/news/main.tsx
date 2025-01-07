import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { postsQueryOptions } from "../../api/queries/posts-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const Route = createFileRoute("/news/main")({
  // @ts-expect-error queryClient
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(postsQueryOptions);
  },
  component: NewsComponent,
});

function NewsComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel>
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              {[
                ...posts,
                { id: "i-do-not-exist", title: "Non-existent Post", sender: "Unknown", date: "N/A", preview: "This post does not exist." },
              ].map((post) => (
                <Link
                  key={post.id}
                  to="/news/main/$main_id"
                  params={{
                    main_id: post.id,
                  }}>
                  <div
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-black">
                        {post.title}
                      </span>
                      <span className="text-sm text-gray-500">{post.date || "Unknown Date"}</span>
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {post.date || "No preview available."}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="px-4">
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
