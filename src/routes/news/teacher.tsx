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
import { postsQueryOptions } from "../../api/queries/tNews-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/news/teacher")({
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
            <ScrollArea className="h-[700px]">
              <ol>
                {[
                  ...posts,
                  { id: "i-do-not-exist", name: "Non-existent Post" },
                ].map((post) => {
                  return (
                    <li key={post.id} className="whitespace-nowrap">
                      <Link
                        to="/news/teacher/$tNews_id"
                        params={{
                          tNews_id: post.id.toString(),
                        }}
                        className="block py-1 text-blue-600 hover:opacity-75"
                        activeProps={{ className: "font-bold underline" }}
                      >
                        <div>
                          <Card>
                            <CardHeader>
                              <CardTitle>
                                <p>{post.name}</p>
                              </CardTitle>
                              <CardDescription>{post.form_name}</CardDescription>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter>
                              <p>Footer</p>
                            </CardFooter>
                          </Card>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="h-full m-5">
            <Separator className="my-4" />
            <Button>
              <Link to="/news/create">新しいお知らせを投稿</Link>
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
