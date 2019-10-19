import React from "react";

const Features = () => {
  return (
    <section className="features bg-light">
      <div className="container">
        <div className="features-item">
          <i className="far fa-folder features-item__img"></i>
          <h4 className="features-item__header">Fully Responsive</h4>
          <p className="features-item__desc">
            This theme will look great on any device, no matter the size!
          </p>
        </div>
        <div className="features-item">
          <i className="far fa-clipboard features-item__img"></i>
          <h4 className="features-item__header">Bootstrap 4 Ready</h4>
          <p className="features-item__desc">
            Featuring the latest build of the new Bootstrap 4 framework!
          </p>
        </div>
        <div className="features-item">
          <i className="far fa-check-circle features-item__img"></i>
          <h4 className="features-item__header">Easy to Use</h4>
          <p className="features-item__desc">
            Ready to use with your own content, or customize the source files!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
