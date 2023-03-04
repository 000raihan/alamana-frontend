import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import { base_url } from "../../utils/url";
import axios from "axios";

const StoneCategory = () => {
  const [category, setCategory] = useState(null);

  const config = {
    headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'}
  };

  useEffect(() => {
    const url = `/api/get_all_category`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url, config);
        // console.log(response.data.result);
        setCategory(response.data.result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="container" style={{ marginTop: "80px" }}>
          <section id="team" className="team section-bg">
            <div className="container aos-init aos-animate" data-aos="fade-up">
              <div className="section-title">
                <h2>পাথর</h2>
              </div>
              <div className="row">
                {category ?
                  category.map((cat) => {
                    return (
                      <div
                      key={cat.id}
                        className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <Link to="/stone_products" state={{ id: cat.id }}>
                          <div className="member">
                            <div className="member-img" style={{minWidth:"300px"}}>
                              <img
                                // src={`${base_url}/images/${product.image}`}
                                style={{height: "300px", width:'100%', objectFit:'cover'}}
                                src={cat.category_image ? `/category_images/${cat.category_image}` : "images/stone2.jpg"} 
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="member-info">
                              <h4>{cat.category_name}</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  }) : <h3>No Products Found</h3>}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoneCategory;
