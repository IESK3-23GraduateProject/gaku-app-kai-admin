import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/oshirase/teacher')({
  component: () => <div>Hello /oshirase/teacher!</div>,
})
