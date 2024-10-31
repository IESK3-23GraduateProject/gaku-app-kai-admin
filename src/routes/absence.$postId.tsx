import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absence/$postId')({
  component: () => <div>Hello /absence/$postId!</div>,
})
