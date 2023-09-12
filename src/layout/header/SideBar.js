import { Fragment, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_beg069q', 'techwish_jc9jush', form.current, '8vE2N1NtKxkAdgdqn')
      .then((result) => {
          //console.log(result.text);
          toast("Your wish has been sent to Mike Logic!");
          document.querySelector("body").classList.remove("side-content-visible");

      }, (error) => {
          console.log(error.text);
          toast("Uh oh! Wish not submitted. Try Again");
      });
  };

  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Engage Michael Logic™</h4>
          </div>
          {/*Engage Michael Logic™*/}
          <div className="appointment-form">
            <form id="techWishForm" ref={form} onSubmit={sendEmail} >
              <div className="form-group">
                <input type="text" name="client_name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="client_email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input type="text" name="client_company" placeholder="Company Name" required />
              </div>
              <div className="form-group">
                <textarea name="client_wish" placeholder="State your technical wish ..." rows={5} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Start Dream
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="https://twitter.com/MikeLogic">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.linkedin.com/in/michaellogic/">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.instagram.com/michaellogic">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        <ToastContainer />

      </section>
    </Fragment>
  );
};
export default SideBar;
