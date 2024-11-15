import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";

const ModernizeArticle = () => {
  return (
    <Layout footer={5}>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-70 rpt-150 pb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center image wow fadeInUp delay-0-2s">
            <img
              src="assets/images/prevu/ilsos_modernize_prevu.jpg"
              alt="Duly Noded graphic"
            />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area mt-30 pb-50 rel z-1">
        <div className="container container-1210">
          <div className="banner-inner">
            <div className="row  justify-content-center">
              <div className="col-xl-8">
                <ul className="blog-meta mb-15 wow fadeInUp delay-0-2s">
                  <li>
                    <i className="fal fa-user-alt" />
                    <a href="#">University</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">October 9, 2023</a>
                  </li>
                  {/*<li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>*/}
                </ul>
                <h1 className="university-title wow fadeInUp delay-0-3s">
                  Illinois
                </h1>
                <h2>
                   Secretary of State Modernization Proposal Summary
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Details Content Area End */}

      {/* University Article Kickoff start */}
      <section className="university-kickoff-area pb-60 rpb-70 rel z-1">
        <div className="container container-1210">

          <div className="row justify-content-center align-items-center">
            <div className="section-title col-lg-8 mb-40 wow fadeInUp delay-0-2s">
              <h2>
                  Illinois Secretary of State includes 21 official departments that are in need of
                  modernization to play a vital role in delivering important services to citizens and businesses.
              </h2>
              <div className="text mt-30">
                <h4>
                  "We will work hard to eliminate the 'time tax' that too many of you are paying every 
                  day just to access simple government services." -- Alexi Giannoulias
                </h4>
                <p>
                  As Chief Technical Officer of Illinois Secretary of State’s Office, Michael Logic™ Davis will come 
                  with a dedicated team to execute our exclusive 
                  <a className="lil-blu-link" href="ai-service-details" target="_blank"> Azure Whisperer </a> methodologies for modernization of 
                  Illinois’ public service digital infrastructure.  The proposed innovation will be best be executed 
                  by the following:
                </p>
              </div>
            </div>
            
            <div className="why-choose-item col-lg-8 wow fadeInUp delay-0-2s">
              <div className="why-choose-header">
                <i className="far fa-chevron-right" />
                <h5>
                  <a className="lil-blu-link" href="https://michaellogic.com/story" target="_blank">Michael Logic™ Davis</a>
                </h5>
              </div>
              <p>
                (CTO / Principal Engineer / Systems Administrator) Not only can he build enterprise 
                AI-powered systems, Michael’s deep knowledge and two decades of experience with 
                logistics tech & game development gives this team great vision for prescribing a 
                broad bandwidth of technical solutions fit for the future of Illinois.
              </p>
            </div>

            <div className="why-choose-item col-lg-8 wow fadeInUp delay-0-2s">
              <div className="why-choose-header">
                <i className="far fa-chevron-right" />
               <h5>
                  <a className="lil-blu-link" href="https://www.linkedin.com/in/clark-alexander-266232aa/" target="_blank">Dr. Clark Alexander</a>
                </h5>
              </div>
              <p>
                (ML Engineer / R & D) The “Number Wizard” from Northwestern University ensures calculations in our foundation 
                data science and machine learning adhere to high standards of accuracy and validation.  
                Working with Clark, Michael guarantees our systems will go beyond satisfactory performance 
                and provide valuable public service “data stories” that explain solutions to problems 
                we did not yet know existed.
              </p>
            </div>

            <div className="why-choose-item col-lg-8 wow fadeInUp delay-0-2s">
              <div className="why-choose-header">
                <i className="far fa-chevron-right" />
                <h5>
                  <a className="lil-blu-link" href="https://www.linkedin.com/in/calvinnobles/" target="_blank">Dr. Calvin Nobles</a>
                </h5>
              </div>
              <p>
                (Cybersecurity / Digital Forensics / <a className="lil-blu-link" href="https://www.belfercenter.org/person/calvin-nobles" target="_blank"> Harvard Belfar Fellow</a>) 
                As a recognized practitioner in human factors engineering and cybersecurity operations with 
                25 years of experience, Calvin advises senior executives on cyber policies, and driving 
                enterprise-level solutions.  Dr. Nobles works with Michael to deliver cyber solutions 
                that impact national efforts; noted for driving change to achieve cybersecurity objectives 
                that adhere to Department of Defense Cyber Workforce Framework.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* How We Works end */}


      {/* Myths about NodeJS Area start */}
      <section className="university-node-area py-60 rel z-1">
        <div className="container container-1210">
          <div className="justify-content-between align-items-center">
            <div className="col-lg-8 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">How will Michael Logic™ use AI to modernize ILSOS?</span>
                  <h3>ILSOS artificial intelligence will provide the following:</h3>
                </div>
                <p>
                  ILSOS artificial intelligence will provide the following:  
                </p>

                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>
                      Drastically decrease time & cost of converting old COBOL-based 
                      systems to latest cloud architecture.
                    </h5>
                  </div>
                  <span>
                    <i>( Save time & cost )</i>  
                  </span>
                </div>

                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>
                      Voice-interfacing public service bots provide a verbose option to 
                      thoroughly answer important questions Illinois citizens will have 
                      about operating new services 24/7 (Ex: <a className="lil-blu-link" href="https://www.ilsos.gov/skip_the_line/home.html" target="_blank">Skip-the-Line Program</a>). 
                    </h5>
                  </div>
                  <span>
                    <i>( “Humanize” the experience )</i>  
                  </span>
                </div>

                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>
                      Super-human fraud detection for our senior citizens against AI chat bot.
                    </h5>
                  </div>
                  <span>
                    <i>( Protect our elders )</i>  
                  </span>
                </div>

                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>
                      Building with Accessibility in Mind: push the presuppose of Accessibility with
                      handicapped and impaired citizens.
                    </h5>
                  </div>
                  <span>
                    <i>( Model state for Accessibility )</i>  
                  </span>
                </div>


                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>
                      Automate the identification, planning and articulation of new revenue 
                      streams made possible by  ILSOS PS vBeta. 
                    </h5>
                  </div>
                  <span>
                    <i>( New revenue )</i>  
                  </span>
                  <p>
                    Immediately, we identify a lucrative opportunity for Illinois in providing 
                    <a className="lil-blu-link" href="https://www.weforum.org/whitepapers/regulatory-technology-for-the-21st-century/" target="_blank"> RegTech (Regulatory Technology) </a> 
                    solutions to maintain the highest level of standards compliance of any United States.  
                    All these new ILSOS service delivery methods will need to be audited ... on schedule.
                  </p>
                  <p>
                    Dr. Clark Alexander and Michael Logic™ Davis are co-founders of the newly formed Enerjuice™; 
                    a clean energy tech company that invented patent-pending systems and methods for a peculiar 
                    zero carbon emission sustainable energy source.
                  </p>
                  <p>
                    In 2015, Michael Logic™ Davis completed a year long survey and observation  of law 
                    firm marketing practices. His interesting study birthed an evolved way for Illinois 
                    citizens to seek legal assistance. Optimizing the matching of legal experts with 
                    citizens in immediate need can improve quality of life for both client and esquire. 
                    Michael calls it “<a className="lil-blu-link" href="https://mlams01.blob.core.windows.net/whitepapers/LoopLegendsOfficial.pdf" target="_blank">Loop Legends</a>”
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Myths about NodeJS end */}

      {/* Paperclip Architecture start */}
      <div className="university-paperclip-area pt-120 pb-90 rpt-100 rpb-70">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
            <div className="section-title style-two text-center">
              <h2>
                Modernization Budget
              </h2>
            </div>
          </div>
        </div>

        <div className="container container-1210">
          <div className="row justify-content-center align-items-center">
            <div className="justify-content-center align-items-center col-lg-5 wow fadeInLeft delay-0-2s">
              <p>
                Michael Logic™ Davis has a strong track record of creating enterprise performing technology 
                at a fraction of industry standard cost.  Illinois can trust he can stretch a development 
                budget much further than most.  In 2021, Illinois logistics tech companies received over 
                $1.38 billion in venture capital.  Without receiving any funding, the following year Michael 
                and <a className="lil-blu-link" href="dashping" target="_blank"> DashPing </a> still managed to 
                launch one of the most cutting edge enterprise automation tools for trucking companies & factoring companies.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="container-fluid">
                <div className="video-part style-two wow fadeInUp delay-0-2s">
                  <img src="assets/images/video/tms_war_cvr.jpg" alt="TMS War Video" />
                  <a
                    href="https://www.youtube.com/watch?v=25_jh-M1Y74"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Paperclip Architecture end */}

      {/* About Us Area start */}
      <section className="about-area-five py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-five-images mb-50 lmt-50 wow fadeInLeft delay-0-2s">
                <img
                    src="assets/images/logic/pushinkeys_at_iit_cvr_web.jpg"
                    alt="PushinKeys: Talent Pipeline Challenge cover"
                  />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-five">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Pushin Keys™: For The Talent Pipeline Challenge</span>
                  <h2>

                  </h2>
                </div>
                <p>
                  Michael is a big advocate for hardworking Americans without advanced 
                  nor 4-year college degrees. Great opportunity lies within various tech
                  sectors. So he made a commitment to work with anyone who will help him reach
                  The White House to answer the call-to-action for <b>America's 
                  Talent Pipeline Challenge</b>.
                </p>
                <div className="mt-30">
                  <a href="https://mlams01.blob.core.windows.net/whitepapers/pushinkeys_workforce_program_no_ask.pdf" 
                     className="theme-btn style-two"
                     target="_blank">
                    View PDF <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
 


    </Layout>
  );
};



