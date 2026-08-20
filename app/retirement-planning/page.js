import { redirect } from "next/navigation";

export const metadata = {
  robots: "noindex, follow",
};

export default function RetirementPlanningRedirect() {
  redirect("/retirement-planning-vadodara");
}
