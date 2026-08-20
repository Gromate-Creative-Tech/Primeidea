import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import BannerSection from "@/components/home/bannerSection";
import ProofStrip from "@/components/home/proofStrip";
import WhoWeHelpSection from "@/components/home/whoWeHelpSection";
import ResearchProcessSection from "@/components/home/researchProcessSection";
import PortfolioReviewFrameworkSection from "@/components/home/portfolioReviewFrameworkSection";
import ProductUniverseSection from "@/components/home/productUniverseSection";
import PrivateWealthSection from "@/components/home/privateWealthSection";
import FamilyWealthOfficeSection from "@/components/home/familyWealthOfficeSection";
import LegacySuccessionSection from "@/components/home/legacySuccessionSection";
import FounderCredibilitySection from "@/components/home/founderCredibilitySection";
import WealthToolsSection from "@/components/home/wealthToolsSection";
import RegulatoryDisclosuresSection from "@/components/home/regulatoryDisclosuresSection";
import FaqsSection from "@/components/home/faqsSection";
import WealthCreationPreservation from "@/components/home/wealthCreationPreservationSection";
import InsightsSection from "@/components/insightsSection";
import JoinCommunity from "@/components/joinCommunity";
import { getPostList } from "@/lib/posts";
import AppInstall from "@/components/appInstall";

export const metadata = {
  title: 'Research-Led Wealth Management in Vadodara | PrimeIdea Ventures',
  description: 'PrimeIdea Ventures helps investors across Gujarat and India with portfolio review and research-led wealth management through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
  author: 'Partha Shah',
  robots: 'index, follow',
  canonical: 'https://primeidea.in/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://primeidea.in/',
    site_name: 'PrimeIdea Ventures',
    title: 'Research-Led Wealth Management in Vadodara | PrimeIdea Ventures',
    description: 'PrimeIdea Ventures helps investors across Gujarat and India with portfolio review and research-led wealth management through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.',
    // images: [
    //   {
    //     url: 'https://primeidea.in/images/home/banner.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'PrimeIdea Ventures Banner',
    //   }
    // ],
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://primeidea.in',
    languages: {
      'en-US': 'https://primeidea.in',
    },
  },
};

async function getData(params) {
  const allPosts = await getPostList();
  return { allPosts: allPosts };
}


export default async function Home() {
  const blogsListing = await getData();
  return (
    <div className="bg-[#F6FDFF]">
      <BannerSection 
       mainBannerImage={"/images/home/banner.png"}
       bannerRightImg={"/images/home/banner-right.png"}
       mainTitle={"Research-Led Wealth Management in Vadodara"}
       mainSubTitle={"PrimeIdea Ventures is a Vadodara-based research-led firm serving investors across Gujarat and India. Under Partha Shah, SEBI Registered Research Analyst (INH000017815), we support portfolio review and goal-based wealth management across mutual funds, equity, ETFs, PMS, fixed income, SIPs, NPS, insurance, retirement, tax, and succession planning."}
       mainLinkTitle={"Book Portfolio Review"}
       mainLink={"/contact-us"}
       usePrimaryAsLink={true}
       formTitle={"Book Portfolio Review"}
       secondaryLinkTitle={"View Research"}
       secondaryLink={"/research-process"}
      />

      <ProofStrip />

      <WhoWeHelpSection />

      <WealthCreationPreservation />

      <ResearchProcessSection />

      <PortfolioReviewFrameworkSection />

      <ProductUniverseSection />

      <PrivateWealthSection />

      <FamilyWealthOfficeSection />

      <LegacySuccessionSection />

      <FounderCredibilitySection />

      <WealthToolsSection />

      <AppInstall />

      <InsightsSection blogsListing={blogsListing.allPosts.nodes}/>

      <JoinCommunity />

      <ClientTestimonial />

      <FaqsSection />

      <RegulatoryDisclosuresSection />

      <Footer />
    </div>
  );
}
