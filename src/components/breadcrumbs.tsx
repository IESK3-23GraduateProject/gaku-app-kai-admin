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

  // Helper function to find the main section and subpage titles
  const getBreadcrumbTitles = (pathname) => {
    const normalizedPath = pathname.startsWith("/")
      ? pathname.slice(1)
      : pathname; // Remove leading slash

    let mainTitle = null;
    let subTitle = null;

    // Special case for the root route "/"
    if (normalizedPath === "") {
      mainTitle = "ホーム";
      return { mainTitle, subTitle };
    }

    // Search in navMain sections
    for (const mainItem of data.navMain) {
      if (mainItem.url === normalizedPath) {
        mainTitle = mainItem.title;
        break;
      }
      if (mainItem.items) {
        const subItem = mainItem.items.find(
          (sub) => sub.url === normalizedPath
        );
        if (subItem) {
          mainTitle = mainItem.title;
          subTitle = subItem.title;
          break;
        }
      }
    }

    // Search in admin sections if not found in navMain
    if (!mainTitle) {
      for (const adminItem of data.admin) {
        if (adminItem.url === normalizedPath) {
          mainTitle = adminItem.name;
          break;
        }
      }
    }

    return { mainTitle, subTitle };
  };

  const { mainTitle, subTitle } = getBreadcrumbTitles(location.pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {mainTitle && (
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={`/${mainTitle === "ホーム" ? "" : mainTitle}`}>
              {mainTitle}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {subTitle && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{subTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
