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
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                By any means necessary, Michael culvitated innovative vision tightly coupled with decades of tech skills.
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}

      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/azure_whisperer_ml02_story_web.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Michael Logic™ Davis</span>
                  <h2>The Story </h2>
                </div>
                <div className="content">
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
        </div>
      </section>
      {/* Services Page About Area end */}

      {/* About Us Area start */}
      <section className="about-area-five py-130 rpy-100 rel z-1">
        <div className="container container-1290">
            <div className="content">
              <p>
                Quest Digital Interactive (Alexandria, VA) hired Michael as a consultant 
                to provide assistance deriving claims of original systems and methods of 
                artificial intelligence with live drama media for an approved patent. 
                He also is the technical author of four other pending patents for artificial 
                intelligence and clean sustainable energy.     
              </p>
            </div>
        </div>
      </section>
      {/* About Us Area end */}

            {/* Statistics Area start */}
      <div
        className="statistics-area pt-30 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
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
              <div className="about-five-images rmt-50 wow fadeInLeft delay-0-2s">
                <img
                    src="assets/images/logic/pushinkeys_challenge_cvr_web.jpg"
                    alt="PushinKeys: Talent Pipeline Challenge cover"
                  />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-five">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Talent Poster Child</span>
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
                  <a href="https://mlams01.blob.core.windows.net/whitepapers/pushinkeys_challenge_r2_web.pdf" className="theme-btn style-two">
                    View PDF <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}

      {/* Testimonial Area start */}
      {/*<section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Testimonial Area end */}
 
    </Layout>
  );
};
export default Story;
