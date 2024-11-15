import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hr_class/contact')({
  component: ContactComponent
})

function ContactComponent() {
  return (<div> Hello / hr_class / contact!</div >)
}
