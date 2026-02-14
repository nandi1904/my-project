import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: string;
  trendUp?: boolean;
  className?: string;
  delay?: number;
}

export function StatCard({ title, value, subtitle, icon, trend, trendUp, className, delay = 0 }: StatCardProps) {
  return (
    <div
      className={cn("glass-card-hover p-5 opacity-0 animate-fade-in-up", className)}
      style={{ animationDelay: `${delay * 0.08}s`, animationFillMode: "forwards" }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-xl bg-accent">
          {icon}
        </div>
        {trend && (
          <span className={cn(
            "text-xs font-medium px-2 py-0.5 rounded-full",
            trendUp ? "bg-accent text-accent-foreground" : "bg-destructive/10 text-destructive"
          )}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground mt-0.5">{title}</p>
      {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  );
}