export const getStaticProps = async () => {

  return {
    props: {
      pTitle: "Imagine: Michael Logic™ as CTO, Illinois Secretary of State",
      openGraphData: [
        {
          property: "og:image",
          content:
            "https://michaellogic.com/assets/images/prevu/ilsos_modernize_prevu.jpg",
          key: "ogimage",
        },
        {
          property: "og:image:width",
          content: "1200",
          key: "ogimagewidth",
        },
        {
          property: "og:image:height",
          content: "600",
          key: "ogimageheight",
        },
        {
          property: "og:url",
          content: `https://michaellogic.com/modernize-illinois`,
          key: "ogurl",
        },
        {
          property: "og:title",
          content: "Imagine: Michael Logic™ as CTO, Illinois Secretary of State",
          key: "ogtitle",
        },
        {
          property: "og:description",
          content: "Illinois Secretary of State includes 21 official departments that are in need of modernization to play a vital role in delivering important services to citizens and businesses.",
          key: "ogdesc",
        },
        {
          property: "og:type",
          content: "website",
          key: "website",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          key: "tcard",
        },
        {
          property: "twitter:creator",
          content: "@mikelogic",
          key: "tcreator",
        },
        {
          property: "twitter:title",
          content: "Imagine: Michael Logic™ as CTO, Illinois Secretary of State",
          key: "ttitle",
        },
        {
          property: "twitter:description",
          content: "Illinois Secretary of State includes 21 official departments that are in need of modernization to play a vital role in delivering important services to citizens and businesses.",
          key: "tdescription",
        },
        {
          property: "twitter:image",
          content: "https://michaellogic.com/assets/images/prevu/ilsos_modernize_prevu.jpg",
          key: "timg",
        },
      ],
    },
  };
};



export default ModernizeArticle;
