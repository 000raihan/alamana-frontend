import React,{useState, useRef} from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/Layout/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainCategory from "../../components/Home/MainCategory";
import Footer from "../../components/Layout/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    // alert("called");
    // e.preventDefault(); // prevents the page from reloading when you hit “Send”

    // emailjs.sendForm("service_c29i7gb", "template_zt0qd6c", form.current, "FRitjK_ycplIHxoAZ").then(
    //   (result) => {
    //     console.log("result : ", result);
    //   },
    //   (error) => {
    //     // show the user an error
    //     console.log("error : ", error);
    //   }
    // );
  };
  return (
    <div>
      <Header />
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
        <div>
          <img src="images/slide_image_1.jpeg" />
        </div>
        <div>
          <img src="images/slide_image_2.jpeg" />
        </div>
      </Carousel>

      <MainCategory />

      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact Us</h2>
      {/* <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p> */}
    </div>
    <div>
      {/* <iframe
        style={{ border: 0, width: "100%", height: 270 }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        frameBorder={0}
        allowFullScreen=""
      /> */}
    </div>
    <div className="row mt-5">
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt" />
            <h4>Location:</h4>
            <p>Dupagul, Airport, Dhopagul, Sylhet, Bangladesh</p>
          </div>
          <div className="email">
            <i className="bi bi-envelope" />
            <h4>Email:</h4>
            <p>alamanastonecrusher@gmail.com</p>
          </div>
          <div className="phone">
            <i className="bi bi-phone" />
            <h4>Call:</h4>
            <p>+8801755-673963</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form
        ref={form} onSubmit={sendEmail}
          action="forms/contact.php"
          method="post"
          role="form"
          className="php-email-form"
        >
          <div className="row gy-2 gx-md-3">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="from_name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="col-md-6 form-group">
              <input
                type="email"
                className="form-control"
                name="from_email"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="form-group col-12">
              <input
                type="text"
                className="form-control"
                name="from_mobile"
                id="mobile"
                placeholder="Mobile"
                required=""
              />
            </div>
            <div className="form-group col-12">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3 col-12">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center col-12">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
      {/* End Contact Section */}
      <Footer />
    </div>
  );
};

export default Home;
