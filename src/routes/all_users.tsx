import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/all_users')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /all_users!'
}
