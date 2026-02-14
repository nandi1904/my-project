import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Calendar, ClipboardCheck, Mail, Shield, Award, Briefcase, GraduationCap, MapPin, Phone, Building2 } from "lucide-react";

const userData = {
  name: "John Doe",
  email: "john.doe@company.com",
  phone: "+1 (555) 123-4567",
  department: "Engineering",
  role: "Senior Data Analyst",
  designation: "Lead Analyst",
  education: "Master's in Data Science",
  location: "San Francisco, CA",
  employeeId: "EMP-1042",
  joinDate: "March 15, 2021",
  badge: "Admin",
};

export default function Profile() {
  return (
    <DashboardLayout title="Profile">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Card */}
        <div className="glass-card overflow-hidden opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
          {/* Gradient banner */}
          <div className="h-28 gradient-primary relative">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, hsla(0,0%,100%,0.1) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }} />
          </div>
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 -mt-12">
              <div className="w-24 h-24 rounded-2xl gradient-vivid flex items-center justify-center text-primary-foreground text-3xl font-bold border-4 border-card shadow-lg">
                JD
              </div>
              <div className="text-center sm:text-left flex-1 mt-2 sm:mt-4">
                <h2 className="text-xl font-bold text-foreground">{userData.name}</h2>
                <p className="text-sm text-muted-foreground">{userData.role} · {userData.department}</p>
                <div className="flex flex-wrap items-center gap-2 mt-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                    <Shield className="w-3 h-3" /> {userData.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "hsl(190, 90%, 93%)", color: "hsl(190, 90%, 35%)" }}>
                    <Award className="w-3 h-3" /> Top Performer
                  </span>
                  <span className="text-xs text-muted-foreground">ID: {userData.employeeId}</span>
                </div>
              </div>
              <Button variant="outline" className="rounded-xl">Edit Profile</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            title="Predictions Checked"
            value="247"
            icon={<ClipboardCheck className="w-4 h-4 text-primary" />}
            delay={1}
          />
          <StatCard
            title="Last Login"
            value="Today"
            subtitle="Feb 14, 2026 09:32 AM"
            icon={<Calendar className="w-4 h-4 text-primary" />}
            delay={2}
          />
          <StatCard
            title="AI Model Version"
            value="v2.4"
            icon={<Brain className="w-4 h-4 text-primary" />}
            delay={3}
          />
        </div>

        {/* Contact & Work Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email Address</label>
                <Input defaultValue={userData.email} className="rounded-xl" readOnly />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
                <Input defaultValue={userData.phone} className="rounded-xl" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Location</label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <Input defaultValue={userData.location} className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" /> Work Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Department</label>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <Input defaultValue={userData.department} className="rounded-xl" readOnly />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Designation</label>
                <Input defaultValue={userData.designation} className="rounded-xl" readOnly />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Education</label>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  <Input defaultValue={userData.education} className="rounded-xl" readOnly />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Joined</label>
                <Input defaultValue={userData.joinDate} className="rounded-xl" readOnly />
              </div>
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-center">
          <Button className="rounded-xl gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8">
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
