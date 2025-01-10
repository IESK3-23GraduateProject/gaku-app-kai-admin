import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/news/create")({
  component: NewsComponent,
});

function NewsComponent() {
  return (
    <div className="px-4">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight">
        お知らせ投稿
      </h1>
      <Separator className="my-4" />
    </div>
  );
}
