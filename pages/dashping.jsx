import Layout from "@/src/layout/Layout";
import Link from "next/link";
const DashPing = () => {
  return (
    <Layout footer={5}>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                Latest Project: DashPing™
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <h2>
                (logistics tech)
              </h2>
              <div className="banner-text wow fadeInUp delay-0-3s">
                A Chicago based logistics tech company launched a solid solution to a national supply 
                chain issue.  DashPing™ created "Freight Bots"; supply chain automation network, 
                cannot only prevent the loss of driver pay but also reduce driver waiting times 
                at facilities. 
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <div className="image wow fadeInUp delay-0-2s">
            <img
              src="assets/images/projects/two_mill_carriers_infographic.jpg"
              alt="DashPing presents Freight Bots™"
            />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area pt-80 rel z-1">
        <div className="container container-1290">
          <div className="row pb-35 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Project Information's</h3>
            </div>
            <div className="col-lg-8">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <h5>Client</h5>
                  <p className="sub-title mb-20">DashPing</p>
                </div>
                <div className="col">
                  <h5>Category</h5>
                  <p className="sub-title mb-20">Automation / AI</p>
                </div>
                <div className="col">
                  <h5>Date</h5>
                  <p className="sub-title mb-20">April 2022</p>
                </div>
                <div className="col">
                  <h5>Location</h5>
                  <p className="sub-title mb-20">Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Challenge</h3>
            </div>
            <div className="col-lg-8">
              <div className="text">
                Michael Schreiber (CEO) of DashPing takes a moment to highlight 
                an amazing technical fact about Freight Bots: <br />
                “We take pride in stating that all of our code was written on American soil. 
                Unfunded and unsupported, please understand the magnitude of the solution 
                we put together for nationwide relief. Serving as CTO, Mike Logic alone wrote 
                over 702,000 lines of code to create Freight Bots v2.5. We're looking at close 
                to three quarter million lines where EVERY character could potentially break 
                the system.”
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container-fluid">
                <div className="video-part style-two wow fadeInUp delay-0-2s">
                  <img src="assets/images/video/dashping_founders_cvr.jpg" alt="DashPing Founders Video" />
                  <a
                    href="https://www.youtube.com/watch?v=m4yGIS3eVZ0"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container-fluid">
                <div className="video-part style-two wow fadeInUp delay-0-2s">
                  <img src="assets/images/video/dashping_maya_cvr.jpg" alt="Freight Bots: Maya is About That Life Video" />
                  <a
                    href="https://www.youtube.com/watch?v=Ux8h1qru8w4"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
            <div className="col-lg-5">
              <h3 className="title mb-30">The Results</h3>
              <h4>
                Freight Bots™ Benchmark Challenge Report: Compass United Carrier
              </h4>
              <a href="https://mlams01.blob.core.windows.net/whitepapers/compass_benchmark_report-nov2022_r4.pdf" 
                 className="mt-30" 
                 target="_blank">
                <img
                    src="assets/images/reports/compass_benchmark_web.jpg"
                    alt="Benchmark Challenge Report: Compass United Carrier"
                  />
              </a>
              <a href="https://mlams01.blob.core.windows.net/whitepapers/compass_benchmark_report-nov2022_r4.pdf" 
                 className="read-more mt-10 mb-50 color-primary"
                 target="_blank">
                Read Full Report <i className="far fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-7">
              <div className="text">
                <p> 
                  Freight Bots™ proved to be a true carrier-first solution that is 
                  laser-focused on driver optimization. Trucking companies can now 
                  share realtime data that grows your automated driver scheduling 
                  intelligence like never seen before in the industry.
                </p>
                <p>
                  While this first official benchmark report focuses on Compass United Carrier, 
                  the Freight Bots Benchmark Challenge will be an evolving business test and 
                  consultation held independently for all trucking companies.  We will announce 
                  special challenge instances when new major versions of Freight Bots are released.
                </p>

                <div className="container-fluid mb-30">
                  <div className="video-part style-two wow fadeInUp delay-0-2s">
                    <img src="assets/images/video/v3_cvr.jpg" alt="Freight Bots Benchmark Challenge Video" />
                    <a
                      href="https://www.youtube.com/watch?v=m4yGIS3eVZ0"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="video-part style-two wow fadeInUp delay-0-2s">
                    <img src="assets/images/video/tms_war_cvr.jpg" alt="TMS War Video" />
                    <a
                      href="https://www.youtube.com/watch?v=m4yGIS3eVZ0"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Project Details Content Area End */}
      {/* Next Prev Post Area start */}
      {/*<section className="next-prev-post-area">
        <div className="container container-1290">
          <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
            <div className="prev-post wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src="assets/images/projects/prev-project.jpg" alt="Prev" />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Digital Product Design
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Web Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Next <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img src="assets/images/projects/next-project.jpg" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Next Prev Post Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default DashPing;
