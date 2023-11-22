import React from "react";
import { Element } from "react-scroll";
import "./Lander.css";

const Lander = () => {
  return (
    <Element name="lander">
    <div
      className=" text-white lander-main-div"
      style={{
        justifyContent: "center",
        justifyItems: "left",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "10%",
        paddingRight: "10%",
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      <div>
        <p className="text-4xl intro" style={{ color: `rgb(100, 255, 218)` }}>
          HI! My name is Shivam Rajput.
        </p>

        <p className="mt-6 text-xl">
          I am a final-year undergraduate student in the field of Computer
          Science, pursuing a B. Tech. degree. I have a strong enthusiasm for
          exploring new technology stacks and developing creative web-based
          products. I possess a keen design sense and am committed to crafting
          exceptional user interfaces. I take pride in my capability to
          transform innovative product concepts into reality.
        </p>
      </div>
    </div>
    </Element>
  );
};

export default Lander;
