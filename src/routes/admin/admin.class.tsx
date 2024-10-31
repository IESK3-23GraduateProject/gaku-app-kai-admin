import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/admin/class')({
  component: () => <div>Hello /admin/admin/class!</div>,
})
