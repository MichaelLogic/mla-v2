import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const AiServiceDetails = () => {
  const accordionData = [
    { 
      id: 1, 
      title: "Will you provide system specs & source code ?", 
      answer: "The Problem Formulation Session will provide you the prescribed documented ideas and specs to know \"what\" to build and host in Azure Cloud.  The Build & Growth Package will provide full system development and/or engineering team management." 
    },
    { 
      id: 2, 
      title: "What is the cost of The Azure Whisperer Problem Formulation Session ?", 
      answer: "The Problem Formulation Session is a one time cost of $3,999.00 per company." 
    },
    { 
      id: 3, 
      title: "Who owns the original IP Michael generated during the session?",
      answer: "The individual or company that retains Michael Logic™ will full payment will retain 100% ownership of the intellectual property generated during the consultation." 
    },
    { 
      id: 4, 
      title: "Is the resulting AI system eligible for a federal patent ?",
      answer: "Most likely.  However, I would suggest consulting a patent attorney to understand the bandwidth of protection vs. the cost & time of rebuttaling for approval. Whether patented or not, your system will still result in maximum potential ROI." 
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout  footer={5}>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                The Azure Cloud Whisperer
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}


      {/* Services Page About Area start */}
      <section className="service-page-about py-60 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/about/azure_whisperer_ml03_web.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInRight delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Limited Client Offer</span>
                  <h2>Michael Logic™, Microsoft™ & OpenAI™ </h2>
                </div>
                <p>
                  Good AI engineers know how to create artificial intelligence.  
                  Yet the Azure Whisperer knows <i>what</i> create to help you gain an unfair advantage.     
                </p>
                <ul className="list-style-three pt-15 pb-25">
                  <li>Breakup Homogenous Thought</li>
                  <li>Translate Business Desires into AI Algorithms</li>
                  <li>Implement DevOps for AI Engineering Team</li>
                </ul>
                {/*<Link legacyBehavior href="/about">
                  <a className="read-more mt-10 color-primary">
                    Learn More <i className="far fa-arrow-right" />
                  </a>
                </Link>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}

      {/* How We Works start */}
      <section className="how-we-works-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Humanizing Your Tech</span>
            <h2>Do you have vision for raising a new "child" of your business?</h2>
            <div className="text mt-30">
              <p>
                No company can avoid adoption any longer.  The complexities of adapting 
                your thought process and business to inevitable mass consumption of AI are 
                quite metaphorically parallel to human dating, childbirth and parenthood. 
              </p>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Courtship</h4>
                <div className="content">
                  <p>Engage in speed dating of different ideas to see which one we like best.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-3s">
                <span className="step-number">Step 02</span>
                <h4 className="title">Make Love</h4>
                <div className="content">
                  <p>Massage all data parts involved. Impregnate your machine learning with a strong data seed.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-4s">
                <span className="step-number">Step 03</span>
                <h4 className="title">Child Birth</h4>
                <div className="content">
                  <p>Deploy your new baby AI model into a secure, comfortable Kubernetes crib.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item arrow-none wow fadeInUp delay-0-5s">
                <span className="step-number">Step 04</span>
                <h4 className="title">Parenting</h4>
                <div className="content">
                  <p>No "hit & run".  Planned parenthood and consistently feeding your child brings ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How We Works end */}

      {/* Headline area start */}
      <div className="headline-area bgc-primary mb-30 pt-40 pb-30">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Case Study: </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>
                  The Azure Whisperer, Michael Logic™ creates a logicstics tech AI solution
                  to a national supply chain issue.
                </b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}

      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two wow fadeInUp delay-0-2s">
            <img src="assets/images/video/ai_n_chicken_cvr.jpg" alt="Michael Logic Explains AI with Fried Chicken Wings" />
            <a
              href="https://www.youtube.com/watch?v=W1LMNpCidwQ"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      
      {/* Why Choose Us start */}
      <section className="why-choose-area pt-100 pt-70 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInLeft delay-0-2s">
                  <span className="sub-title mb-15">Client Testimonial</span>
                  <h2>BH Engineering Creates Innovative RegTech with Azure™ & OpenAI™</h2>
                </div>
                <div className="row gap-60">
                  <a href="https://mlams01.blob.core.windows.net/whitepapers/lor_bhengineering_aug2023.pdf" 
                     className="read-more mt-10 mb-50 color-primary"
                     target="_blank">
                    Read Full Testimonial <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row justify-content-between align-items-center">
                <div className="service-about-image style-two wow fadeInRight delay-0-2s">
                  <a href="https://mlams01.blob.core.windows.net/whitepapers/lor_bhengineering_aug2023.pdf"
                     target="_blank">
                    <img
                      src="assets/images/about/lor_bh_engineering_thum.jpg"
                      alt="Letter of Recommendation - BH Engineering for AuditTech™"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}

      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-95 pb-105 rpb-75 rel z-1">
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="container">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      answer={data.answer}
                      title={data.title}
                      key={data.id}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}

      {/* Pricing start */}
      <section className="pricing-plan-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-75 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Azure Whisperer Packages</span>
                <h2>Outside-The-Box Creativity Meets Proven Tech Execution!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-plan-item style-two wow fadeInUp delay-0-2s">
                <div className="icon-title-price">
                  <div className="icon">
                    <i className="flaticon-abstract" />
                  </div>
                  <div className="right-part">
                    <h5>Problem Formulation Package</h5>
                    <span className="price-text">
                      <span className="before">$</span>
                      <span className="price">5,999.00</span>{" "}
                      <span className="after">/per company</span>
                    </span>
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>In-house Data Clinic</li>
                  <li>Business Logic Translation</li>
                  <li>Cloud Platform Prescription</li>
                  <li>Copyright-able Technical Nomenclature</li>
                  <li>SEO Optimizations</li>
                  <li>AI Growth Plan</li>
                </ul>
                {/*<Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Engage Now <i className="far fa-arrow-right" />
                  </a>
                </Link>*/}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-plan-item style-two wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon-title-price">
                  <div className="icon">
                    <i className="flaticon-liquid" />
                  </div>
                  <div className="right-part">
                    <h5>Build & Grow Package</h5>
                    <span className="price-text">
                      <span className="before">$</span>
                      <span className="price">230.00</span>{" "}
                      <span className="after">/per hr.</span>
                    </span>
                    <span>
                      $10k Deposit Required
                    </span>
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li><i>AI Problem Formulation</i></li>
                  <li>Network Configuration</li>
                  <li>Data ETL Ops</li>
                  <li>Dev Team Ops</li>
                  <li>Application Development</li>
                  <li>Algorithm Training</li>
                  <li>CI/CD</li>
                </ul>
                {/*<Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Engage Now <i className="far fa-arrow-right" />
                  </a>
                </Link>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing end */}


      {/* footer area start */}
    </Layout>
  );
};



export const getStaticProps = async () => {

  return {
    props: {
      pTitle: "Michael Logic™, The Azure Cloud Whisperer",
      openGraphData: [
        {
          property: "og:image",
          content:
            "https://michaellogic.com/assets/images/prevu/ninjamode_story01_prevu.jpg",
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
          content: `https://michaellogic.com/ai-service-details`,
          key: "ogurl",
        },
        {
          property: "og:title",
          content: "Michael Logic™, The Azure Cloud Whisperer",
          key: "ogtitle",
        },
        {
          property: "og:description",
          content: "Engage The Azure Whisperer to grow your ROI in the cloud with AI.",
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
          content: "Michael Logic™, The Azure Cloud Whisperer",
          key: "ttitle",
        },
        {
          property: "twitter:description",
          content: "Engage The Azure Whisperer to grow your ROI in the cloud with AI.",
          key: "ttitle",
        },
        {
          property: "twitter:image",
          content: "https://michaellogic.com/assets/images/prevu/ninjamode_story01_prevu.jpg",
          key: "timg",
        },
      ],
    },
  };
};


export default AiServiceDetails;
