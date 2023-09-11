import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Story = () => {
  return (
    <Layout footer={5}>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-150 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-50 rmb-50 wow fadeInUp delay-0-2s">
                By any means necessary, Michael culvitated innovative vision tightly coupled with decades of tech skills.
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}

      {/* Services Page About Area start */}
      <section className="service-page-about py-50 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/azure_whisperer_ml02_story_web.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Michael Logic™ Davis</span>
                  <h2>The Story </h2>
                </div>
                <p>
                  Michael "Logic" Davis is the quintessential "Swiss Army Knife" in your 
                  tech department with over 20 years of software engineer, mobile engineering 
                  and big data experience. He has a unique combination of technical aptitude 
                  and creative ability that is a great asset to any team. Michael’s first role 
                  in leading a team of coders and creatives was for Stelor Productions 
                  (a company that owned the web address Googles[.]com .... notice the “s”). 
                  Googles was an extremely elaborate avatar game world for kids.     
                </p>
                <p>
                  Strong leadership & founder experience with this dynamic technologist. 
                  As CTO of DashPing, Michael engineered America's first industry-wide 
                  enterprise solution to a decades old trucking issue (truck detention) 
                  that even The White House mandated. Freight Bots™ by DashPing is 
                  engineered with Typescript, Node.js, Angular, Docker, AWS, Python, 
                  scikit-learn and a few more tools. Freight Bots by DashPing was 
                  engineered with Typescript, Node.js, Angular, Docker, AWS, Python, 
                  scikit-learn and a few more tools. Sharing the documents attached to 
                  this job submission will support that I have written over 700,000 
                  lines of error-free big data manipulating code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}

      {/* About Us Area start */}
      <section className="about-area-five py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="about-content wow fadeInLeft delay-0-4s">
                  <p>
                    Quest Digital Interactive (Alexandria, VA) hired Michael as a consultant 
                    to provide assistance deriving claims of original systems and methods of 
                    artificial intelligence with live drama media for an approved patent.
                    This innovation was recognized and supported by 
                    <a href="https://siliconangle.com/2016/10/25/how-to-watch-live-from-ibm-world-of-watson-wow16/" target="_blank">IBM Watson team </a>. 
                    He also is the technical author of four other pending patents for artificial 
                    intelligence and clean sustainable energy.     
                  </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-part style-three wow fadeInUp delay-0-2s row justify-content-center">
                <img src="assets/images/video/qdi_george_davis_cvr.jpg" alt="Pr.George Davis, Quest Digital Interactive" />
                <a
                  href="https://www.youtube.com/watch?v=Mp5Jftpjb6I"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}

            {/* Statistics Area start */}
      <div
        className="statistics-area pt-30 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={20} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3.5} extraClass={"k"} />
                <span className="counter-title">Million Lines of Code Published</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={26} />
                <span className="counter-title">Patent Claim Contributions</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* Statistics Area end */}

      {/* About Us Area start */}
      <section className="about-area-five py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-five-images mb-50 lmt-50 wow fadeInLeft delay-0-2s">
                <img
                    src="assets/images/logic/pushinkeys_challenge_cvr_web.jpg"
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
                  sectors. So he made a commitment to work with anyone who help him reach
                  The White House to answer the call-to-action for <b>America's 
                  Talent Pipeline Challenge</b>.
                </p>
                <div className="mt-30">
                  <a href="https://mlams01.blob.core.windows.net/whitepapers/pushinkeys_challenge_r2_web.pdf" 
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
  console.log(`Open Graph Test **** :-) `);

  return {
    props: {
      pTitle: "Michael Logic™, The Story",
      openGraphData: [
        {
          property: "og:image",
          content:
            "https://michaellogic.com/assets/images/prevu/ninjamode_story_prevu.jpg",
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
          content: "Michael Logic™, The Story",
          key: "ogtitle",
        },
        {
          property: "og:description",
          content: "By any means necessary, Michael Logic gained innovative vision and decades of tech experience.",
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
          content: "Michael Logic™, The Story",
          key: "ttitle",
        },
        {
          property: "twitter:description",
          content: "By any means necessary, Michael Logic gained innovative vision and decades of tech experience.",
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

export default Story;
