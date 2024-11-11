import * as React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/absences')({
  component: AbsencesComponent,
})

function AbsencesComponent() {
  return (
    <div className="p-2">
      <div>I'm a Absences Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
