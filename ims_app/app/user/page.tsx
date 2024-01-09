'use client'
import { LoadingComponent, UserMain } from "@/root/components";
import { useAuthorizedUser } from "@/root/hooks";
export default function UserHome() {
  const isAuthorized = useAuthorizedUser();
    if (!isAuthorized)
        return <LoadingComponent/>
  return (
    <div>
        <UserMain/>
    </div>
  );
}