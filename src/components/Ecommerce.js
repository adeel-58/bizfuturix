import React from "react";
import "../styles/Ecommerce.css";

import ss1 from "../assets/images/ecommerce/ss4.png"; // account creation screenshot
import ss2 from "../assets/images/ecommerce/ss1.png";
import ss3 from "../assets/images/ecommerce/ss2.png";
import ss4 from "../assets/images/ecommerce/ss3.png";

const Ecommerce = () => {
  return (
    <section className="ecommerce-container">
      <div className="ecommerce-header">
        <h1 className="ecommerce-title">E-commerce Account Management</h1>
        <p className="ecommerce-subtext">
          A full-scale project managing eBay business operations under the store{" "}
          <strong>everything_here</strong>. Our focus was on creating a strong seller
          foundation with seamless workflows for listings, inventory, and orders.
        </p>

        <a
          href="https://www.ebay.com/usr/everything_here"
          target="_blank"
          rel="noopener noreferrer"
          className="ecommerce-link"
        >
          Visit eBay Store: <span>everything_here</span>
        </a>
      </div>

      
      <div className="ecommerce-showcase">
        {/* === Account Creation Section === */}
        <div className="screenshot-section">
          <img src={ss1} alt="eBay Account Setup" className="screenshot-img" />
          <div className="screenshot-text">
            <h3>eBay Account Setup</h3>
            <p>
              We established the <strong>everything_here</strong> eBay account from scratch —
              configuring seller policies, payment settings, and shipping templates.
              This ensured smooth onboarding and professional marketplace compliance.
            </p>
          </div>
        </div>

        {/* === Inventory Management === */}
        <div className="screenshot-section reverse">
          <div className="screenshot-text">
            <h3>Inventory Management</h3>
            <p>
              Streamlined product stock handling with automated updates, reducing
              overselling risks and ensuring accurate item quantities across all listings.
            </p>
          </div>
          <img src={ss2} alt="Inventory Management" className="screenshot-img" />
        </div>

        {/* === Order Fulfillment === */}
        <div className="screenshot-section">
          <img src={ss3} alt="Order Fulfillment" className="screenshot-img" />
          <div className="screenshot-text">
            <h3>Order Fulfillment</h3>
            <p>
              Managed order tracking and dispatch workflows, guaranteeing fast delivery,
              accurate shipping information, and improved customer satisfaction metrics.
            </p>
          </div>
        </div>

        {/* === Store Management === */}
        <div className="screenshot-section reverse">
          <div className="screenshot-text">
            <h3>Store Management</h3>
            <p>
              Oversaw listings, pricing optimization, and store analytics to maintain
              top-rated seller performance and consistent visibility in eBay search results.
            </p>
          </div>
          <img src={ss4} alt="Store Management" className="screenshot-img" />
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
