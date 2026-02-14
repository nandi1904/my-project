import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const history = [
  { id: 1, name: "Sarah Chen", dept: "Engineering", date: "2026-02-14 09:32", confidence: 92.1, status: "eligible" as const },
  { id: 2, name: "Marcus Johnson", dept: "Sales", date: "2026-02-14 09:15", confidence: 48.3, status: "not_eligible" as const },
  { id: 3, name: "Priya Patel", dept: "Marketing", date: "2026-02-13 16:45", confidence: 87.6, status: "eligible" as const },
  { id: 4, name: "Alex Kim", dept: "Design", date: "2026-02-13 14:22", confidence: 65.2, status: "pending" as const },
  { id: 5, name: "Jordan Lee", dept: "HR", date: "2026-02-12 11:08", confidence: 78.9, status: "eligible" as const },
  { id: 6, name: "Emily Rodriguez", dept: "Finance", date: "2026-02-12 10:30", confidence: 91.4, status: "eligible" as const },
  { id: 7, name: "David Okafor", dept: "Engineering", date: "2026-02-11 15:55", confidence: 42.7, status: "not_eligible" as const },
  { id: 8, name: "Lisa Wang", dept: "Marketing", date: "2026-02-11 09:12", confidence: 73.8, status: "pending" as const },
];

export default function PredictionHistory() {
  const downloadCSV = () => {
    const csv = "Name,Department,Date,Confidence,Status\n" +
      history.map(h => `${h.name},${h.dept},${h.date},${h.confidence}%,${h.status}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "prediction_history.csv";
    a.click();
  };

  return (
    <DashboardLayout title="Prediction History">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {["All", "Eligible", "Not Eligible", "Pending"].map(f => (
              <Button key={f} variant={f === "All" ? "default" : "outline"} size="sm"
                className={`rounded-full text-xs ${f === "All" ? "gradient-primary text-primary-foreground" : ""}`}>
                {f}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="rounded-xl" onClick={downloadCSV}>
            <Download className="w-3 h-3 mr-1.5" /> Export CSV
          </Button>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Employee</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden sm:table-cell">Department</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden md:table-cell">Date & Time</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Confidence</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Result</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h) => (
                  <tr key={h.id} className="border-b border-border/30 hover:bg-accent/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-medium flex-shrink-0">
                          {h.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="text-sm font-medium text-foreground">{h.name}</span>
                      </div>
                    </td>
                    <td className="p-4 hidden sm:table-cell">
                      <span className="text-sm text-muted-foreground">{h.dept}</span>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="text-xs text-muted-foreground">{h.date}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-semibold text-foreground">{h.confidence}%</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={h.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
