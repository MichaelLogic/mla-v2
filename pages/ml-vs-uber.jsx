import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";

const UniversityArticle = () => {
  return (
    <Layout footer={5}>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-50 rel z-1"
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
              src="assets/images/prevu/dulynoded_prevu.jpg"
              alt="Duly Noded graphic"
            />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area rel z-1">
        <div className="container container-1290">
          <div className="banner-inner">
            <div className="row">
              <div className="col-xl-8">
                <ul className="blog-meta mb-15 wow fadeInUp delay-0-2s">
                  <li>
                    <i className="fal fa-user-alt" />
                    <a href="#">University</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">September 18, 2023</a>
                  </li>
                  {/*<li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>*/}
                </ul>
                <h1 className="page-title wow fadeInUp delay-0-3s">
                  Duly Noded: Michael Logic™ vs. Uber Engineering Team
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Details Content Area End */}

      {/* University Article Kickoff start */}
      <section className="university-kickoff-area pb-100 rpb-70 rel z-1">
        <div className="container container-1210">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <h2>Gain insight on cloud system architecture that performs at the level of Uber's engineering.</h2>
            <div className="text mt-30">
              <h4>
                Does your company have a demand for an Uber level tech performance?
              </h4>
              <h4>
                Do you need to service millions of users simultaneously while handling intense AI processes?
              </h4>
              <p>
                Building enterprise cloud systems requires making very important decisions about 
                the human resources engineering team the programming languages and tools used to 
                engineer for high performance & scalability.
              </p>
              <p>
                A Michael Logic™ type of software engineering stack is a great model for building high 
                performance systems.  For real business context, let’s compare my system architecture 
                to that Uber’s engineering team.  This is a neat comparison because I coded a digital 
                marketplace brokerage called DashHaul; which was being rumored as the “Uber of Freight” 
                before there was an Uber Freight™️.  I faced many of the same challenges as Uber’s 
                team and we made different decisions to achieve similar results geo-location polling
                microservice diplomacy.
              </p>
              <h4>
                Uber™ Architecture
              </h4>
              <p>
                In 2016, 
                <a href="https://www.uber.com/blog/go-geofence-highest-query-per-second-service/" target="_blank">
                Uber migrated from Node to Go</a> to improve the performance of their geofence 
                lookup microservice. This microservice turned out to be the company’s service with 
                the most queries per second (QPS). There were several reasons why Uber decided to 
                migrate to <a href="https://go.dev/" target="_blank">Go</a>.  At the time their engineering team
                was facing the following challenges: the dynamically typed 
                and interpreted nature of Node.js hinders the ability to handle CPU-intensive point-in-polygon algorithms efficiently.
              </p>
            </div>
          </div>
          
          <div className="why-choose-item wow fadeInUp delay-0-2s">
            <div className="why-choose-header">
              <i className="far fa-chevron-right" />
              <h5>High-throughput and low-latency requirements</h5>
            </div>
            <p>
              Geofence lookups are required on every request from Uber's mobile apps and must 
              quickly answer hundreds of thousands per second of queries.
            </p>
          </div>

          <div className="why-choose-item wow fadeInUp delay-0-2s">
            <div className="why-choose-header">
              <i className="far fa-chevron-right" />
              <h5>CPU intensive workload</h5>
            </div>
            <p>
              Geofence lookups require CPU-intensive point-in-polygon algorithms. Uber's team 
              concluded Node's dynamically typed nature did not make it optimal for those calculations.
            </p>
          </div>

          <div className="why-choose-item wow fadeInUp delay-0-2s">
            <div className="why-choose-header">
              <i className="far fa-chevron-right" />
              <h5>Non-disruptive background loading</h5>
            </div>
            <p>
              Uber's mobile app must ensure the freshest geofences data to perform the lookups and must be
              kept in-memory in the backgournd.  Uber's team opted out of maximizing Node's single threaded
              processing elegence for this service because background refreshing can tie up the CPU for an
              extended period of time.
            </p>
          </div>

          <div className="text mt-30">
            <p>
              As one may have experienced, Uber's engineering team used Go to produce a reliable user 
              experience.  Their geofence microservice performs well despite the decision to settle for
              a read-write lock methodology that synchronized access the geo-index.
            </p>
          </div>

        </div>
      </section>
      {/* How We Works end */}

      {/* Mike Logic Game Dev Background start */}
      <div className="university-gamer-area pt-120 pb-90 rpt-100 rpb-70">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
            <div className="section-title style-two text-center mb-70">
              <span className="sub-title mb-15">Michael Logic "Paperclip" Architecture</span>
              <h2>
                The Birth of an Optimization Wizard
              </h2>
            </div>
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
                    src="assets/images/university/actionscript_code.jpg"
                    alt="ActionScript Code"
                  />
                </div>
                <div className="content">
                  <h4>
                    ActionScript Gaming
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/university/flash_alphabuzz.jpg"
                    alt="AlphaBuzz"
                  />
                </div>
                <div className="content">
                  <h4>
                    AlphaBuzz: teaches kids typing
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_wordsearch02.jpg"
                    alt="BennyWordSearch"
                  />
                </div>
                <div className="content">
                  <h4>
                    Benny Wordz: teaches kids spelling
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_wordsearch.jpg"
                    alt="BennyWordSearch"
                  />
                </div>
                <div className="content">
                  <h4>
                    Benny Wordz: teaches kids spelling
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_molemath.jpg"
                    alt="MoleMath"
                  />
                </div>
                <div className="content">
                  <h4>
                    Mole Math: teaches kids math
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

             <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_goohealthy.jpg"
                    alt="GooHealthy"
                  />
                </div>
                <div className="content">
                  <h4>
                    GooHealthy: teaches kids nutrition
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            
          </Swiper>
        </div>
        <div className="container container-1210">
          <div className="mb-40 wow fadeInUp delay-0-2s">
            <p>
              Before discussing a Michael Logic type of solution of Uber's needs, it is insightful
              know the background story for my current methodology.  I started delivering professional
              code at 18 years old in the form of online games in 
              <a href="https://en.wikipedia.org/wiki/ActionScript" target="_blank">ActionScript.</a>  
              Many years of pushing a Javascript superset to its limit to provide an entertaining and
              safe experience to kids (our most critical users on Earth) made me an optimization wizard.
            </p>
            <h4>
              The Game Loop
            </h4>
            <div className="row justify-content-center image wow fadeInUp delay-0-2s">
              <img
                src="assets/images/university/game-loop-fixed.png"
                alt="Game Loop Mastered"
              />
            </div>
            <p>
              One of the quintessential elements of game programming is the 
              "<a href="https://gameprogrammingpatterns.com/game-loop.html" target="_blank">game loop</a>".  
              Almost every game you know and love playing has a well crafted game loop in its architecture.
              I say to my junior engineers, "Once you have mastered the game loop spell, you will be able
              to pull a <i>Dr. Strange</i> and separate your concept of time from your gamer's reality."
            </p>
            <h4>
              Michael, What does that mean?!
            </h4>
            <p>
              After working with 
              <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming" target="_blank">Objected Oriented Programming (OOP)</a> 
              in statically typed languages, my conclusion is most engineers (especially team leaders) have 
              not had the "type" of experiences a game developer acquires while truly mastering 
              <a href="https://en.wikipedia.org/wiki/Reactive_programming" target="_blank">Reactive</a> (declaritive) 
              pogramming using dynamically typed functional methodologies.  In their full glory, OOP and Reactive programming
              about as different as "structure / sequence" and "chaos / reaction".   
            </p>
            <p>
              In my opinon, the time it takes  to completely understanding Reactive methodology from optimized UI to dynamic persistence is
              the reason why engineers harbour such strong misunderstandings about the efficiency and purpose
              of modern JavaScript and <a href="https://nodejs.org/en/about">NodeJS</a>. 
            </p>
          </div>
        </div>
      </div>
      {/* Mike Logic Game Dev Background end */}

      {/* Myths about NodeJS Area start */}
      <section className="university-node-area py-60 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/university/node_event_loop.png"
                  alt="NodeJS Event Loop"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInRight delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">"Don't Go All Static on me ;-)  LOL"</span>
                  <h3>False Myths about NodeJS</h3>
                </div>
                <p>
                  The nuanced advantages of Michael Logic Paperclip Architecture because very clear
                  once crucial misunderstandings of NodeJS are dispelled.    
                </p>

                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>Node is not scalable</h5>
                  </div>
                  <p>
                    False, I guarantee a team properly coding a dynamically typed system the need
                    of logic for thread safety will scale faster than a team scrambling with a statically typed 
                    system to code locking methods & multi-thread processing.  Large businesses that
                    say Node is just for smaller apps usually don't have tech leads that have mastered
                    the way of reactive coding.  It's literally <i>I/O Wing Chun</i>.   
                  </p>
                </div>

                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>Node is just for web development</h5>
                  </div>
                  <p>
                    False, Node can elegantly handle being the core diplomat of desktop apps, IoT devices,
                    command line tools and AI cop.   
                  </p>
                </div>

                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>Node does not deal well with CPU-intensive tasks</h5>
                  </div>
                  <p>
                    False, There are two solid ways to handle CPU-intensive tasks. An optimized network
                    load balancer with Node's latest cluster module and optimized business logic will do
                    the job in 80% of the cases.  Or utilize Node's unmatched abilities as a "waiter" to
                    take orders and serve number crunching Go or Julia "chefs" to cook up those heavy
                    calculations at C++ speeds.   
                  </p>
                </div>


                <div className="why-choose-item wow fadeInUp delay-0-2s">
                  <div className="why-choose-header">
                    <i className="far fa-chevron-right" />
                    <h5>Node has a problem with concurrency</h5>
                  </div>
                  <p>
                    False, Here is where knowledge of the game loop can help engineers understand
                    how a single threaded Node app achieves full async supremecy.  Node's Event Demultiplexer
                    is so well hidden and embedded in this tech's operations that most engineers
                    don't even have to learn about it before completing production level programs.  
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
                Paperclip Software Architecture
              </h2>
            </div>
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
                    src="assets/images/university/actionscript_code.jpg"
                    alt="ActionScript Code"
                  />
                </div>
                <div className="content">
                  <h4>
                    ActionScript Gaming
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/university/flash_alphabuzz.jpg"
                    alt="AlphaBuzz"
                  />
                </div>
                <div className="content">
                  <h4>
                    AlphaBuzz: teaches kids typing
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_wordsearch02.jpg"
                    alt="BennyWordSearch"
                  />
                </div>
                <div className="content">
                  <h4>
                    Benny Wordz: teaches kids spelling
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_wordsearch.jpg"
                    alt="BennyWordSearch"
                  />
                </div>
                <div className="content">
                  <h4>
                    Benny Wordz: teaches kids spelling
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_molemath.jpg"
                    alt="MoleMath"
                  />
                </div>
                <div className="content">
                  <h4>
                    Mole Math: teaches kids math
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}

             <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/university/flash_goohealthy.jpg"
                    alt="GooHealthy"
                  />
                </div>
                <div className="content">
                  <h4>
                    GooHealthy: teaches kids nutrition
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            
          </Swiper>
        </div>
        <div className="container container-1210">
          <div className="mb-40 wow fadeInUp delay-0-2s">
            <p>
              Michael Logic "Paperclip" Architecture is intended to support super-optimized, reactive
              methodologies that sport a highly cooridinated dance of a stack that is dynamically typed
              and concurrent from front end to external persistence.
            </p>
            <div className="row justify-content-center image wow fadeInUp delay-0-2s">
              <img
                src="assets/images/university/ml_paperclip_architecture.jpg"
                alt="ML Paperclip Architecture"
              />
            </div>
            <h4>
              Paperclip Solution Uber
            </h4>
            <p>
              Uber's engineering team did a great job of avoiding 
              <a href="https://en.wikipedia.org/wiki/R-tree?uclick_id=f4ed410b-c2ff-4230-bf8f-12d50ea6df71" target="_blank">R-tree</a> 
              or the complicated <a href="https://en.wikipedia.org/wiki/R-tree?uclick_id=f4ed410b-c2ff-4230-bf8f-12d50ea6df71" target="_blank">S2</a> calculations
              for indexed geofences. They chose a simpler method based on their city-centric business model.  
                While the runtime complexity of the solution remains <i>O(N)</i>, this simple technique reduced N 
              from the order of 10,000s to the order of 100s.
            </p>
            <h4>
              Front End Intelligence
            </h4>
            <p>
              The first difference between my solution and Uber's engineering team would be how I treat the frontend
              interface like an old ActionScript game with tons of vectors moving and a kid manically pressing buttons.
              I would exponentially reduce the amount of requests going to the backend by capitalizing on the latency of 
              human perception, the users device and the current network delivery speed.  These three factors would allow
              me to create an optimization algorithm dependent on time and vehicle velocity.  Then, since Uber's decisions
              reduced their geofence indexes to 100s per request ... guess what?!  I would argue those geofences just need
              to be rapidly sent to the client and let the client's device do the quick calculation since the data is soo minute.
              Modern front ends can handle more data & processing than the average engineer may have seen if they have
              not been involved in game interface level optimization sprints. 
            </p>
            <p>
              Look at the Julia script output below.  We can confirm that you can fit quite a bit of geofences objects into
              only 100 kilobytes of JSON data ... approximately over 133,000 geofences! wow
            </p>
            <div className="row justify-content-center image wow fadeInUp delay-0-2s">
              <img
                src="assets/images/university/julia_100k_data_test.png"
                alt="Julia 100k Data Test"
              />
            </div>
            <p>
              I'm certain that if a client's front end can process 100s of polygons in milliseconds, the processing of a small
              amount of geofence comparisons will be effortless and timely.  Michael Logic Paperclip Architecture could drastically
              reduce the requests the machines hosting Uber's geofence microservice.  Then we can get even better performance
              by replacing Go with Julia language.
            </p>
          </div>
        </div>
      </div>
      {/* Paperclip Architecture end */}


      {/* jLab Area start */}
      <section className="university-node-area py-60 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/university/doc_clark01.jpg"
                  alt="NodeJS Event Loop"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInRight delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Number Wizard: Dr. Clark Alexander</span>
                  <h3>Julia & Our jLab</h3>
                </div>
                <p>
                  Yes. 
                  <a href="https://www.datascienceland.com/blog/performance-between-python-r-julia-and-go-which-one-is-better-29/" target="_blank">Julia is faster than Go</a> 
                  in all the ways we need to use the language in our Paperclip architecture!  
                </p>
                <p>
                  Many backend engineers are now comparing Node and Go performance. For Michael Logic 
                  type engineering, Go is not an optimal replacement for Node’s mastery of I/O.  
                  So Go would be used only for CPU-intensive microservices.  Yet I would suggest using 
                  Julia for said microservices.  Go also averages almost double the lines of code to 
                  achieve the same functionality of a Julia method.  
                </p>
                

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* jLab Area end */}

      {/* Uber Disclaimer Area start */}
      <section className="university-node-area py-60 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInRight delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Freight Friends</span>
                  <h3>Special Note</h3>
                </div>
                <p>
                  Special note:  no actual business competition took place between 
                  Michael Logic and Uber.  This article’s title is simply an exciting 
                  statement to get here for some industry myth-busting.  Michael 
                  and Lior Ron (Uber Freight) are “freight friends”. 😆
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-about-image wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/university/logic_n_lior.jpg"
                  alt="NodeJS Event Loop"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Uber Disclaimer Area end */}
      
    </Layout>
  );
};



export const getStaticProps = async () => {

  return {
    props: {
      pTitle: "Duly Noted: Michael Logic™ versus Uber™ Engineering Team",
      openGraphData: [
        {
          property: "og:image",
          content:
            "https://michaellogic.com/assets/images/prevu/dulynoded_prevu.jpg",
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
          content: `https://michaellogic.com/university/ml-vs-uber`,
          key: "ogurl",
        },
        {
          property: "og:title",
          content: "ML Projects: Freight Bots™ by DashPing",
          key: "ogtitle",
        },
        {
          property: "og:description",
          content: "Gain insight on cloud system architecture that performs at the level of Uber's engineering.",
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
          content: "Duly Noted: Michael Logic™ versus Uber™ Engineering Team",
          key: "ttitle",
        },
        {
          property: "twitter:description",
          content: "Gain insight on cloud system architecture that performs at the level of Uber's engineering.",
          key: "tdescription",
        },
        {
          property: "twitter:image",
          content: "https://michaellogic.com/assets/images/prevu/dulynoded_prevu.jpg",
          key: "timg",
        },
      ],
    },
  };
};



export default UniversityArticle;
