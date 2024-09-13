import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import WorkSection from "@/components/researchWelathManagement/workSection";
import StepperSection from "@/components/steppers";
import TaxPlanning from "@/components/tax-planning/taxPlanning";

const LegacyInheritancePlanning = () => { 
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <TaxPlanning />

            <StepperSection />

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 export default LegacyInheritancePlanning;