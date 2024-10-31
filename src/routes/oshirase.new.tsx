import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/oshirase/new')({
  component: () => <div>Hello /oshirase/new!</div>,
})
