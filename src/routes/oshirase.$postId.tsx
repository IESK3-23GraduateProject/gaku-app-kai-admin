import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/oshirase/$postId')({
  component: () => <div>Hello /oshirase/$postId!</div>,
})
