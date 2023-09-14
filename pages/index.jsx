import Home5Slider from "@/src/components/sliders/Home5Slider";
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const index = () => {
  return (
    <Layout footer={5} header={5}>
      <Home5Slider />
      {/* Slider Section End */}

      {/* Client Logo Two start */}
      <div className="client-logo-area pt-120 pb-90 rpt-100 rpb-70">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
            <div className="section-title style-two text-center mb-70">
              <span className="sub-title mb-15">Michael has receipts!</span>
              <h2>
                Over 2 Decades of Technical Magic Performed
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="client-logo-wrap">
            <Link
              className="client-logo-item wow fadeInUp delay-0-2s"
              href="ai-service-details"
            >
              <img className="rounded-circle"
                src="assets/images/client-logos/abilify_logo_sm.jpg"
                alt="Abilify"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-3s"
              href="ai-service-details"
            >
              <img className="rounded-circle"
                src="assets/images/client-logos/beamglobal_logo_sm.jpg"
                alt="Beam Global"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-4s"
              href="ai-service-details"
            >
              <img className="rounded-circle"
                src="assets/images/client-logos/buona_logo_sm.jpg"
                alt="Buona Beef"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-5s"
              href="ai-service-details"
            >
              <img className="rounded-circle"
                src="assets/images/client-logos/shaker_logo_sm.jpg"
                alt="Shaker Advertising"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-6s"
              href="ai-service-details"
            >
              <img  className="rounded-circle"
                src="assets/images/client-logos/davidtutera_logo_sm.jpg"
                alt="David Tutera"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-7s"
              href="ai-service-details"
            >
              <img  className="rounded-circle"
                src="assets/images/client-logos/infiniti_logo_sm.jpg"
                alt="Infiniti"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-7s"
              href="ai-service-details"
            >
              <img  className="rounded-circle"
                src="assets/images/client-logos/mcdonalds_logo_sm.jpg"
                alt="McDonalds"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-7s"
              href="ai-service-details"
            >
              <img  className="rounded-circle"
                src="assets/images/client-logos/planters_logo_sm.jpg"
                alt="Planters"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-7s"
              href="ai-service-details"
            >
              <img  className="rounded-circle"
                src="assets/images/client-logos/skinnygirl_logo_sm.jpg"
                alt="SkinnyGirl"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-7s"
              href="ai-service-details"
            >
              <img  className="rounded-circle"
                src="assets/images/client-logos/wellsfargo_logo_sm.jpg"
                alt="Wells Fargo"
              />
            </Link>
          </div>
        </div>
        <div className="container-fluid">
          <Swiper
            {...sliderProps.galleryFiveActive}
            className="gallery-five-active"
          >
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/wellsfargo_screen_prevu.jpg"
                    alt="Wells Fargo project"
                  />
                </div>
                <div className="content">
                  <h4>
                    Wells Fargo™
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/mcdonalds_screen_prevu.jpg"
                    alt="McDonalds"
                  />
                </div>
                <div className="content">
                  <h4>
                    McDonald's™
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/skinnygirl_screen_prevu.jpg"
                    alt="McDonalds"
                  />
                </div>
                <div className="content">
                  <h4>
                    SkinnyGirl Cocktails™
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/infiniti_screen_prevu.jpg"
                    alt="McDonalds"
                  />
                </div>
                <div className="content">
                  <h4>
                    Infiniti™
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/beamglobal_screen_prevu.jpg"
                    alt="McDonalds"
                  />
                </div>
                <div className="content">
                  <h4>
                    Beam™ Global
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            
          </Swiper>
          {/*<div className="work-gallery-controls">
            <button className="work-gallery-prev slick-arrow">
              <i className="far fa-chevron-left" />
            </button>
            <div className="work-gallery-dots slick-dots" />
            <button className="work-gallery-next slick-arrow">
              <i className="far fa-chevron-right" />
            </button>
          </div>*/}
        </div>
      </div>
      {/* Client Logo Two end */}

      {/* What We Provide start */}
      <section className="what-we-provide-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
              <div className="section-title style-two text-center mb-70">
                <span className="sub-title mb-15">Do you dream of finding</span>
                <h2>
                  Senior Level <i>Engineering</i> Coupled with Visionary <i>Leadership</i>?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="we-provide-item wow fadeInUp delay-0-2s">
                <span className="serial-number">CODE</span>
                <h3>
                  <Link legacyBehavior href="/ai-service-details">
                    <a>
                      Full Stack <span>Engineering</span>
                    </a>
                  </Link>
                </h3>
                <p>
                  Do you need a miracle worker to assist in launching/modifying an enterprise 
                  system on a deadline that would terrify normal employees? 
                </p>
                <div className="tags">
                  <Link legacyBehavior href="/ai-service-details">
                    Python
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Java
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Javascript
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    C#
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Go
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Ruby
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Node.js
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Django
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Spring Boot
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    React.js/Next.js
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Angular
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="we-provide-item wow fadeInUp delay-0-4s">
                <span className="serial-number">DATA</span>
                <h3>
                  <Link legacyBehavior href="/ai-service-details">
                    <a>
                      Data Science &amp; <span>Architecture</span>
                    </a>
                  </Link>
                </h3>
                <p>
                  Do you need flat data to tell an elaborate 3D story that 
                  can be used to increase your bottom line revenue and success rate?
                </p>
                <div className="tags">
                  <Link legacyBehavior href="/ai-service-details">
                    SQL / NoSQL
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Key Pair Solutions
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Pandas
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Power BI
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Jupyter
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Hadoop
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Spark
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="we-provide-item wow fadeInUp delay-0-6s">
                <span className="serial-number">AI</span>
                <h3>
                  <Link legacyBehavior href="/ai-service-details">
                    <a>
                      AI &amp; Machine <span>Learning</span>
                    </a>
                  </Link>
                </h3>
                <p>
                  Are you just using "AI" in your marketing?
                  Or do you need a visionary with the technical ability to customize an AI solution formulated specifically for your business goals?
                </p>
                <div className="tags">
                  <Link legacyBehavior href="/ai-service-details">
                    scikit-learn
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    NumPy
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    OpenAI
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    TensorFlow
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    PyTorch
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Natural Language Kit
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Azure AI Studio
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="we-provide-item wow fadeInUp delay-0-6s">
                <span className="serial-number">DevOps</span>
                <h3>
                  <Link legacyBehavior href="/ai-service-details">
                    <a>
                      Developer Operations &amp; <span>CI/CD</span>
                    </a>
                  </Link>
                </h3>
                <p>
                  Do you have a dream of coordinating your tech team to operate
                  in impressive harmony like a well tuned orchestra?
                </p>
                <div className="tags">
                  <Link legacyBehavior href="/ai-service-details">
                    Deployment Automation
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Continuous Integration
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Continous Delivery
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Infrastructure as Code (IaC)
                  </Link>
                  <Link legacyBehavior href="/ai-service-details">
                    Azure DevOps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Provide end */}

      {/* About Us Area start */}
      <section className="about-area-five py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-five-images mb-40 lmt-50 wow fadeInLeft delay-0-2s">
                <img
                    src="assets/images/logic/incompetentstaff_web.jpg"
                    alt="PushinKeys: Talent Pipeline Challenge cover"
                  />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-five">
                <div className="section-title mb-50 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Talent Poster Child</span>
                  <h2>
                      Is the target workforce unaware of America's 
                      Talent Pipeline Challenge?
                  </h2>
                </div>
                <p>
                  <b>"Pushin Keys"</b>: <i>an urban phrase that creates a double entrendre 
                  when applied to software engineering; Michael uses it to attract more youth 
                  to the tech lifestyle.</i>
                </p>
                <div className="authors-text mt-45 pt-50">
                  <img src="assets/images/about/author1.jpg" alt="Author" />
                  <img src="assets/images/about/author2.jpg" alt="Author" />
                  <img src="assets/images/about/author3.jpg" alt="Author" />
                  <img src="assets/images/about/author4.jpg" alt="Author" />
                  <img src="assets/images/about/author5.jpg" alt="Author" />
                  <span className="text">
                    Are you looking for help to transition into a tech career?
                  </span>
                </div>
                <div className="mt-30">
                  <a href="/story" className="theme-btn style-two">
                    Learn More <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}

      {/* Counter Five start */}
      <section className="counter-section-five pt-60 pb-80 rpb-50">
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three style-two counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="flaticon-software-development" />
                <Counter end={20} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three style-two counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="flaticon-development" />
                <Counter end={3.5} />
                <span className="counter-title">Million Lines of Code Published</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three style-two counter-text-wrap wow fadeInRight delay-0-6s">
                <i className="flaticon-branding" />
                <Counter end={26} />
                <span className="counter-title">Patent Claim Contributions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Area start */}
      <div className="video-area-five rel z-1">
        <div className="container container-1290">
          <div className="video-part style-three wow fadeInUp delay-0-2s row justify-content-center">
            <img src="assets/images/video/push_button_theory_cvr.jpg" alt="Michael Logic's Push Button Theory" />
            <a
              href="https://www.youtube.com/watch?v=JPAvlNEvtGo"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}

      {/* Work With Us Area start */}
      <section className="work-with-us-area pt-60 rel z-1">
        <div className="container container-1290">
          <div className="row no-gap">
            <div className="col-xl-5 align-self-center">
              <div className="work-with-image wow fadeInUp delay-0-2s">
                <img src="assets/images/about/azure_whisperer_ml01_web.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInUp delay-0-4s">
              <div
                className="work-with-content"
                style={{
                  backgroundImage:
                    "url(assets/images/about/work-with-us-bg.jpg)",
                }}
              >
                <div className="section-title mb-10">
                  <span className="sub-title mb-15">AI Challenge</span>
                  <h2>Limited Client Offer</h2>
                </div>
                <p>
                  Michael Logic is opening up his Microsoft Azure Whisperer trick bag for qualified companies
                  that want to grow a proprietary advantage over their competition.
                </p>
                <Link href="ai-service-details" className="theme-btn mt-15">
                  Let’s Innovate <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};



export const getStaticProps = async () => {
  return {
    props: {
      pTitle: "Michael Logic™, Mr. Tech Dream Merchant",
      openGraphData: [
        {
          property: "og:image",
          content:
            "https://michaellogic.com/assets/images/prevu/mikelogic_home01_prevu.jpg",
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
          content: `https://michaellogic.com`,
          key: "ogurl",
        },
        {
          property: "og:title",
          content: "Michael Logic™, Mr. Tech Dream Merchant",
          key: "ogtitle",
        },
        {
          property: "og:description",
          content: "Engage one of America's most innovative technologists.",
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
          content: "Michael Logic™, Mr. Tech Dream Merchant",
          key: "ttitle",
        },
        {
          property: "twitter:description",
          content: "Engage one of America's most innovative technologists.",
          key: "ttitle",
        },
        {
          property: "twitter:image",
          content: "https://michaellogic.com/assets/images/prevu/mikelogic_home01_prevu.jpg",
          key: "timg",
        },
      ],
    },
  };
};

export default index;
