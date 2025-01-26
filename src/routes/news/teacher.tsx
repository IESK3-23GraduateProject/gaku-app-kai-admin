/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { postsQueryOptions } from "../../api/queries/posts-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const Route = createFileRoute("/news/teacher")({
  component: NewsComponent,
});

// Map category to TailwindCSS background classes
const getCategoryClass = (category: string) => {
  switch (category) {
    case "学校からの連絡":
      return "bg-red-200 text-red-800";
    case "担任からの連絡":
      return "bg-blue-200 text-blue-800";
    case "キャリアセンターより":
      return "bg-green-200 text-green-800";
    case "学校行事":
      return "bg-yellow-200 text-yellow-800";
    case "図書館からの連絡":
      return "bg-purple-200 text-purple-800";
    case "事務局からの連絡":
      return "bg-orange-200 text-orange-800";
    case "クラブ・サークル":
      return "bg-pink-200 text-pink-800";
    case "その他":
      return "bg-gray-200 text-gray-800";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

function NewsComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <div className="h-fit">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={30}>
          <div className="h-full flex flex-col">
            <div className="max-h-screen flex-1 overflow-y-auto">
              {posts.map((post: any) => (
                <Link
                  key={post.student_news_id}
                  to="/news/teacher/$tNews_id"
                  params={{
                    tNews_id: post.student_news_id,
                  }}
                >
                  <div
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${!post.is_read ? "bg-yellow-50" : ""
                      }`}
                  >
                    {/* Title and "Unread" Badge */}
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-black">{post.title}</span>
                      {!post.is_read && (
                        <span className="ml-2 text-xs text-white bg-red-500 px-2 py-1 rounded">
                          Unread
                        </span>
                      )}
                    </div>

                    {/* Publish Date and Author */}
                    <div className="text-sm text-gray-500 mb-2">
                      <span>
                        <strong>Published:</strong>{" "}
                        {new Date(post.publish_at).toLocaleDateString()}
                      </span>
                      {" | "}
                      <span>
                        <strong>Author:</strong> {post.author_name || "Unknown"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded inline-block ${getCategoryClass(
                          post.news_category_name
                        )}`}
                      >
                        {post.news_category_name || "Uncategorized"}
                      </span>

                      {post.high_priority && (
                        <div className="text-xs text-white bg-red-600 px-2 py-1 rounded inline-block">
                          必須
                        </div>
                      )}
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
