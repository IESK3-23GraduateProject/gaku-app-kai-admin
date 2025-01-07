import { createFileRoute } from "@tanstack/react-router";
import Calendar from "@/components/home/calendar";
import { Separator } from "@/components/ui/separator";


export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Calendar events={[]} />
      <Separator />
    </div>
  );
}
