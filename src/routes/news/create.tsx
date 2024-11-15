import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/create')({
  component: NewsComponent,
})

function NewsComponent() {
  return 'Hello /news/create!'
}
