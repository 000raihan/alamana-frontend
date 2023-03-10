import React, { useState, useEffect } from "react";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import axios from "axios";
import { base_url } from "../../utils/url";
import { Link } from "react-router-dom";

const SandCategory = () => {
  const [products, setProducts] = useState(null);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const url = `/api/get_products/50`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url, config);
        console.log(response.data.result);
        setProducts(response.data.result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "80px" }}>
        <section id="team" className="team section-bg">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>বালি</h2>
            </div>
            <div className="row">
              {products &&
                products.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <Link to="" state={{ id: "2" }}>
                        <div className="member">
                          <div className="member-img">
                            <img
                            style={{height: "300px", width:'100%', objectFit:'cover'}}
                              src={`/images/${product.image}`}
                              //   src="images/stone2.jpg"
                                className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="member-info">
                            <h4>{product.product_name}</h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SandCategory;
