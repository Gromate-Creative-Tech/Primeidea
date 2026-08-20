import Link from "next/link";

export default function ScopeSuccessionCrossLink({
  context = "family wealth and retirement planning",
}) {
  return (
    <section aria-label="Succession planning cross-link" className="bg-[#F6FDFF] py-10 md:py-12">
      <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <div className="rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="max-w-[720px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-2">
              Legacy, succession and estate
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#293C7D] mb-2">
              Partner-enabled coordination for {context}
            </p>
            <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
              Wills, trusts, nominations, and estate documentation are coordinated through
              qualified legal professionals. PrimeIdea does not act as a law firm and does not
              list partner names or pricing.
            </p>
          </div>
          <Link
            href="/legacy-succession-estate-planning-india"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors"
          >
            Succession planning
          </Link>
        </div>
      </div>
    </section>
  );
}
