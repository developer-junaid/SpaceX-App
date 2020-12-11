import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <h5>Developer: Junaid Qureshi</h5>
      <div className="icons-container">
        <a rel="noreferrer" href="https://github.com/developer-junaid">
          <i className="fab fa-github icon"></i>
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/developer-junaid/"
        >
          <i className="fab fa-linkedin-in icon"></i>
        </a>
        <a
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100041078220896"
        >
          <i className="fab fa-facebook-f icon"></i>
        </a>
      </div>
    </div>
  );
}
