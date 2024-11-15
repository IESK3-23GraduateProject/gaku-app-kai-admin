import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news')({
  component: NewsComponent,
})

function NewsComponent() {
  return (
    <div className="p-2">
      <div> /news</div>
      <Outlet />
    </div>
  )
}
