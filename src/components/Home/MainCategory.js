import React from "react";
// import '../../../public/assets/css/style.css';
import { Link } from "react-router-dom";

const MainCategory = () => {
  return (
    <>
<section id="team" className="team section-bg">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="section-title">
      <h2>Products</h2>
      {/* <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p> */}
    </div>
    <div className="row">
      <div
        className="col-lg-6 col-md-6 d-flex align-items-stretch aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <Link to="/stone">
        <div className="member" style={{cursor:"pointer"}}>
          <div className="member-img">
            <img
              src="images/stone.jpg"
              className="img-fluid"
              alt=""
              style={{maxHeight:"20rem"}}
            />
          </div>
          <div className="member-info">
            <h2>পাথর </h2>
            {/* <span>Chief Executive Officer</span> */}
          </div>
        </div>
        </Link>
      </div>
      <div
        className="col-lg-6 col-md-6 d-flex align-items-stretch aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <Link to="/sand">
        <div className="member" style={{cursor:"pointer"}}>
          <div className="member-img">
            <img
              src="images/sand.jpg"
              className="img-fluid"
              alt=""
              style={{maxHeight:"20rem"}}
            />
          </div>
          <div className="member-info">
            <h2>বালি </h2>
            {/* <span>Product Manager</span> */}
          </div>
        </div>
        </Link>
      </div>
  
    </div>
  </div>
</section>

    </>
  );
};

export default MainCategory;
