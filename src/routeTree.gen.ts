/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StudentImport } from './routes/student'
import { Route as SettingsImport } from './routes/settings'
import { Route as ProfileImport } from './routes/profile'
import { Route as NewsImport } from './routes/news'
import { Route as HrclassImport } from './routes/hr_class'
import { Route as EventImport } from './routes/event'
import { Route as AllusersImport } from './routes/all_users'
import { Route as AdminImport } from './routes/admin'
import { Route as AbsencesImport } from './routes/absences'
import { Route as IndexImport } from './routes/index'
import { Route as NewsTeacherImport } from './routes/news/teacher'
import { Route as NewsMainImport } from './routes/news/main'
import { Route as NewsEditImport } from './routes/news/edit'
import { Route as NewsCreateImport } from './routes/news/create'
import { Route as HrclassStudentsImport } from './routes/hr_class/students'
import { Route as HrclassContactImport } from './routes/hr_class/contact'
import { Route as AdminSchoolEventImport } from './routes/admin/schoolEvent'
import { Route as AdminClassImport } from './routes/admin/class'
import { Route as AbsencesLateabsenceImport } from './routes/absences/late_absence'
import { Route as AbsencesAuthorizedabsenceImport } from './routes/absences/authorized_absence'
import { Route as AbsencesAbsenceidImport } from './routes/absences/$absence_id'
import { Route as NewsMainIndexImport } from './routes/news/main.index'
import { Route as NewsMainMainidImport } from './routes/news/main.$main_id'
import { Route as HrclassStudentsStudentidImport } from './routes/hr_class/students/$student_id'

// Create/Update Routes

const StudentRoute = StudentImport.update({
  id: '/student',
  path: '/student',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const NewsRoute = NewsImport.update({
  id: '/news',
  path: '/news',
  getParentRoute: () => rootRoute,
} as any)

const HrclassRoute = HrclassImport.update({
  id: '/hr_class',
  path: '/hr_class',
  getParentRoute: () => rootRoute,
} as any)

const EventRoute = EventImport.update({
  id: '/event',
  path: '/event',
  getParentRoute: () => rootRoute,
} as any)

const AllusersRoute = AllusersImport.update({
  id: '/all_users',
  path: '/all_users',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const AbsencesRoute = AbsencesImport.update({
  id: '/absences',
  path: '/absences',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NewsTeacherRoute = NewsTeacherImport.update({
  id: '/teacher',
  path: '/teacher',
  getParentRoute: () => NewsRoute,
} as any)

const NewsMainRoute = NewsMainImport.update({
  id: '/main',
  path: '/main',
  getParentRoute: () => NewsRoute,
} as any)

const NewsEditRoute = NewsEditImport.update({
  id: '/edit',
  path: '/edit',
  getParentRoute: () => NewsRoute,
} as any)

const NewsCreateRoute = NewsCreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => NewsRoute,
} as any)

const HrclassStudentsRoute = HrclassStudentsImport.update({
  id: '/students',
  path: '/students',
  getParentRoute: () => HrclassRoute,
} as any)

const HrclassContactRoute = HrclassContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => HrclassRoute,
} as any)

const AdminSchoolEventRoute = AdminSchoolEventImport.update({
  id: '/schoolEvent',
  path: '/schoolEvent',
  getParentRoute: () => AdminRoute,
} as any)

const AdminClassRoute = AdminClassImport.update({
  id: '/class',
  path: '/class',
  getParentRoute: () => AdminRoute,
} as any)

const AbsencesLateabsenceRoute = AbsencesLateabsenceImport.update({
  id: '/late_absence',
  path: '/late_absence',
  getParentRoute: () => AbsencesRoute,
} as any)

const AbsencesAuthorizedabsenceRoute = AbsencesAuthorizedabsenceImport.update({
  id: '/authorized_absence',
  path: '/authorized_absence',
  getParentRoute: () => AbsencesRoute,
} as any)

const AbsencesAbsenceidRoute = AbsencesAbsenceidImport.update({
  id: '/$absence_id',
  path: '/$absence_id',
  getParentRoute: () => AbsencesRoute,
} as any)

const NewsMainIndexRoute = NewsMainIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => NewsMainRoute,
} as any)

const NewsMainMainidRoute = NewsMainMainidImport.update({
  id: '/$main_id',
  path: '/$main_id',
  getParentRoute: () => NewsMainRoute,
} as any)

