import * as React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <div>I'm a HR_Class Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
