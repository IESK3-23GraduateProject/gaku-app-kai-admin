import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/main')({
  component: () => <div>Hello /news/main!</div>,
})
