import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div className="flex items-center justify-center h-screen">
        <Button variant="link">Click me</Button>
      </div>
    </div>
  );
}
