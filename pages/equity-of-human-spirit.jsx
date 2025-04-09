import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Sparkles from 'react-sparkle';

const EquityOfHumanSpirit = () => {
  const accordionData = [
    { 
      id: 1, 
      title: "Will you provide system specs & source code ?", 
      answer: "The Problem Formulation Session will provide you the prescribed documented ideas and specs to know \"what\" to build and host in Azure Cloud.  The Build & Growth Package will provide full system development and/or engineering team management." 
    },
    { 
      id: 2, 
      title: "What is the cost of The Azure Whisperer Problem Formulation Session ?", 
      answer: "The Problem Formulation Session is a one time cost of $5,999.00 per company." 
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

      {/* -- Desktop -- */}
      <section
        className="debut-intro pb-25 rel z-1 d-none d-md-block"
        style={{ backgroundImage: "url(assets/images/qwin/bg_desk_dinc.jpg)" }}
      >
        <Sparkles
          color="white"
          count={30}
          minSize={7}
          maxSize={15}
          overflowPx={0}
          fadeOutSpeed={15}
          flicker={false}
        />
        <div className="container">
          <div className="debut-item justify-content-center">
            <div className="debut-content">
              <img
                  className="eoths-title mt-60"
                  src="assets/images/qwin/eoths_title_grffk.svg"
                  alt="Equity of the Human Spirit"
                />
            </div>
          </div>
        </div>
      </section>

      {/* -- Mobile -- */}
      <section
        className="debut-intro pb-25 rel z-1 d-md-none"
        style={{ backgroundImage: "url(assets/images/qwin/bg_mobile_dinc.jpg)" }}
      >
      <Sparkles
          color="white"
          count={30}
          minSize={5}
          maxSize={13}
          overflowPx={0}
          fadeOutSpeed={15}
          flicker={false}
        />
        <div className="container">
          <div className="debut-item">
            <div className="debut-content">
              <img
                  className="eoths-title mt-180"
                  src="assets/images/qwin/eoths_title_grffk.svg"
                  alt="Equity of the Human Spirit"
                />
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}


      {/* Publish Details Content Area start */}
      <section className="publish-details mt-30 pb-20 rel z-1">
        <div className="container container-1210">
          <div className="banner-inner">
            <div className="row  justify-content-center">
              <div className="col-xl-8">
                <ul className="blog-meta mb-15 wow fadeInUp delay-0-2s">
                  <li>
                    <i className="fal fa-user-alt" />
                    <a href="https://plugory.com/university">OPN University</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 25, 2025</a>
                  </li>
                  {/*<li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>*/}
                </ul>
                <h1 className="debut-publish-title wow fadeInUp delay-0-3s">
                  "Your Data is the New Cotton"
                </h1>
                <span class="debut-context-line">
                   A TRUE STORY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Publish Details Content Area End */}

      {/* Debut Section */}
      <section className="debut-area pb-60 rpb-70 rel z-1">
        <div className="container container-1210">

          <div className="row justify-content-center align-items-center">
            <div className="section-title col-lg-8 mb-40 wow fadeInUp delay-0-2s">
              {/*<h2>Two American innovators serve clever solutions to a myriad of tough national issues by teaching young adults how to “Enerjuice”.</h2>*/}
              <div className="text mt-30">
                {/*<h4>
                  CHICAGO, IL
                </h4>*/}
                <p>
                  He knew the hustle well. He had seen it in urban street corners, in the boardrooms of tech firms, 
                  in the coded language of corporate contracts that always seemed to favor the powerful. 
                  Michael Logic Davis was a Chicago-born tech luminary, pushin keys through the ranks of software 
                  development, cloud engineering, artificial intelligence, and DevOps, earning the respect of his 
                  peers. He carried the spirit of the South Side with him; the resilience, the sharp wit, and the 
                  unyielding determination of a man who had seen struggle and refused to let it define him. Michael 
                  had watched the game evolve, watched the players change their faces, but the rules remained the 
                  same. Keep the wealth, keep the power, keep the people chasing their own stolen labor. 
                </p>
                <p>
                  Mike Logic had not yet been the victim of a data collection scam. But in February of 2025, he 
                  encountered one so insidious, so expertly crafted, that his optimism outweighed his discernment.
                </p>
                <p>
                  It began with a simple LinkedIn message from Uros Jagodic, a project manager at 
                  <a className="lil-blu-link" href="https://newtonx.com" target="_blank"> Newton X </a>, a 
                  prestigious market research company based in New York. Newton X had identified Michael as an 
                  ideal candidate for a paid consultation on Microsoft Azure and Google Cloud Platform. It was a 
                  short task. Uros quoted twenty to thirty minutes for a modest $50. Not much, but Michael was 
                  curious about their sales tactics, a curiosity inherited from his late father, Vernon Davis.
                </p>
                <p>
                  So he gave them his time. He gave them his mind. Michael gave them educated reviews on Microsoft 
                  Azure, Google Cloud and the evolving architectures of computation, the kind that had taken years 
                  to cultivate, forging knowledge sharpened by late nights and early mornings, by failures and 
                  triumphs. The minutes stretched beyond thirty. He wanted to be thorough, to ensure he had given 
                  more than was required, because that was how you built something meaningful. Michael finished 
                  the consultation, submitted his email and phone number, waited for the payment.
                </p>
                <h4>
                  And then, silence.
                </h4>
                <p>
                  Hours passed. A day. Then two. No response. Mr. Logic followed up with Uros and received no reply. 
                  Michael emailed Newton X directly and finally, an answer came from Mitzi Rica Palima, another 
                  project manager. The fifty dollars did not materialize. The resolution promised by Ms. Palima 
                  vanished into the churn of automated replies and corporate silence. When Newton X finally responded 
                  again, they asked for Michael’s email and phone number again. And again. A recursive loop of 
                  deliberate inefficiency, designed to wear down resistance. The perfect algorithm for nonpayment.
                </p>
                <p>
                  Days turned into weeks, and Michael realized he had been played. He was not alone. Newton X caught 
                  other professionals with the same deception of soliciting expertise under the guise of fair 
                  compensation, extracting valuable insights, and then vanishing behind a wall of bureaucratic evasion. 
                  Meanwhile, they were making millions, selling data to major corporations while paying offshore workers 
                  in the Philippines mere pennies to keep their machine running.
                </p>
                <p>
                  If data was the new cotton, then Newton X was a plantation owner, an overseer, an auction block, extracting 
                  wealth from the hands that produced it while giving nothing in return.
                </p>
                <p>
                  One cold evening, burdened by turning the problem over his mind, Michael stopped at a corner store in Englewood. 
                  There, he met an old whino who had seen it all. The man took one look at him and laughed.
                </p>
                <p>
                  "Boy, you walkin' like you carryin' the whole damn world," the old man said, taking a slow sip from his 
                  paper bag. "Whatever they took from you, don't let 'em take your fire too. Find a way to flip it!"
                </p>
                <p>
                  That night, Michael dreamed of a world where the people were not robbed of their own value. A reality where 
                  data did not flow in one direction upward, into the pockets of the powerful but, cycled back into the hands 
                  of those who had generated it. He dreamed of sovereignty, of data democracy in the AI era.
                </p>
                <h4>
                  He woke with a solution.
                </h4>
                <p>
                  The flaw was obvious. The system only worked because individuals relinquished control over their own data. 
                  What if they didn't? What if they owned it, controlled its distribution, negotiated its value?
                </p>
                <h4>
                  Michael invented the Qwin™.
                </h4>
                <p>
                  A quantum-secure AI twin, built not for corporations, but for individuals. A decentralized non-technical 
                  approach that empowers people to track, price, and license their own data footprint of human experience. 
                  Just as Uber turned personal cars into tools of economic freedom, QwinTM would transform human experience 
                  into negotiable currency. It was bigger than Newton X, bigger than a scam. It was a revolution.
                </p>
                <p>
                  Andrew Yang once said, “Our data should be ours, and if we choose to share it, we should be compensated 
                  for it.” Michael took that to heart. He saw a future where working-class citizens, the forgotten, the 
                  exploited, would reclaim the trillions lost to corporate greed. He saw a world where no one would have 
                  to be a slave to their own information.
                </p>
                <p>
                Newton X thought they had stolen from Michael LogicTM Davis. Instead, they had ignited a movement.
                </p>


              </div>
            </div>
           
          </div>

        </div>
      </section>
      {/* Debut Section end */}

      {/* Scrolling Headline area start */}
      <div className="headline-area bgc-primary mb-30 pt-40 pb-30">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>URGENT FOR SAFETY</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>
                  Qwin™ R&D is now an important mission added to Project Tera Watts to deliver a well tested tool asap!
                </b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Scrolling Headline Area end */}

      {/* Product Display Section */}
      <section className="debut-area pb-60 rpb-70 rel z-1">
        <Sparkles
          color="white"
          count={15}
          minSize={7}
          maxSize={15}
          overflowPx={0}
          fadeOutSpeed={30}
          flicker={false}
        />
        <div className="container container-1210">
          <div className="row justify-content-center align-items-center">
            <div className="section-title col-lg-8 mb-40 wow fadeInUp delay-0-2s">

              <img
                  className="qwin-display"
                  src="assets/images/qwin/qwin_design01_plate_clr.png"
                  alt="Qwin - Your quantum secure AI twin"
                />

            </div>
        
          </div>
        </div>
      </section>
      {/* Product Display Section end */}



      {/* Services Page About Area start */}
      <section className="service-page-about py-60 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/qwin/terawatts_qwin_rd_ig_promo01_smll.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInRight delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">There is no AI without EI</span>
                  <h2>Project Tera Watts: Protecting Earth & Humans</h2>
                </div>
                <p>
                  Michael Logic formed 
                  <a className="lil-blu-link" href="https://plugory.com" target="_blank"> Grid Hoppers </a> - 
                  a select few of the world's greatest chemists, coders, 
                  educators, mathematicians and physicists focused on address cognitive dissonance
                  that stifles energy innovation and climate action. 
                </p>
                <p>
                  <a className="lil-blu-link" href="https://plugory.com/tera-watts" target="_blank"> Project Tera Watts </a>  
                  is an implementation plan investing $2 billion into American HBCUs and Native American Tribal
                  Colleges & Universities as a risk mitigation strategy for domestic power demand and global climate action.
                </p>
                <p>
                  Qwin research and development is now an important tool in achieving success with Project Tera Watts
                  due to its ability to accellerate the following:
                </p>
                <ul className="list-style-three pt-15 pb-25">
                  <li>Increase overall equity of an individual human</li>
                  <li>A workforce trained a new age energy</li>
                  <li>Heighten civil & commercial trust - <a className="lil-blu-link" href="https://www.woplli.com/architecture-principles" target="_blank"> Trust Fabric™ </a></li>
                  <li>Master Systems Integration for edge computing</li>
                  <li>Increase evangelism of ESG reform</li>
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

      {/* Call-To-Action Section */}
      <section className="debut-area pb-60 rpb-70 rel z-1">
        <div className="container container-1210">
          <div className="row justify-content-center align-items-center">

            <div className="section-title col-lg-8 mb-40 wow fadeInUp delay-0-2s">
              <img
                  className="tera-watts-title"
                  src="assets/images/qwin/terawatts_title_glow.png"
                  alt="Project Tera Watts"
                />
            </div>
            <div className="section-title col-lg-6 justify-content-center mb-40 wow fadeInUp delay-0-2s">
              <h4> 
                Just your free registration will push this movement closer to realizing a more 
                equitable future of AI for YOU.
              </h4>
            </div>
            <div className="section-title
                            row justify-content-center align-items-center col-lg-8 mb-80 ps-30 pe-3e0 wow fadeInUp delay-0-2s">
              <a href="https://plugory.com/tera-watts" className="theme-btn style-two">
                REGISTER NOW <i className="far fa-arrow-right" />
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* Call-To-Action Section end */}

      
      {/* Video Area start */}
      {/*<div className="video-area-two rel z-1">
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
      </div>*/}
      {/* Video Area end */}


      {/* footer area start */}
    </Layout>
  );
};



export const getStaticProps = async () => {

  return {
    props: {
      pTitle: "Equity of the Human Spirit: Your data is the new cotton.",
      openGraphData: [
        {
          property: "og:image",
          content:
            "https://michaellogic.com/assets/images/prevu/dinc_prevu.jpg",
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
          content: `https://michaellogic.com/equity-of-human-spirit`,
          key: "ogurl",
        },
        {
          property: "og:title",
          content: "Equity of the Human Spirit: Your data is the new cotton.",
          key: "ogtitle",
        },
        {
          property: "og:description",
          content: "a true story of a Chicago born innovator that became the architect of data sovereignty",
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
          content: "Equity of the Human Spirit: Your data is the new cotton.",
          key: "ttitle",
        },
        {
          property: "twitter:description",
          content: "a true story of a Chicago born innovator that became the architect of data sovereignty",
          key: "tdescription",
        },
        {
          property: "twitter:image",
          content: "https://michaellogic.com/assets/images/prevu/dinc_prevu.jpg",
          key: "timg",
        },
      ],
    },
  };
};


export default EquityOfHumanSpirit;
