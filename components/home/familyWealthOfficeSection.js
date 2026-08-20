import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  GlobeAsiaAustraliaIcon,
  DocumentTextIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const offerings = [
  {
    title: "Business Family Wealth Planning",
    description:
      "Coordinate family investment priorities across business owners and next-generation stakeholders.",
    Icon: BuildingOffice2Icon,
  },
  {
    title: "Multi-Generational Portfolio Review",
    description:
      "Review family asset allocation, overlaps, and risk across generations — not product pushing.",
    Icon: UsersIcon,
  },
  {
    title: "Succession & Estate Coordination",
    description:
      "Partner-enabled will, trust, and succession planning support with qualified legal professionals.",
    Icon: DocumentTextIcon,
  },
  {
    title: "Family Insurance & Nominations",
    description:
      "Insurance portfolio review, nomination mapping, and MWPA planning where relevant.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "NRI Family Coordination",
    description:
      "Support for NRI family members coordinating India-based investments and estate documentation.",
    Icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Next-Gen Financial Education",
    description:
      "Help the next generation understand process, risk, and long-term family wealth discipline.",
    Icon: AcademicCapIcon,
  },
  {
    title: "CA / Legal Coordination",
    description:
      "Work alongside your CA and legal professionals for documentation and tax alignment.",
    Icon: ScaleIcon,
  },
  {
    title: "Family Investment Clarity",
    description:
      "A clearer view of holdings, goals, and responsibilities across the family wealth structure.",
    Icon: ClipboardDocumentCheckIcon,
  },
];

const FamilyWealthOfficeSection = () => {
  return (
    <section
      aria-labelledby="family-wealth-office-heading"
      className="bg-[#232D63] py-14 md:py-20 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="max-w-[720px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              For business families across Gujarat & India
            </p>
            <h2
              id="family-wealth-office-heading"
              className="text-[28px] md:text-[36px] 2xl:text-[40px] font-light text-white leading-[120%] mb-4"
            >
              Family Wealth <strong className="font-semibold">Office</strong>
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Family investment clarity, multi-generational portfolio review, and partner-enabled succession coordination — for business families who want process-first support.
            </p>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/family-wealth-office-gujarat-india"
              className="bg-[#FFC300] text-[#232D63] text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:bg-white transition-colors"
            >
              Book Family Consultation
              <Image
                src="/images/icons/arrow-square-right-dark.png"
                width={21}
                height={21}
                alt=""
                className="ml-2"
              />
            </Link>
            <Link
              href="/legacy-succession-estate-planning-india"
              className="border border-white/30 text-white text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
            >
              Succession Planning
            </Link>
          </FadeUpOneByOneAnimation>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0 mb-10">
          {offerings.map(({ title, description, Icon }) => (
            <li key={title}>
              <FadeUpOneByOneAnimation className="group h-full rounded-[20px] border border-white/15 bg-[#293C7D]/45 p-5 transition-colors duration-300 hover:border-[#FFC300]/40 hover:bg-[#293C7D]/70">
                <div className="w-11 h-11 mb-4 rounded-xl bg-[#232D63] border border-white/10 flex items-center justify-center group-hover:bg-[#FFC300] group-hover:border-[#FFC300] transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-[#FFC300] group-hover:text-[#232D63] transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white text-base font-bold mb-2 leading-snug min-h-[2.5rem]">
                  {title}
                </h3>
                <p className="text-sm font-medium text-white/70 leading-relaxed">
                  {description}
                </p>
              </FadeUpOneByOneAnimation>
            </li>
          ))}
        </ul>

        <FadeUpOneByOneAnimation className="rounded-[20px] border border-white/15 bg-[#293C7D]/35 p-5 md:p-6">
          <p className="text-[#FFC300] text-xs font-semibold tracking-[0.12em] uppercase mb-2">
            Important disclaimer
          </p>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Legal drafting, registration, and legal opinions must be handled by qualified legal professionals. PrimeIdea provides partner-enabled succession and estate planning coordination — not independent legal practice. Partner name and pricing are not displayed on this website.
          </p>
        </FadeUpOneByOneAnimation>
      </div>
    </section>
  );
};

export default FamilyWealthOfficeSection;
