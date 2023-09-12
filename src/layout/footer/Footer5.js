import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer5 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_beg069q', 'template_b053yhm', form.current, '8vE2N1NtKxkAdgdqn')
      .then((result) => {
          //console.log(result.text);
          toast("Thank you! We will keep you informed.");
          document.getElementById("eBlastForm").reset();
      }, (error) => {
          console.log(error.text);
          toast("Uh oh! Email not submitted. Try Again");
      });
  };

  return (
    <footer className="main-footer footer-five pt-100">
      <div className="container container-1290 pb-40">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="footer-widget footer-about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-25">
                <a href="index.html">
                  <img src="assets/images/logos/footer-ml_logo.png" alt="Michael Logic" />
                </a>
              </div>
              <p>
                Your Tech Dream Merchant!
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
              <ul className="list-style-two">
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:support@michaellogic.com">support@michaellogic.com</a>
                </li>
                <li>
                  <i className="far fa-phone" />{" "}
                  <a href="callto:7086640953">708.664.0953</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
              <div className="policy">
                Want to stay updated on Michael's journey?
              </div>
              <form id="eBlastForm" className="footer-newsletter"  ref={form} onSubmit={sendEmail}>
                <input type="email" name="nu_email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
            </div>

            <ToastContainer />

          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-copyright-text wow fadeInUp delay-0-2s">
                <p>
                  Copyright @2023, <a href="index.html">Michael Logic Administration LLC</a> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="story">Story</a>
                  </li>
                  <li>
                    <a href="ai-service-details">AI Services</a>
                  </li>
                  <li>
                    <a href="dashping">Projects</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};
export default Footer5;
