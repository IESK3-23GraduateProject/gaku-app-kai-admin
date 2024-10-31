import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/class/')({
  component: () => <div>Hello /class/!</div>,
})
