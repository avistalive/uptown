"use client";

import { setting } from "@/actions/settings";
import LogoutButton from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useTransition } from "react";

const SettingPage = () => {
  const { update } = useSession();
  const [isPending, StartTransition] = useTransition();

  const onClick = () => {
    StartTransition(() => {
      setting({
        name: "New Nsaawdaame!",
      })
      .then(()=>{
        update()
      })
    });
  };

  return (
    <Card className="w-[600px]">
     <LogoutButton>
      Logout
     </LogoutButton>
    </Card>
  );
};

export default SettingPage;
