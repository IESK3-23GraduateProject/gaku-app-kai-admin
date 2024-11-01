import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/layout')({
  component: () => <div>Hello /_layout/_layout!</div>,
})
