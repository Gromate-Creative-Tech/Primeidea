"use client";

import { useState } from "react";
import {
  BanknotesIcon,
  ChartPieIcon,
  CheckIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const reviewGroups = [
  {
    title: "Portfolio structure",
    summary:
      "How the book is built before we talk products — mix, overlap, and concentration. We map what you already hold so recommendations sit on a clear structure, not a sales list.",
    items: ["Asset allocation", "Fund & holding overlap", "Sector & market-cap exposure"],
    Icon: ChartPieIcon,
  },
  {
    title: "Risk & performance",
    summary:
      "Consistency and downside — not headline returns. We look at how the book has behaved over time, where risk shows up, and whether the path matches how you actually live with volatility.",
    items: ["Rolling returns", "CAGR & XIRR", "Sharpe & Sortino", "Drawdown risk"],
    Icon: PresentationChartLineIcon,
  },
  {
    title: "Cost, tax & planning",
    summary:
      "Whether next steps are practical to implement. Cost, tax, cover, cash, and goals are checked together so a change is usable in real life — not only correct on paper.",
    items: ["Tax impact", "Exit load & expense ratio", "Insurance adequacy", "Emergency fund", "Goal alignment"],
    Icon: BanknotesIcon,
  },
];

export default function WhatWeReviewSection() {
  const [active, setActive] = useState(0);
  const current = reviewGroups[active];
  const CurrentIcon = current.Icon;

  return (
    <section
      id="what-we-review"
      aria-labelledby="what-we-review-heading"
      className="bg-[#F6FDFF] py-14 md:py-16 scroll-mt-24"
    >
      <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Review checkpoints
            </p>
            <h2
              id="what-we-review-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
            >
              What we <strong className="font-semibold">review</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
              Practical checkpoints in a research-led portfolio review — grouped the way
              the work is actually done.
            </p>

            <div className="flex flex-col gap-2" role="tablist" aria-label="Review groups">
              {reviewGroups.map((group, index) => {
                const isActive = index === active;
                const Icon = group.Icon;
                return (
                  <button
                    key={group.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-[#232D63] text-white"
                        : "bg-white border border-[#E3ECF5] text-[#293C7D] hover:border-[#293C7D]/40"
                    }`}
                  >
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isActive ? "bg-[#293C7D]" : "bg-[#F6FDFF]"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${isActive ? "text-[#FFC300]" : "text-[#293C7D]"}`}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="flex-1">
                      <span className={`block text-[11px] font-semibold tracking-[0.12em] uppercase ${isActive ? "!text-[#FFC300]" : "!text-[#479AD2]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`block text-sm font-bold ${isActive ? "!text-white" : "!text-[#293C7D]"}`}>
                        {group.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-[24px] border border-[#E3ECF5] bg-white p-6 md:p-8 min-h-[320px]">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#232D63]">
                    <CurrentIcon className="h-6 w-6 text-[#FFC300]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-1">
                      Step {String(active + 1).padStart(2, "0")} of 03
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-[#293C7D]">{current.title}</h3>
                  </div>
                </div>
              </div>
              <p className="text-base text-[#4D4D4D] leading-relaxed mb-6">{current.summary}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
                {current.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#E3ECF5] bg-[#F6FDFF] px-4 py-3 text-sm md:text-base font-medium text-[#293C7D]"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border border-[#E3ECF5]">
                      <CheckIcon className="h-3.5 w-3.5 text-[#293C7D]" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
