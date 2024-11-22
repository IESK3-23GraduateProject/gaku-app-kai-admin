import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/teacher/$tNews_id')({
  component: () => <div>Hello /news/teacher/$tNews_id!</div>,
})
