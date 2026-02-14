import { DashboardLayout } from "@/components/DashboardLayout";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  AreaChart, Area, BarChart, Bar, ScatterChart, Scatter, ZAxis,
} from "recharts";

const trendData = [
  { month: "Jan", eligible: 45, confidence: 78 },
  { month: "Feb", eligible: 52, confidence: 80 },
  { month: "Mar", eligible: 48, confidence: 82 },
  { month: "Apr", eligible: 61, confidence: 79 },
  { month: "May", eligible: 55, confidence: 85 },
  { month: "Jun", eligible: 67, confidence: 87 },
  { month: "Jul", eligible: 72, confidence: 84 },
  { month: "Aug", eligible: 68, confidence: 88 },
  { month: "Sep", eligible: 75, confidence: 86 },
  { month: "Oct", eligible: 80, confidence: 89 },
  { month: "Nov", eligible: 78, confidence: 91 },
  { month: "Dec", eligible: 85, confidence: 87 },
];

const distributionData = [
  { range: "40-50%", count: 12 },
  { range: "50-60%", count: 28 },
  { range: "60-70%", count: 45 },
  { range: "70-80%", count: 89 },
  { range: "80-90%", count: 124 },
  { range: "90-100%", count: 67 },
];

const heatmapData = [
  { x: 1, y: 3, z: 85 }, { x: 2, y: 4, z: 92 }, { x: 3, y: 2, z: 68 },
  { x: 4, y: 5, z: 95 }, { x: 5, y: 3, z: 78 }, { x: 1, y: 4, z: 88 },
  { x: 2, y: 2, z: 62 }, { x: 3, y: 5, z: 91 }, { x: 4, y: 3, z: 82 },
  { x: 5, y: 4, z: 89 }, { x: 1, y: 5, z: 96 }, { x: 3, y: 3, z: 75 },
];

const chartStyle = {
  borderRadius: "12px",
  border: "1px solid hsl(200, 15%, 90%)",
  boxShadow: "0 4px 12px hsla(200, 25%, 10%, 0.08)",
  fontSize: "12px",
};

const axisTick = { fontSize: 11, fill: "hsl(200, 10%, 45%)" };

export default function Analytics() {
  return (
    <DashboardLayout title="Analytics">
      <div className="space-y-6">
        {/* Trend */}
        <div className="glass-card p-5 opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Eligibility Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(168, 76%, 40%)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(168, 76%, 40%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 92%)" vertical={false} />
              <XAxis dataKey="month" tick={axisTick} axisLine={false} tickLine={false} />
              <YAxis tick={axisTick} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={chartStyle} />
              <Area type="monotone" dataKey="eligible" stroke="hsl(168, 76%, 40%)" fill="url(#tealGrad)" strokeWidth={2} />
              <Line type="monotone" dataKey="confidence" stroke="hsl(200, 15%, 75%)" strokeWidth={1.5} dot={false} strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Distribution */}
          <div className="glass-card p-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Confidence Distribution</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={distributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 92%)" vertical={false} />
                <XAxis dataKey="range" tick={axisTick} axisLine={false} tickLine={false} />
                <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={chartStyle} />
                <Bar dataKey="count" fill="hsl(168, 76%, 40%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter (heatmap-style) */}
          <div className="glass-card p-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Rating vs Experience Heatmap</h3>
            <ResponsiveContainer width="100%" height={240}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 92%)" />
                <XAxis type="number" dataKey="x" name="Experience" tick={axisTick} axisLine={false} tickLine={false} label={{ value: "Experience (yrs)", position: "insideBottom", offset: -5, style: { fontSize: 10, fill: "hsl(200, 10%, 45%)" } }} />
                <YAxis type="number" dataKey="y" name="Rating" tick={axisTick} axisLine={false} tickLine={false} label={{ value: "Rating", angle: -90, position: "insideLeft", style: { fontSize: 10, fill: "hsl(200, 10%, 45%)" } }} />
                <ZAxis type="number" dataKey="z" range={[60, 300]} />
                <Tooltip contentStyle={chartStyle} />
                <Scatter data={heatmapData} fill="hsl(168, 76%, 40%)" fillOpacity={0.6} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
