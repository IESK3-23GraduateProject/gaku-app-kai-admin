import * as React from "react"
import {
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Insert Data Here
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ECCコンピュータ専門学校",
      logo: GalleryVerticalEnd,
      plan: "教員用ページ",
    },
  ],
  navMain: [
    {
      title: "ホーム",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "お知らせ一覧",
          url: "oshirase",
        },
        {
          title: "教員のお知らせ",
          url: "oshirase/teacher",
        },
        {
          title: "お知らせを投稿",
          url: "oshirase/new",
        },
      ],
    },
    {
      title: "クラス",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "全体クラス",
          url: "class/",
        },
        {
          title: "担任クラス",
          url: "class/homeroom",
        },
        {
          title: "クラスおしらせ",
          url: "class/$postId",
        },
      ],
    },
  ],
  projects: [
    {
      name: "欠席・遅刻",
      url: "absence/index",
      icon: Frame,
    },
    {
      name: "公欠届",
      url: "absence",
      icon: PieChart,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
