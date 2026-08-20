import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function ScopeBreadcrumbs({ items = [] }) {
  if (!items.length) return null;

  const trail = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-10 -mt-5 md:-mt-6 mb-2 md:mb-4"
    >
      <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <ol className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-2xl border border-[#E3ECF5] bg-white px-3 py-2.5 md:px-4 md:py-3 shadow-[0_8px_24px_-12px_rgba(41,60,125,0.35)]">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            const isHome = index === 0;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1 min-w-0">
                {index > 0 && (
                  <ChevronRightIcon
                    className="h-3.5 w-3.5 shrink-0 text-[#94A3B8]"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    className="truncate text-[13px] md:text-sm font-semibold text-[#293C7D]"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-1.5 py-0.5 text-[13px] md:text-sm font-medium text-[#479AD2] transition-colors hover:bg-[#F2F8FF] hover:text-[#293C7D] ${
                      isHome ? "pr-2" : ""
                    }`}
                  >
                    {isHome && (
                      <HomeIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    )}
                    <span className={isHome ? "sr-only sm:not-sr-only" : ""}>
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
