import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class')({
  component: HrClassComponent,
})

function HrClassComponent() {
  return (
    <div className="p-2">
      <div>I'm a HR_Class Layout</div>
      <Outlet />
    </div>
  )
}
