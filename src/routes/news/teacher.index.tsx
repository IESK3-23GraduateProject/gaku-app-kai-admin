import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/teacher/')({
    component: TeacherIndexComponent,
})

function TeacherIndexComponent() {
  return <div>Select a post.</div>;
}
