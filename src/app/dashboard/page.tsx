"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const session = useSession();

  console.log(session);

  useEffect(() => {
    //if (session.data === null) redirect("login");
  }, [/*session.data*/]);

  return <p>Dshboard</p>;
}
