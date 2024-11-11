import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/$news_id')({
  component: NewsComponent,
})

function NewsComponent() {
  return 'Hello /news/$news_id!'
}
