// components/teacher/mail.tsx
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

export default function TeacherMail() {
  // Dummy data
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "john@example.com",
    },
    // Add more dummy data as needed
  ]

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}