import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";

const employees = [
  { id: 1, name: "Sarah Chen", email: "sarah@company.com", dept: "Engineering", rating: 4.8, years: 5, status: "eligible" as const },
  { id: 2, name: "Marcus Johnson", email: "marcus@company.com", dept: "Sales", rating: 3.2, years: 2, status: "not_eligible" as const },
  { id: 3, name: "Priya Patel", email: "priya@company.com", dept: "Marketing", rating: 4.5, years: 4, status: "eligible" as const },
  { id: 4, name: "Alex Kim", email: "alex@company.com", dept: "Design", rating: 4.1, years: 3, status: "pending" as const },
  { id: 5, name: "Jordan Lee", email: "jordan@company.com", dept: "HR", rating: 3.9, years: 6, status: "eligible" as const },
  { id: 6, name: "Emily Rodriguez", email: "emily@company.com", dept: "Finance", rating: 4.6, years: 4, status: "eligible" as const },
  { id: 7, name: "David Okafor", email: "david@company.com", dept: "Engineering", rating: 3.5, years: 1, status: "not_eligible" as const },
  { id: 8, name: "Lisa Wang", email: "lisa@company.com", dept: "Marketing", rating: 4.3, years: 3, status: "pending" as const },
];

const deptColors: Record<string, string> = {
  Engineering: "bg-info/10 text-info",
  Sales: "bg-warning/10 text-warning",
  Marketing: "bg-accent text-accent-foreground",
  Design: "bg-primary/10 text-primary",
  HR: "bg-destructive/10 text-destructive",
  Finance: "bg-success/10 text-success",
};

export default function Employees() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const filtered = employees.filter(e =>
    (filter === "all" || e.status === filter) &&
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout title="Employees">
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["all", "eligible", "not_eligible", "pending"].map(f => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                className={`rounded-full text-xs ${filter === f ? "gradient-primary text-primary-foreground" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : f === "not_eligible" ? "Not Eligible" : f.charAt(0).toUpperCase() + f.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Employee</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden sm:table-cell">Department</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden md:table-cell">Rating</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden lg:table-cell">Years</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((emp) => (
                  <tr key={emp.id} className="border-b border-border/30 hover:bg-accent/30 transition-colors cursor-pointer">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-medium flex-shrink-0">
                          {emp.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{emp.name}</p>
                          <p className="text-xs text-muted-foreground">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden sm:table-cell">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${deptColors[emp.dept]}`}>
                        {emp.dept}
                      </span>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-medium text-foreground">{emp.rating}</span>
                        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full gradient-primary rounded-full" style={{ width: `${(emp.rating / 5) * 100}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <span className="text-sm text-muted-foreground">{emp.years} yrs</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={emp.status} />
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
