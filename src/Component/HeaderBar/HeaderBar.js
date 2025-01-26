import React from "react";

const HeaderBar = () => {
  return (
   
    <div className="bg-primary text-whitepx-4 py-2">
      {/* Left content */}
      <div className=" d-flex fonte align-items-center justify-content-between ps-2 ">
      <div className="d-flex align-items-center">
        <i className="fa-regular fa-envelope me-2"></i>
        <span>www.registerkaro.in</span>
      </div>

      {/* Right content */}
      <div className="d-flex align-items-center me-5 hear">
        <i className="fa-solid fa-phone me-2"></i>
        <span>+918447746183</span>
        <div className="border-start border-light mx-3"></div>
        <i className="fa-brands fa-facebook-f me-1"></i>
        <i className="fa-brands fa-instagram me-1"></i>
        <i className="fa-brands fa-twitter me-1"></i>
        <i className="fa-brands fa-pinterest"></i>
      </div>
    </div>
    </div>
  );
};

export default HeaderBar;
