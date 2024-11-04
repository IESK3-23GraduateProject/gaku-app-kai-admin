import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/class/homeroom')({
  component: () => <div>Hello /class/homeroom!</div>,
})
