import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/student')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /student!'
}
