import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/class/$postId')({
  component: () => <div>Hello /class/$postId!</div>,
})
