import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Terminal } from "lucide-react";
import { postsQueryOptions } from "../../api/queries/posts-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/news/main")({
  component: NewsComponent,
});

function NewsComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <div className="p-2">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div>
            <Alert className="m-5 p-5">
              <Terminal className="h-4 w-4" />
              <AlertTitle>注意</AlertTitle>
              <AlertDescription>大事なお知らせがありました</AlertDescription>
            </Alert>
            <div id="sort">
              <ToggleGroup type="single">
                <ToggleGroupItem value="a">学生全員</ToggleGroupItem>
                <ToggleGroupItem value="b">IT学生</ToggleGroupItem>
                <ToggleGroupItem value="c">ゲーム学生</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <ScrollArea className="h-[700px] rounded-md border p-3 m-5">
              <ol>
                {posts?.map((post) => (
                  <div key={post.id}>
                    <Link
                      to="/posts/$postId"
                      params={{
                        postId: post.id,
                      }}
                      className="block py-1 text-blue-600 hover:opacity-75"
                      activeProps={{ className: "font-bold underline" }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>
                            <p>{post.title}</p>
                          </CardTitle>
                          <CardDescription>Description</CardDescription>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter>
                          <p>Footer</p>
                        </CardFooter>
                      </Card>
                    </Link>
                  </div>
                ))}
              </ol>
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="h-full m-5">
            <Separator className="my-4" />
            <Button>
              <Link to="../create">新しいお知らせを投稿</Link>
            </Button>
            <div>
              <Outlet />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
