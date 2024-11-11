import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class/')({
  component: () => <div>Hello /hr_class/!</div>,
})
