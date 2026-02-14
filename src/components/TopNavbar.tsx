import { Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export function TopNavbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center justify-between h-14 px-4 lg:px-6">
        <h1 className="text-lg font-semibold text-foreground pl-12 lg:pl-0">{title}</h1>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-secondary rounded-xl px-3 py-1.5">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm w-40 placeholder:text-muted-foreground"
            />
          </div>
          <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full gradient-primary" />
          </button>
          <Link to="/profile">
            <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all">
              <AvatarFallback className="gradient-primary text-primary-foreground text-xs font-medium">
                JD
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
