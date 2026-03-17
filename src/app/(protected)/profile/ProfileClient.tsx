"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LogoutButton from "@/components/auth/logout-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LockKeyhole, User, Mail, ShieldCheck, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileClientProps {
  user?: {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
    isTwoFactorEnabled?: boolean;
  };
}

const ProfileClient = ({ user }: ProfileClientProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-lg border border-midnight/5 bg-white rounded-3xl overflow-hidden px-2 sm:px-6 py-4">
          <CardHeader className="text-center pb-8 pt-6">
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-light tracking-tight text-midnight leading-tight">
                  <span className="font-ivy-presto italic font-normal">Uptown</span> Profile
                </h1>
                <p className="text-gray-400 text-sm font-light mt-1 uppercase tracking-widest">
                  Personal Dashboard
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {[
                { label: "ID", value: user?.id, icon: Fingerprint, mono: true },
                { label: "Name", value: user?.name, icon: User },
                { label: "Email", value: user?.email, icon: Mail },
                { label: "Role", value: user?.role, icon: ShieldCheck, badge: true, variant: user?.role === "ADMIN" ? "destructive" : "secondary" },
                { label: "2FA Status", value: user?.isTwoFactorEnabled ? "ENABLED" : "DISABLED", icon: LockKeyhole, badge: true, variant: user?.isTwoFactorEnabled ? "success" : "secondary" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100/50 transition-all hover:bg-slate-100/50">
                  <div className="flex items-center gap-x-3">
                    <item.icon className="h-4 w-4 text-midnight/70" />
                    <p className="text-sm font-light text-midnight">{item.label}</p>
                  </div>
                  {item.badge ? (
                    <Badge variant={item.variant as any} className="rounded-full px-3 py-0.5 font-medium text-[10px] tracking-wider uppercase">
                      {item.value}
                    </Badge>
                  ) : (
                    <p className={cn(
                      "text-sm font-light text-midnight/80",
                      item.mono && "font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-midnight/5 max-w-[120px] truncate"
                    )}>
                      {item.value || "Not Set"}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-4 px-2">
              <LogoutButton>
                <Button className="w-full bg-midnight hover:bg-midnight/90 text-white rounded-full py-6 text-base font-medium transition-all duration-300 shadow-md">
                  Sign Out
                </Button>
              </LogoutButton>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfileClient;
