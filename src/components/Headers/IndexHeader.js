/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/scenic-view.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logofinal.png")}>
            </img>
            <h1 className="h1-seo header-title" >Hola mundo!</h1>
            <h3 className="header-subtitle card code"><span className="function">.soy</span>(<span className="string">"Vusumzi Belmont"</span>);</h3>
            <i className="fas fa-sort-down header-title scrolling-arrow"></i>
          </div>
          
        </Container>
      </div>
  );
}

export default IndexHeader;
