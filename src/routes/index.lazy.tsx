import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/app/dashboard/page";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <h1>TEST</h1>
  );
}
