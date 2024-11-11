import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/class')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /admin/class!'
}
