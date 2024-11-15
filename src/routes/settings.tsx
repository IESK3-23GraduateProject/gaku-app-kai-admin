import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: SettingComponent,
})

function SettingComponent() {
  return 'Hello /settings!'
}
