import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class/students/$student_id')({
  component: StudentsComponent,
})

function StudentsComponent() {
  return 'Hello /hr_class/students/$student_id!'
}
