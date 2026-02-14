import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Shield, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left - Creative Visual */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(250,75%,60%)] via-[hsl(234,85%,55%)] to-[hsl(190,90%,45%)]" />
        
        {/* Decorative shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[hsla(0,0%,100%,0.08)] animate-float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-[hsla(0,0%,100%,0.06)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-2xl rotate-45 bg-[hsla(0,0%,100%,0.05)] animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsla(0,0%,100%,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Top logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[hsla(0,0%,100%,0.2)] backdrop-blur-sm flex items-center justify-center">
              <Brain className="w-5 h-5 text-[hsl(0,0%,100%)]" />
            </div>
            <span className="text-xl font-bold text-[hsl(0,0%,100%)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              PromoSense AI
            </span>
          </div>

          {/* Center content */}
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsla(0,0%,100%,0.15)] backdrop-blur-sm text-[hsl(0,0%,100%)] text-xs font-medium mb-6">
              <Sparkles className="w-3 h-3" /> Enterprise AI Platform
            </div>
            <h2 className="text-4xl font-bold text-[hsl(0,0%,100%)] leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Intelligent Promotion<br />
              Decision Engine
            </h2>
            <p className="text-[hsla(0,0%,100%,0.75)] text-lg mb-8 leading-relaxed">
              Leverage machine learning to make fair, data-driven promotion decisions with confidence scoring.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: "Enterprise Security" },
                { icon: BarChart3, label: "Advanced Analytics" },
                { icon: Zap, label: "Real-time Predictions" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[hsla(0,0%,100%,0.1)] backdrop-blur-sm text-[hsl(0,0%,100%)] text-sm">
                  <f.icon className="w-4 h-4" />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex gap-8">
            {[
              { val: "50K+", label: "Predictions Made" },
              { val: "99.2%", label: "Accuracy Rate" },
              { val: "200+", label: "Enterprises" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[hsl(0,0%,100%)]">{s.val}</p>
                <p className="text-[hsla(0,0%,100%,0.6)] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PromoSense AI</span>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {isRegister ? "Create account" : "Welcome back"}
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            {isRegister ? "Start your free trial today" : "Sign in to your account to continue"}
          </p>

          <div className="space-y-4">
            {isRegister && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input placeholder="John Doe" className="rounded-xl h-11" />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="you@company.com" className="rounded-xl h-11 pl-10" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="rounded-xl h-11 pl-10 pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Link to="/dashboard">
              <Button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-medium mt-2 hover:opacity-90 transition-opacity group">
                {isRegister ? "Create Account" : "Sign In"}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-3 text-muted-foreground">or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="rounded-xl h-11">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="rounded-xl h-11">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-primary font-medium hover:underline"
            >
              {isRegister ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
