import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class/contact')({
  component: () => <div>Hello /hr_class/contact!</div>,
})
