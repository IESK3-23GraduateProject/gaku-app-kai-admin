import { createFileRoute } from '@tanstack/react-router';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute('/absences/authorized_absence')({
  component: AbsencesComponent,
});

// Your sample absence data
const absences = [
  {
    official_absent_info_id: 1,
    student_user_id: 2240002,
    user_name: "Alice Johnson",
    type: "web",
    location: "home",
    content: "interview",
    company_name: "ECC",
    created_at: "2025-01-27T03:12:49.734Z",
    interview_date: null,
  },
  {
    official_absent_info_id: 2,
    student_user_id: 2240002,
    user_name: "Alice Johnson",
    type: "on-site",
    location: "home",
    content: "test-interview",
    company_name: "dgっf",
    created_at: "2025-01-27T04:31:32.163Z",
    interview_date: "2025-01-25T15:00:00.000Z",
  },
];

const formatDate = (publishAt: string) => {
  const date = new Date(publishAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
};

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>名前</TableHead>
          <TableHead>実地形態</TableHead>
          <TableHead>場所</TableHead>
          <TableHead>内容</TableHead>
          <TableHead>会社名</TableHead>
          <TableHead>面接日</TableHead>
          <TableHead>作成日時</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {absences.map((absence) => (
          <TableRow key={absence.official_absent_info_id}>
            <TableCell>{absence.user_name}</TableCell>
            <TableCell>{absence.type}</TableCell>
            <TableCell>{absence.location}</TableCell>
            <TableCell>{absence.content}</TableCell>
            <TableCell>{absence.company_name}</TableCell>
            <TableCell>
              {absence.interview_date
                ? formatDate(absence.interview_date)
                : "該当なし"}
            </TableCell>
            <TableCell>
              {formatDate(absence.created_at)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={8} className="text-center">
            A list of authorized absences.
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table >
  );
}

function AbsencesComponent() {
  return (
    <div className="px-4">
      <TableDemo />
    </div>
  );
}
