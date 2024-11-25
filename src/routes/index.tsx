import { createFileRoute } from "@tanstack/react-router";
import Calendar from "@/components/home/calendar";
import Accord from "@/components/home/accord";
import { Separator } from "@/components/ui/separator";
import Mail from "@/components/mailList";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Calendar events={[]} />
      <Separator />

      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="aspect-video rounded-xl bg-muted/50 md:col-span-1">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>ECCコンピュータ専門学校（教員アプリ）</AlertTitle>
            <AlertDescription>
              最新版のニュース
            </AlertDescription>
          </Alert>
          <Separator />
          <Mail />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <Accord />
        </div>
      </div>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <Separator />
      </div>
    </div>
  );
}
