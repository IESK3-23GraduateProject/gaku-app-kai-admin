import * as React from "react"
import {
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavAdmin } from "@/components/nav-admin"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// eslint-disable-next-line react-refresh/only-export-components
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ECCコンピュータ",
      logo: GalleryVerticalEnd,
      plan: "教員アプリ",
    },
  ],
  navMain: [
    {
      title: "メイン",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "ホーム",
          url: "/",
        },
        {
          title: "お知らせ一覧",
          url: "news/main",
        },
        {
          title: "教員のお知らせ",
          url: "news/teacher",
        },
        {
          title: "お知らせを投稿",
          url: "news/create",
        },
      ],
    },
    {
      title: "出欠",
      url: "absences",
      icon: Settings2,
      items: [
        {
          title: "公欠",
          url: "absences/authorized_absence",
        },
        {
          title: "遅刻",
          url: "absences/late_absence",
        },
      ],
    },
    {
      title: "担任クラス",
      url: "hr_class",
      icon: PieChart,
      items: [
        {
          title: "学生",
          url: "hr_class/students",
        },
        {
          title: "学生個人連絡",
          url: "hr_class/contact",
        },
      ],
    },
    {
      title: "その他",
      url: "other",
      icon: Settings2,
      items: [
        {
          title: "イベント",
          url: "event",
        },
      ],
    },
  ],
  admin: [
    {
      name: "クラス",
      url: "admin/class",
      icon: Frame,
    },
    {
      name: "学校行事",
      url: "admin/schoolEvent",
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
        <NavAdmin projects={data.admin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
