import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class/students')({
    component: StudentsComponent,
})

function StudentsComponent() {
  return (
    <div className="p-2">
      <div>I'm a Students Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
