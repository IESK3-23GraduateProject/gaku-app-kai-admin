import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/student')({
  component: StudentComponent,
})

function StudentComponent() {
  return 'Hello /student!'
}
