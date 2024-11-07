import { Separator } from "@/components/ui/separator";
import Breadcrumbs from "@/components/breadcrumbs";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SideLayout() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>
    </header>
  );
}