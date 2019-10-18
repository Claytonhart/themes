import React from "react";
import ShowcaseItem from "./ShowcaseItem";
import showcaseitems from "../utils/showcaseitems";

const Showcase = () => {
  const itemsToRender = showcaseitems.map((item, i) => {
    return <ShowcaseItem key={i} index={i} {...item} />;
  });

  return <section className="showcase">{itemsToRender}</section>;
};

export default Showcase;
