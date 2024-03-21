"use client";
import Tabs from "@/components/tabs/tabs";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import DashboardSCP from "@/components/dashboard/scp";

export default function Dashboard() {
  const session = useSession();
  console.log(session);
  const [currentTab, setCurrentTab] = useState("SCP");

  const handleOnClick = (data: any) => {
    console.log(data);
    setCurrentTab(data);
  };

  const handleOnSubmitSCP = (data: object) => {
    console.log(data);
  };

  useEffect(
    () => {
      //if (session.data === null) redirect("login");
    },
    [
      /*session.data*/
    ]
  );

  const TABS: any = {
    SCP: <DashboardSCP onSubmit={(e: object) => handleOnSubmitSCP(e)} />,
  };

  return (
    <div>
      <Tabs
        options={["SCP", "Category", "Enemies", "Interviews"]}
        onClick={(data) => handleOnClick(data)}
      />
      {TABS[currentTab]}
    </div>
  );
}
