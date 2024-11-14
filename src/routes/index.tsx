import { createFileRoute } from '@tanstack/react-router'
import { Page } from '@/app/dashboard/page'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex-l">
      <Page/>
    </div>
    
  )
}