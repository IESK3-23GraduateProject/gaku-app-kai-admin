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
import { useQueryClient } from "@tanstack/react-query";
import { postQueryOptions } from "@/api/queries/posts-query";
import { tNewspostQueryOptions } from "@/api/queries/tNews-query";

interface BreadcrumbInfo {
  title: string;
  url: string;
  parent?: {
    title: string;
    url: string;
  };
  dynamic?: {
    title: string;
    url: string;
  };
}

export default function Breadcrumbs() {
  const location = useLocation();
  const queryClient = useQueryClient();

  const findBreadcrumbInfo = (pathname: string): BreadcrumbInfo | null => {
    const normalizedPath = pathname.replace(/^\/+|\/+$/g, "");
    const pathParts = normalizedPath.split("/");

    if (!normalizedPath) {
      return {
        title: "ホーム",
        url: "/",
      };
    }

    // Search in navMain sections
    for (const mainItem of data.navMain) {
      if (mainItem.items) {
        const subItem = mainItem.items.find(
          (sub) => {
            const subPathParts = sub.url.split("/");
            return pathParts.slice(0, subPathParts.length).join("/") === sub.url;
          }
        );

        if (subItem) {
          const result: BreadcrumbInfo = {
            title: subItem.title,
            url: `/${subItem.url}`,
            parent: {
              title: mainItem.title,
              url: `/${mainItem.url}`,
            }
          };

          // If there's an ID, get the title from the appropriate query cache
          if (pathParts.length > subItem.url.split("/").length) {
            const id = pathParts[pathParts.length - 1];

            let queryData;
            if (location.pathname.includes("/news/main/")) {
              // Student news
              queryData = queryClient.getQueryData(
                postQueryOptions(id).queryKey
              );
            } else if (location.pathname.includes("/news/teacher/")) {
              // Teacher news
              queryData = queryClient.getQueryData(
                tNewspostQueryOptions(id).queryKey
              );
            }

            if (queryData && Array.isArray(queryData) && queryData[0]?.title) {
              result.dynamic = {
                title: queryData[0].title,
                url: `/${normalizedPath}`
              };
            }
          }

          return result;
        }
      }

      if (mainItem.url === pathParts[0]) {
        return {
          title: mainItem.title,
          url: `/${mainItem.url}`,
        };
      }
    }

    // Search in admin sections
    for (const adminItem of data.admin) {
      const adminPathParts = adminItem.url.split("/");
      if (pathParts.slice(0, adminPathParts.length).join("/") === adminItem.url) {
        return {
          title: adminItem.name,
          url: `/${adminItem.url}`,
          parent: {
            title: "管理",
            url: "/admin",
          }
        };
      }
    }

    return null;
  };

  const breadcrumbInfo = findBreadcrumbInfo(location.pathname);

  if (!breadcrumbInfo) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbInfo.parent && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={breadcrumbInfo.parent.url}>
                {breadcrumbInfo.parent.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {breadcrumbInfo.url !== "/" && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumbInfo.url}>
                {breadcrumbInfo.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {breadcrumbInfo.dynamic && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbInfo.dynamic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
