import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news/main/")({
  component: MainIndexComponent,
});

function MainIndexComponent() {
  return <div>Select a post.</div>;
}
