import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"

export const Route = createFileRoute("/news/create")({
  component: NewsComponent,
});

function NewsComponent() {
  return (
    <div>
      <h1 className="mt-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        お知らせ投稿・変更
      </h1>
      <Separator className="my-4"/>
      <div className="DataInput">
        <Input type="title" placeholder="タイトル" />
        
      </div>
    </div>
  );
}
