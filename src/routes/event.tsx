import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/event')({
  component: EventComponent
})

function EventComponent() {
  return (<div>Hello /event!</div>)
}
