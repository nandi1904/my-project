import { cn } from "@/lib/utils";

type StatusType = "eligible" | "not_eligible" | "pending";

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  eligible: { label: "Eligible", className: "bg-accent text-accent-foreground" },
  not_eligible: { label: "Not Eligible", className: "bg-destructive/10 text-destructive" },
  pending: { label: "Pending", className: "bg-warning/10 text-warning" },
};

export function StatusBadge({ status }: { status: StatusType }) {
  const config = statusConfig[status];
  return (
    <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", config.className)}>
      {config.label}
    </span>
  );
}
