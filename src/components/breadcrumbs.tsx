import { data } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "@tanstack/react-router";

export default function Breadcrumbs() {
  const location = useLocation();

  // Helper function to find the breadcrumb title
  const getBreadcrumbTitle = (pathname: string) => {
    const normalizedPath = pathname.startsWith("/")
      ? pathname.slice(1)
      : pathname; // Remove leading slash

    // If the pathname is empty, return null for current page title
    if (normalizedPath === "") return null;

    for (const item of [...data.navMain, ...data.projects]) {
      if (item.url === normalizedPath) return item.title || item.name;
      if (item.items) {
        const subItem = item.items.find(
          (sub: { url: string }) => sub.url === normalizedPath
        );
        if (subItem) return subItem.title;
      }
    }

    return null; // Return null if no matching title is found
  };

  const currentPageTitle = getBreadcrumbTitle(location.pathname);
  // for debugging
  //console.log("current pathname :", currentPageTitle)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
