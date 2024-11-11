import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class/students/$student_id')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /hr_class/students/$student_id!'
}
