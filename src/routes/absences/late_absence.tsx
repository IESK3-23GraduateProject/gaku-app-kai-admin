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

export const Route = createFileRoute('/absences/late_absence')({
  component: AbsencesComponent,
});

// Sample absence data
const absences = [
  {
    absent_info_id: 1,
    student_user_id: 2240002,
    other_notes: "",
    created_at: "2025-01-27 02:42:29.143874+00",
    select_type: "absent",
    reason: null,
    user_name: "Alice Johnson",
    day_off: "2025-01-27 15:00:00",
  },
  {
    absent_info_id: 2,
    student_user_id: 2240002,
    other_notes: "3限までには学校に着きます。",
    created_at: "2025-01-27 03:07:38.148842+00",
    select_type: "late",
    reason: null,
    user_name: "Alice Johnson",
    day_off: "2025-01-01 15:00:00",
  },
  {
    absent_info_id: 3,
    student_user_id: 2240002,
    other_notes: "",
    created_at: "2025-01-27 03:12:23.562621+00",
    select_type: "train-delay",
    reason: null,
    user_name: "Alice Johnson",
    day_off: "2025-01-24 15:00:00",
  },
  {
    absent_info_id: 4,
    student_user_id: 2240002,
    other_notes: "",
    created_at: "2025-01-27 03:56:19.596966+00",
    select_type: "late",
    reason: null,
    user_name: "Alice Johnson",
    day_off: "2025-01-01 15:00:00",
  },
  {
    absent_info_id: 5,
    student_user_id: 2240002,
    other_notes: "",
    created_at: "2025-01-27 04:02:20.244073+00",
    select_type: "train-delay",
    reason: null,
    user_name: "Alice Johnson",
    day_off: "2025-01-21 15:00:00",
  },
  {
    absent_info_id: 6,
    student_user_id: 2240002,
    other_notes: "",
    created_at: "2025-01-27 05:23:11.447351+00",
    select_type: "absent",
    reason: null,
    user_name: "Alice Johnson",
    day_off: "2025-01-07 15:00:00",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>名前</TableHead>
          <TableHead>種類</TableHead> {/* select_type */}
          <TableHead>理由</TableHead> {/* reason */}
          <TableHead>備考</TableHead> {/* other_notes */}
          <TableHead>日付</TableHead> {/* day_off */}
          <TableHead>作成日時</TableHead> {/* created_at */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {absences.map((absence) => (
          <TableRow key={absence.absent_info_id}>
            <TableCell>{absence.user_name}</TableCell>
            <TableCell>
              {absence.select_type === "absent"
                ? "欠席"
                : absence.select_type === "late"
                  ? "遅刻"
                  : "電車遅延"}
            </TableCell>
            <TableCell>{absence.reason || "なし"}</TableCell>
            <TableCell>{absence.other_notes || "なし"}</TableCell>
            <TableCell>{formatDate(absence.day_off)}</TableCell>
            <TableCell>{formatDate(absence.created_at)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6} className="text-center">
            遅刻や欠席のリスト
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

function AbsencesComponent() {
  return (
    <div className="px-4">
      <TableDemo />
    </div>
  );
}
