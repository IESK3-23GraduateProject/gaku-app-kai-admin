import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/schoolEvent')({
  component: AdminComponent,
})

function AdminComponent() {
  return 'Hello /admin/schoolEvent!'
}
