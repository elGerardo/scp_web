"use client";
import Tabs from "@/components/tabs/tabs";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardSCP from "@/components/dashboard/scp";
import Category from "@/components/dashboard/category";
import Interview from "@/components/dashboard/interview";
import SCPService from "@/services/SCPService";
import CategoryService from "@/services/CategoryService";
import Enemies from "@/components/dashboard/enemies";
import Spinner from "@/components/spinner";
import InterviewService from "@/services/InterviewService";
import SCPEnemiesService from "@/services/SCPEnemiesService";

export default function Dashboard() {
  const session: any = useSession();

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isRequesting, setIsRequesting] = useState(false);
  const [categoryCatalog, setCategoryCatalog] = useState([
    { label: "Select a Category...", value: null },
  ]);
  const [scpCatalog, setScpCatalog] = useState([
    { label: "Select SCP Id...", value: null },
  ]);
  const [currentTab, setCurrentTab] = useState("SCP");

  const handleOnClick = (data: any) => {
    setCurrentTab(data);
  };

  const handleOnSubmitSCP = async (data: object) => {
    setIsRequesting(true);
    const response = await SCPService.store(
      session.data.user.token,
      data
    );
    setIsRequesting(false);

    if (response.status === 201) return true;

    return false;
  };

  const handleOnSubmitCategory = async (data: object) => {
    setIsRequesting(true);
    const response = await CategoryService.store(
      session.data.user.token,
      data
    );
    setIsRequesting(false);

    if (response.status === 201) return true;

    return false;
  };

  const handleOnSubmitInterview = async (data: object) => {
    setIsRequesting(true);
    const response = await InterviewService.store(
      session.data.user.token,
      data
    );
    setIsRequesting(false);

    if (response.status === 201) return true;

    return false;
  };

  const handleOnSubmitEnemies = async (data: any) => {
    setIsRequesting(true);
    let response;
    if (data.submitType === "attach") {
      response = await SCPEnemiesService.store(
        session.data.user.token,
        data.scpId,
        data.scpEnemyId
      );
    } else {
      response = await SCPEnemiesService.destroy(
        session.data.user.token,
        data.scpId,
        data.scpEnemyId
      );
    }
    setIsRequesting(false);

    if (response.status === 201) return true;

    return false;
  };

  useEffect(
    () => {
      if (session.data === null) redirect("login");
      async function init() {
        if(session.data == null) return
        if(session.data.user == null) return
        if(session.data.user == null) return
        const token = session.data.user.token;
        const categoryResponse = await CategoryService.getWithIds(token);
        const categoryData = categoryResponse.data;
        categoryData.unshift({ label: "Select a Category...", value: null });

        const scpResponse = await SCPService.getWithIds(token);
        const scpData = scpResponse.data;
        scpData.unshift({ label: "Select SCP Id...", value: null });

        setCategoryCatalog(categoryData);
        setScpCatalog(scpData);
        setIsLoadingPage(false);
      }
      init();
    },
    [
      session.data
    ]
  );

  const TABS: any = {
    SCP: (
      <DashboardSCP
        isRequesting={isRequesting}
        categoryCatalog={categoryCatalog}
        onSubmit={(e: object) => handleOnSubmitSCP(e)}
      />
    ),
    Category: (
      <Category
        isRequesting={isRequesting}
        onSubmit={(e: object) => handleOnSubmitCategory(e)}
      />
    ),
    Interviews: (
      <Interview
        isRequesting={isRequesting}
        scpCatalog={scpCatalog}
        onSubmit={(e: object) => handleOnSubmitInterview(e)}
      />
    ),
    Enemies: (
      <Enemies
        isRequesting={isRequesting}
        scpCatalog={scpCatalog}
        onSubmit={(e: object) => handleOnSubmitEnemies(e)}
      />
    ),
  };

  return !isLoadingPage ? (
    <div className="container">
      <Tabs
        className="mt-5"
        options={["SCP", "Category", "Enemies", "Interviews"]}
        onClick={(data) => handleOnClick(data)}
      />
      {TABS[currentTab]}
    </div>
  ) : (
    <div className="w-full flex justify-center mt-5">
      <Spinner />
    </div>
  );
}
