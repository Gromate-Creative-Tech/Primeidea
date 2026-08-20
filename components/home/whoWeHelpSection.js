import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  GlobeAsiaAustraliaIcon,
  HomeModernIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const featured = [
  {
    label: "High Net Worth Investors",
    description:
      "Research-led review across multi-product portfolios, including PMS and equity exposure.",
    Icon: ChartBarIcon,
  },
  {
    label: "Business Owners & Entrepreneurs",
    description:
      "Clarity on asset allocation, liquidity needs, and growth of business-linked wealth.",
    Icon: BuildingOffice2Icon,
  },
];

const segments = [
  {
    label: "Salaried Professionals",
    description:
      "Structured portfolio review for SIPs, mutual funds, insurance, and long-term goals.",
    Icon: BriefcaseIcon,
  },
  {
    label: "NRIs",
    description:
      "India-based investments with process-first review across Gujarat and India.",
    href: "/nri-investment-support-india",
    Icon: GlobeAsiaAustraliaIcon,
  },
  {
    label: "Retirees & Pre-Retirees",
    description:
      "Retirement corpus review, income planning, and risk-suitable allocation.",
    Icon: HomeModernIcon,
  },
  {
    label: "Young Professionals",
    description:
      "SIPs, goal planning, and disciplined investing habits from the start.",
    Icon: AcademicCapIcon,
  },
  {
    label: "Doctors & IT Professionals",
    description:
      "Structured portfolio review for busy professionals — without sales-only advice.",
    Icon: ComputerDesktopIcon,
  },
  {
    label: "Women Investors & Families",
    description:
      "Family wealth clarity across investments, insurance, and long-term priorities.",
    Icon: UserGroupIcon,
  },
];

const WhoWeHelpSection = () => {
  return (
    <section
      aria-labelledby="who-we-help-heading"
      className="bg-[#ffffff] py-14 md:py-20"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="max-w-[640px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Client segments
            </p>
            <h2
              id="who-we-help-heading"
              className="text-[28px] md:text-[36px] 2xl:text-[40px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Who We <strong className="font-semibold">Help</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              From first portfolios to multi-product family books — research-led clarity before you commit further capital.
            </p>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#293C7D] hover:text-[#232D63] transition-colors group whitespace-nowrap"
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] text-sm leading-none group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
              Book Portfolio Review
            </Link>
          </FadeUpOneByOneAnimation>
        </div>

        {/* Bento: 2 featured + 6 compact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 mb-4 md:mb-5">
          {featured.map(({ label, description, Icon }) => (
            <FadeUpOneByOneAnimation
              key={label}
              className="lg:col-span-6 group relative overflow-hidden rounded-[24px] bg-[#293C7D] p-6 md:p-8 min-h-[200px] flex flex-col justify-between"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#FFC300]/15 blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:bg-[#FFC300] transition-colors duration-300">
                <Icon
                  className="w-6 h-6 text-[#FFC300] group-hover:text-[#232D63] transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 leading-snug">
                  {label}
                </h3>
                <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-[420px]">
                  {description}
                </p>
              </div>
            </FadeUpOneByOneAnimation>
          ))}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0 mb-10 md:mb-12">
          {segments.map(({ label, description, Icon, href }) => {
            const card = (
              <FadeUpOneByOneAnimation className="group h-full rounded-[20px] border border-[#D6E4EE] bg-white p-5 md:p-6 transition-all duration-300 hover:border-[#293C7D]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] flex items-center justify-center group-hover:bg-[#293C7D] transition-colors duration-300">
                    <Icon
                      className="w-5 h-5 text-[#293C7D] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-[#293C7D] text-[15px] md:text-base font-bold leading-snug">
                    {label}
                  </h3>
                </div>
                <p className="text-[13px] md:text-sm font-medium text-[#5A5A5A] leading-relaxed">
                  {description}
                </p>
              </FadeUpOneByOneAnimation>
            );

            return (
              <li key={label}>
                {href ? (
                  <Link href={href} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ul>

        {/* Geography footer */}
        <FadeUpOneByOneAnimation className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] bg-[#232D63] px-6 py-5 md:px-8 md:py-6">
          <div>
            <p className="text-[#FFC300] text-xs font-semibold tracking-[0.14em] uppercase mb-1.5">
              Serving from Vadodara
            </p>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Investors across Gujarat and India — office visits and online consultation.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="bg-[#FFC300] text-[#232D63] text-sm md:text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:bg-white transition-colors shrink-0"
          >
            Book Portfolio Review
            <Image
              src="/images/icons/arrow-square-right-dark.png"
              width={18}
              height={18}
              alt=""
              className="ml-2"
            />
          </Link>
        </FadeUpOneByOneAnimation>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
