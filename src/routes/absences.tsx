import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absences')({
  component: AbsencesComponent,
})

function AbsencesComponent() {
  return (
    <Outlet />
  )
}
