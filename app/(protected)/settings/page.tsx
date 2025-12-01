"use client";

import LogoutButton from "@/components/auth/logout-button";
import UserCurrentRole from "@/hooks/user-current-role";

const SettingPage = () => {
  const user = UserCurrentRole();

  return (
    <>
      {JSON.stringify(user)}
      <LogoutButton>Logout</LogoutButton>
    </>
  );
};

export default SettingPage;
