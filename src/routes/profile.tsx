import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: ProfileComponent
})

function ProfileComponent() {
  <div>Hello /profile!</div>
}
