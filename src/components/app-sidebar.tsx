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

// Insert Data Here
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
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
          url: "news",
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
          title: "確認",
          url: "absences",
        },
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
          title: "ホーム",
          url: "hr_class",
        },
        {
          title: "学生",
          url: "hr_class/students",
        },
        {
          title: "学生個人連絡",
          url: "hr_class/$student_id",
        },
      ],
    },
  ],
  projects: [
    {
      name: "欠席・遅刻",
      url: "absence.index",
      icon: Frame,
    },
    {
      name: "公欠届",
      url: "absence",
      icon: PieChart,
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
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
