import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absences/authorized_absence')({
  component: AbsencesComponent,
})

function AbsencesComponent() {
  return 'Hello /absences/authorized_absence!'
}
