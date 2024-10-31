import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/admin/student')({
  component: () => <div>Hello /admin/admin/student!</div>,
})
