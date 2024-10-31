import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/layout/layout')({
  component: () => <div>Hello /layout!</div>,
})
