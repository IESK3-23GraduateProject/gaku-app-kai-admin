import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absences/')({
  component: AbsencesComponent,
})

function AbsencesComponent() {
  return 'Hello /absences/!'
}
