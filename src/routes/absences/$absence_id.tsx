import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absences/$absence_id')({
  component: AbsencesComponent,
})

function AbsencesComponent() {
  return 'Hello /absences/$absence_id!'
}
