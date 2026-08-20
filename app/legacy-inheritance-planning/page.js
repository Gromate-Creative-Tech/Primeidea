import { redirect } from "next/navigation";

export const metadata = {
  robots: "noindex, follow",
};

export default function LegacyInheritancePlanningRedirect() {
  redirect("/legacy-succession-estate-planning-india");
}
