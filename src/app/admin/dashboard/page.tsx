
import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { SearchUsers } from "./_search-users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_actions";
import { CreateOrganization } from "@clerk/clerk-react";
 
export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin")) {
    redirect("/");
  } 
  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the 'admin' role.</p>
    </>
  );
}