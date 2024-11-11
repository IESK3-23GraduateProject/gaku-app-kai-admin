import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/class')({
  component: AdminComponent,
})

function AdminComponent() {
  return 'Hello /admin/class!'
}
