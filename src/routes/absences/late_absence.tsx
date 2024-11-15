import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absences/late_absence')({
  component: AbsencesComponent,
})

function AbsencesComponent() {
  return 'Hello /absences/late_absence!'
}
