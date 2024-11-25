import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news')({
  component: NewsComponent,
})

function NewsComponent() {
  return (
    <div className="my-4 p-2">
      <div> 
        お知らせ
      </div>
      <Outlet />
    </div>
  )
}
