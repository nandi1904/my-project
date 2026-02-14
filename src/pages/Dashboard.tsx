import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Users, UserCheck, UserX, Brain, TrendingUp } from "lucide-react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";

const pieData = [
  { name: "Eligible", value: 342, color: "hsl(250, 75%, 60%)" },
  { name: "Not Eligible", value: 186, color: "hsl(220, 15%, 85%)" },
  { name: "Pending", value: 72, color: "hsl(38, 92%, 55%)" },
];

const barData = [
  { department: "Engineering", eligible: 85, notEligible: 32 },
  { department: "Marketing", eligible: 62, notEligible: 28 },
  { department: "Sales", eligible: 78, notEligible: 45 },
  { department: "HR", eligible: 34, notEligible: 18 },
  { department: "Finance", eligible: 48, notEligible: 22 },
  { department: "Design", eligible: 35, notEligible: 15 },
];

const recentActivity = [
  { name: "Sarah Chen", dept: "Engineering", result: "Eligible", time: "2 min ago" },
  { name: "Marcus Johnson", dept: "Sales", result: "Not Eligible", time: "15 min ago" },
  { name: "Priya Patel", dept: "Marketing", result: "Eligible", time: "1 hr ago" },
  { name: "Alex Kim", dept: "Design", result: "Pending", time: "2 hr ago" },
];

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Employees"
            value="600"
            icon={<Users className="w-4 h-4 text-primary" />}
            trend="+12%"
            trendUp
            delay={0}
          />
          <StatCard
            title="Eligible"
            value="342"
            icon={<UserCheck className="w-4 h-4 text-primary" />}
            trend="+8%"
            trendUp
            delay={1}
          />
          <StatCard
            title="Not Eligible"
            value="186"
            icon={<UserX className="w-4 h-4 text-primary" />}
            trend="-3%"
            delay={2}
          />
          <StatCard
            title="Avg Confidence"
            value="87.4%"
            icon={<Brain className="w-4 h-4 text-primary" />}
            trend="+2.1%"
            trendUp
            delay={3}
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Donut */}
          <div className="glass-card p-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Eligibility Ratio</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 -mt-2">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar chart */}
          <div className="glass-card p-5 lg:col-span-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Department Insights</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={barData} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 90%)" vertical={false} />
                <XAxis dataKey="department" tick={{ fontSize: 11, fill: "hsl(200, 10%, 45%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(200, 10%, 45%)" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid hsl(200, 15%, 90%)",
                    boxShadow: "0 4px 12px hsla(200, 25%, 10%, 0.08)",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="eligible" fill="hsl(250, 75%, 60%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="notEligible" fill="hsl(220, 15%, 85%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent activity */}
        <div className="glass-card p-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Recent Predictions</h3>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-medium">
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.dept}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    item.result === "Eligible" ? "bg-accent text-accent-foreground" :
                    item.result === "Not Eligible" ? "bg-destructive/10 text-destructive" :
                    "bg-warning/10 text-warning"
                  }`}>
                    {item.result}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
