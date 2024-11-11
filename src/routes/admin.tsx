import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminComponent,
})

function AdminComponent() {
  return (
    <div className="p-2">
      <div>I'm a Admin Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}