import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absences/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /absences/!'
}
