import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/admin/school')({
  component: () => <div>Hello /admin/admin/school!</div>,
})
