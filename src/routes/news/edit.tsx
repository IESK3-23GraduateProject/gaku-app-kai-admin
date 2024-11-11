import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/edit')({
    component: NewsComponent,
})

function NewsComponent() {
  return 'Hello /news/edit!'
}
