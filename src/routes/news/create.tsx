import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /news/create!'
}