const HrclassStudentsStudentidRoute = HrclassStudentsStudentidImport.update({
  id: '/$student_id',
  path: '/$student_id',
  getParentRoute: () => HrclassStudentsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/absences': {
      id: '/absences'
      path: '/absences'
      fullPath: '/absences'
      preLoaderRoute: typeof AbsencesImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/all_users': {
      id: '/all_users'
      path: '/all_users'
      fullPath: '/all_users'
      preLoaderRoute: typeof AllusersImport
      parentRoute: typeof rootRoute
    }
    '/event': {
      id: '/event'
      path: '/event'
      fullPath: '/event'
      preLoaderRoute: typeof EventImport
      parentRoute: typeof rootRoute
    }
    '/hr_class': {
      id: '/hr_class'
      path: '/hr_class'
      fullPath: '/hr_class'
      preLoaderRoute: typeof HrclassImport
      parentRoute: typeof rootRoute
    }
    '/news': {
      id: '/news'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/student': {
      id: '/student'
      path: '/student'
      fullPath: '/student'
      preLoaderRoute: typeof StudentImport
      parentRoute: typeof rootRoute
    }
    '/absences/$absence_id': {
      id: '/absences/$absence_id'
      path: '/$absence_id'
      fullPath: '/absences/$absence_id'
      preLoaderRoute: typeof AbsencesAbsenceidImport
      parentRoute: typeof AbsencesImport
    }
    '/absences/authorized_absence': {
      id: '/absences/authorized_absence'
      path: '/authorized_absence'
      fullPath: '/absences/authorized_absence'
      preLoaderRoute: typeof AbsencesAuthorizedabsenceImport
      parentRoute: typeof AbsencesImport
    }
    '/absences/late_absence': {
      id: '/absences/late_absence'
      path: '/late_absence'
      fullPath: '/absences/late_absence'
      preLoaderRoute: typeof AbsencesLateabsenceImport
      parentRoute: typeof AbsencesImport
    }
    '/admin/class': {
      id: '/admin/class'
      path: '/class'
      fullPath: '/admin/class'
      preLoaderRoute: typeof AdminClassImport
      parentRoute: typeof AdminImport
    }
    '/admin/schoolEvent': {
      id: '/admin/schoolEvent'
      path: '/schoolEvent'
      fullPath: '/admin/schoolEvent'
      preLoaderRoute: typeof AdminSchoolEventImport
      parentRoute: typeof AdminImport
    }
    '/hr_class/contact': {
      id: '/hr_class/contact'
      path: '/contact'
      fullPath: '/hr_class/contact'
      preLoaderRoute: typeof HrclassContactImport
      parentRoute: typeof HrclassImport
    }
    '/hr_class/students': {
      id: '/hr_class/students'
      path: '/students'
      fullPath: '/hr_class/students'
      preLoaderRoute: typeof HrclassStudentsImport
      parentRoute: typeof HrclassImport
    }
    '/news/create': {
      id: '/news/create'
      path: '/create'
      fullPath: '/news/create'
      preLoaderRoute: typeof NewsCreateImport
      parentRoute: typeof NewsImport
    }
    '/news/edit': {
      id: '/news/edit'
      path: '/edit'
      fullPath: '/news/edit'
      preLoaderRoute: typeof NewsEditImport
      parentRoute: typeof NewsImport
    }
    '/news/main': {
      id: '/news/main'
      path: '/main'
      fullPath: '/news/main'
      preLoaderRoute: typeof NewsMainImport
      parentRoute: typeof NewsImport
    }
    '/news/teacher': {
      id: '/news/teacher'
      path: '/teacher'
      fullPath: '/news/teacher'
      preLoaderRoute: typeof NewsTeacherImport
      parentRoute: typeof NewsImport
    }
    '/hr_class/students/$student_id': {
      id: '/hr_class/students/$student_id'
      path: '/$student_id'
      fullPath: '/hr_class/students/$student_id'
      preLoaderRoute: typeof HrclassStudentsStudentidImport
      parentRoute: typeof HrclassStudentsImport
    }
    '/news/main/$main_id': {
      id: '/news/main/$main_id'
      path: '/$main_id'
      fullPath: '/news/main/$main_id'
      preLoaderRoute: typeof NewsMainMainidImport
      parentRoute: typeof NewsMainImport
    }
    '/news/main/': {
      id: '/news/main/'
      path: '/'
      fullPath: '/news/main/'
      preLoaderRoute: typeof NewsMainIndexImport
      parentRoute: typeof NewsMainImport
    }
  }
}

