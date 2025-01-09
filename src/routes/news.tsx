import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news')({
  component: NewsComponent,
})

function NewsComponent() {
  return (
    <Outlet />
  )
}
