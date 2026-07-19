import BannerSection from "@/components/legacy-inheritance/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import WorkSection from "@/components/researchWelathManagement/workSection";
import StepperSection from "@/components/steppers";
import graphqlRequest from "@/lib/graphqlRequest";
import TaxPlanning from "@/components/legacy-inheritance/taxPlanning";
import FaqsSection from "@/components/legacy-inheritance/faqsSection";

// export const metadata = {
//     title: 'Legacy or Inheritance Planning Services in India - PrimeIdea',
//     description: 'Plan your legacy with expert inheritance financial planning and tax services. Partner with a trusted inheritance planning company to secure your assets and ensure seamless business legacy planning.',
// }


export const metadata = {
    title: 'Legacy or Inheritance Planning Services in India - PrimeIdea',
    description: 'Plan your legacy with expert inheritance financial planning and tax services. Partner with a trusted inheritance planning company to secure your assets and ensure seamless business legacy planning.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/legacy-inheritance-planning/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://primeidea.in/legacy-inheritance-planning/',
      site_name: 'PrimeIdea Ventures',
      title: 'Legacy or Inheritance Planning Services in India - PrimeIdea',
      description: 'Plan your legacy with expert inheritance financial planning and tax services. Partner with a trusted inheritance planning company to secure your assets and ensure seamless business legacy planning.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://primeidea.in/legacy-inheritance-planning/',
      languages: {
        'en-US': 'https://primeidea.in/legacy-inheritance-planning/',
      },
    },
  };

async function getData(categorySlug) {
  const query = {
      query: `query getPostListByCategory($categorySlug: String!) {
          posts(where: {categoryName: $categorySlug, orderby: {field: DATE, order: DESC}}) {
              nodes {
                  date
                  slug
                  title
                  excerpt(format: RENDERED)
                  featuredImage {
                      node {
                          uri
                          sourceUrl
                          mediaDetails {
                              file
                              sizes {
                                  sourceUrl
                                  width
                                  height
                              }
                          }
                      }
                  }
                  categories {
                      nodes {
                          name
                          slug
                      }
                  }
                  author {
                      node {
                          avatar {
                              url
                          }
                          name
                      }
                  }
              }
              pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
              }
          }
      }`,
      variables: { categorySlug } // Pass categorySlug as a variable
  };

  const data = await graphqlRequest(query);
  return data.data; // Return the post data from the response
}

export default async function LegacyInheritancePlanning() { 
    const categorySlug= 'Legacy & Inheritance';
    const posts = await getData(categorySlug);
    const steps = [
        {
          id: '01',
          title: "Assess Your Estate",
          content:
            "Assess your financial situation to understand what needs to be protected and passed on.",
        },
        {
          id: '02',
          title: "Define Your Goals and Wishes",
          content:
            "Define your legacy goals, including asset distribution, beneficiaries, and charitable wishes.",
        },
        {
          id: '03',
          title: "Implement Legal and Financial Instruments",
          content:
            "Set up legal documents and tax-efficient strategies to protect your assets, document your wishes, and minimize taxes.",
        },
        {
          id: '04',
          title: "Review and Update Regularly",
          content: "Regularly review and update your legacy plan to reflect changes in your life",
        },
      ];

    return (
        <div className="bg-[#F6FDFF]">

            {/* <BannerSection 
             mainBannerImage={"/images/legacy-inheritance-planning/banner.png"}
             mainTitle={"Nurturing Your Legacy, Securing Future Generations"}
             mainSubTitle={"Plan today to leave behind a lasting heritage for those you love."}
             mainLinkTitle={"Start Your Retirement Plan"}
             mainLink={""}
             subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
             subSectionTitle1={"Trusted By Clients"}
             subSectionSubTitle1={"80+"}
             subSectionTitle2={"Years of expertise"}
             subSectionSubTitle2={"12+"}
             subSectionTitle3={"Client Satisfaction"}
             subSectionSubTitle3={"92+"}
            /> */}
            <BannerSection />

            <TaxPlanning />

            <StepperSection title={'Steps for Legacy & Inheritance Planning'} steps={steps}/>

            <InsightsSection blogsListing={posts.posts.nodes}/>

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 