// Create and export the route tree

interface AbsencesRouteChildren {
  AbsencesAbsenceidRoute: typeof AbsencesAbsenceidRoute
  AbsencesAuthorizedabsenceRoute: typeof AbsencesAuthorizedabsenceRoute
  AbsencesLateabsenceRoute: typeof AbsencesLateabsenceRoute
}

const AbsencesRouteChildren: AbsencesRouteChildren = {
  AbsencesAbsenceidRoute: AbsencesAbsenceidRoute,
  AbsencesAuthorizedabsenceRoute: AbsencesAuthorizedabsenceRoute,
  AbsencesLateabsenceRoute: AbsencesLateabsenceRoute,
}

const AbsencesRouteWithChildren = AbsencesRoute._addFileChildren(
  AbsencesRouteChildren,
)

interface AdminRouteChildren {
  AdminClassRoute: typeof AdminClassRoute
  AdminSchoolEventRoute: typeof AdminSchoolEventRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminClassRoute: AdminClassRoute,
  AdminSchoolEventRoute: AdminSchoolEventRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

interface HrclassStudentsRouteChildren {
  HrclassStudentsStudentidRoute: typeof HrclassStudentsStudentidRoute
}

const HrclassStudentsRouteChildren: HrclassStudentsRouteChildren = {
  HrclassStudentsStudentidRoute: HrclassStudentsStudentidRoute,
}

const HrclassStudentsRouteWithChildren = HrclassStudentsRoute._addFileChildren(
  HrclassStudentsRouteChildren,
)

interface HrclassRouteChildren {
  HrclassContactRoute: typeof HrclassContactRoute
  HrclassStudentsRoute: typeof HrclassStudentsRouteWithChildren
}

const HrclassRouteChildren: HrclassRouteChildren = {
  HrclassContactRoute: HrclassContactRoute,
  HrclassStudentsRoute: HrclassStudentsRouteWithChildren,
}

const HrclassRouteWithChildren =
  HrclassRoute._addFileChildren(HrclassRouteChildren)

interface NewsMainRouteChildren {
  NewsMainMainidRoute: typeof NewsMainMainidRoute
  NewsMainIndexRoute: typeof NewsMainIndexRoute
}

const NewsMainRouteChildren: NewsMainRouteChildren = {
  NewsMainMainidRoute: NewsMainMainidRoute,
  NewsMainIndexRoute: NewsMainIndexRoute,
}

const NewsMainRouteWithChildren = NewsMainRoute._addFileChildren(
  NewsMainRouteChildren,
)

interface NewsRouteChildren {
  NewsCreateRoute: typeof NewsCreateRoute
  NewsEditRoute: typeof NewsEditRoute
  NewsMainRoute: typeof NewsMainRouteWithChildren
  NewsTeacherRoute: typeof NewsTeacherRoute
}

const NewsRouteChildren: NewsRouteChildren = {
  NewsCreateRoute: NewsCreateRoute,
  NewsEditRoute: NewsEditRoute,
  NewsMainRoute: NewsMainRouteWithChildren,
  NewsTeacherRoute: NewsTeacherRoute,
}

const NewsRouteWithChildren = NewsRoute._addFileChildren(NewsRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/absences': typeof AbsencesRouteWithChildren
  '/admin': typeof AdminRouteWithChildren
  '/all_users': typeof AllusersRoute
  '/event': typeof EventRoute
  '/hr_class': typeof HrclassRouteWithChildren
  '/news': typeof NewsRouteWithChildren
  '/profile': typeof ProfileRoute
  '/settings': typeof SettingsRoute
  '/student': typeof StudentRoute
  '/absences/$absence_id': typeof AbsencesAbsenceidRoute
  '/absences/authorized_absence': typeof AbsencesAuthorizedabsenceRoute
  '/absences/late_absence': typeof AbsencesLateabsenceRoute
  '/admin/class': typeof AdminClassRoute
  '/admin/schoolEvent': typeof AdminSchoolEventRoute
  '/hr_class/contact': typeof HrclassContactRoute
  '/hr_class/students': typeof HrclassStudentsRouteWithChildren
  '/news/create': typeof NewsCreateRoute
  '/news/edit': typeof NewsEditRoute
  '/news/main': typeof NewsMainRouteWithChildren
  '/news/teacher': typeof NewsTeacherRoute
  '/hr_class/students/$student_id': typeof HrclassStudentsStudentidRoute
  '/news/main/$main_id': typeof NewsMainMainidRoute
  '/news/main/': typeof NewsMainIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/absences': typeof AbsencesRouteWithChildren
  '/admin': typeof AdminRouteWithChildren
  '/all_users': typeof AllusersRoute
  '/event': typeof EventRoute
  '/hr_class': typeof HrclassRouteWithChildren
  '/news': typeof NewsRouteWithChildren
  '/profile': typeof ProfileRoute
  '/settings': typeof SettingsRoute
  '/student': typeof StudentRoute
  '/absences/$absence_id': typeof AbsencesAbsenceidRoute
  '/absences/authorized_absence': typeof AbsencesAuthorizedabsenceRoute
  '/absences/late_absence': typeof AbsencesLateabsenceRoute
  '/admin/class': typeof AdminClassRoute
  '/admin/schoolEvent': typeof AdminSchoolEventRoute
  '/hr_class/contact': typeof HrclassContactRoute
  '/hr_class/students': typeof HrclassStudentsRouteWithChildren
  '/news/create': typeof NewsCreateRoute
  '/news/edit': typeof NewsEditRoute
  '/news/teacher': typeof NewsTeacherRoute
  '/hr_class/students/$student_id': typeof HrclassStudentsStudentidRoute
  '/news/main/$main_id': typeof NewsMainMainidRoute
  '/news/main': typeof NewsMainIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/absences': typeof AbsencesRouteWithChildren
  '/admin': typeof AdminRouteWithChildren
  '/all_users': typeof AllusersRoute
  '/event': typeof EventRoute
  '/hr_class': typeof HrclassRouteWithChildren
  '/news': typeof NewsRouteWithChildren
  '/profile': typeof ProfileRoute
  '/settings': typeof SettingsRoute
  '/student': typeof StudentRoute
  '/absences/$absence_id': typeof AbsencesAbsenceidRoute
  '/absences/authorized_absence': typeof AbsencesAuthorizedabsenceRoute
  '/absences/late_absence': typeof AbsencesLateabsenceRoute
  '/admin/class': typeof AdminClassRoute
  '/admin/schoolEvent': typeof AdminSchoolEventRoute
  '/hr_class/contact': typeof HrclassContactRoute
  '/hr_class/students': typeof HrclassStudentsRouteWithChildren
  '/news/create': typeof NewsCreateRoute
  '/news/edit': typeof NewsEditRoute
  '/news/main': typeof NewsMainRouteWithChildren
  '/news/teacher': typeof NewsTeacherRoute
  '/hr_class/students/$student_id': typeof HrclassStudentsStudentidRoute
  '/news/main/$main_id': typeof NewsMainMainidRoute
  '/news/main/': typeof NewsMainIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/absences'
    | '/admin'
    | '/all_users'
    | '/event'
    | '/hr_class'
    | '/news'
    | '/profile'
    | '/settings'
    | '/student'
    | '/absences/$absence_id'
    | '/absences/authorized_absence'
    | '/absences/late_absence'
    | '/admin/class'
    | '/admin/schoolEvent'
    | '/hr_class/contact'
    | '/hr_class/students'
    | '/news/create'
    | '/news/edit'
    | '/news/main'
    | '/news/teacher'
    | '/hr_class/students/$student_id'
    | '/news/main/$main_id'
    | '/news/main/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/absences'
    | '/admin'
    | '/all_users'
    | '/event'
    | '/hr_class'
    | '/news'
    | '/profile'
    | '/settings'
    | '/student'
    | '/absences/$absence_id'
    | '/absences/authorized_absence'
    | '/absences/late_absence'
    | '/admin/class'
    | '/admin/schoolEvent'
    | '/hr_class/contact'
    | '/hr_class/students'
    | '/news/create'
    | '/news/edit'
    | '/news/teacher'
    | '/hr_class/students/$student_id'
    | '/news/main/$main_id'
    | '/news/main'
  id:
    | '__root__'
    | '/'
    | '/absences'
    | '/admin'
    | '/all_users'
    | '/event'
    | '/hr_class'
    | '/news'
    | '/profile'
    | '/settings'
    | '/student'
    | '/absences/$absence_id'
    | '/absences/authorized_absence'
    | '/absences/late_absence'
    | '/admin/class'
    | '/admin/schoolEvent'
    | '/hr_class/contact'
    | '/hr_class/students'
    | '/news/create'
    | '/news/edit'
    | '/news/main'
    | '/news/teacher'
    | '/hr_class/students/$student_id'
    | '/news/main/$main_id'
    | '/news/main/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AbsencesRoute: typeof AbsencesRouteWithChildren
  AdminRoute: typeof AdminRouteWithChildren
  AllusersRoute: typeof AllusersRoute
  EventRoute: typeof EventRoute
  HrclassRoute: typeof HrclassRouteWithChildren
  NewsRoute: typeof NewsRouteWithChildren
  ProfileRoute: typeof ProfileRoute
  SettingsRoute: typeof SettingsRoute
  StudentRoute: typeof StudentRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AbsencesRoute: AbsencesRouteWithChildren,
  AdminRoute: AdminRouteWithChildren,
  AllusersRoute: AllusersRoute,
  EventRoute: EventRoute,
  HrclassRoute: HrclassRouteWithChildren,
  NewsRoute: NewsRouteWithChildren,
  ProfileRoute: ProfileRoute,
  SettingsRoute: SettingsRoute,
  StudentRoute: StudentRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/absences",
        "/admin",
        "/all_users",
        "/event",
        "/hr_class",
        "/news",
        "/profile",
        "/settings",
        "/student"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/absences": {
      "filePath": "absences.tsx",
      "children": [
        "/absences/$absence_id",
        "/absences/authorized_absence",
        "/absences/late_absence"
      ]
    },
    "/admin": {
      "filePath": "admin.tsx",
      "children": [
        "/admin/class",
        "/admin/schoolEvent"
      ]
    },
    "/all_users": {
      "filePath": "all_users.tsx"
    },
    "/event": {
      "filePath": "event.tsx"
    },
    "/hr_class": {
      "filePath": "hr_class.tsx",
      "children": [
        "/hr_class/contact",
        "/hr_class/students"
      ]
    },
    "/news": {
      "filePath": "news.tsx",
      "children": [
        "/news/create",
        "/news/edit",
        "/news/main",
        "/news/teacher"
      ]
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/student": {
      "filePath": "student.tsx"
    },
    "/absences/$absence_id": {
      "filePath": "absences/$absence_id.tsx",
      "parent": "/absences"
    },
    "/absences/authorized_absence": {
      "filePath": "absences/authorized_absence.tsx",
      "parent": "/absences"
    },
    "/absences/late_absence": {
      "filePath": "absences/late_absence.tsx",
      "parent": "/absences"
    },
    "/admin/class": {
      "filePath": "admin/class.tsx",
      "parent": "/admin"
    },
    "/admin/schoolEvent": {
      "filePath": "admin/schoolEvent.tsx",
      "parent": "/admin"
    },
    "/hr_class/contact": {
      "filePath": "hr_class/contact.tsx",
      "parent": "/hr_class"
    },
    "/hr_class/students": {
      "filePath": "hr_class/students.tsx",
      "parent": "/hr_class",
      "children": [
        "/hr_class/students/$student_id"
      ]
    },
    "/news/create": {
      "filePath": "news/create.tsx",
      "parent": "/news"
    },
    "/news/edit": {
      "filePath": "news/edit.tsx",
      "parent": "/news"
    },
    "/news/main": {
      "filePath": "news/main.tsx",
      "parent": "/news",
      "children": [
        "/news/main/$main_id",
        "/news/main/"
      ]
    },
    "/news/teacher": {
      "filePath": "news/teacher.tsx",
      "parent": "/news"
    },
    "/hr_class/students/$student_id": {
      "filePath": "hr_class/students/$student_id.tsx",
      "parent": "/hr_class/students"
    },
    "/news/main/$main_id": {
      "filePath": "news/main.$main_id.tsx",
      "parent": "/news/main"
    },
    "/news/main/": {
      "filePath": "news/main.index.tsx",
      "parent": "/news/main"
    }
  }
}
ROUTE_MANIFEST_END */
