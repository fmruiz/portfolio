import React from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";

export const Main = ({ color, ...props }) => {
  return (
    <div className={`main__container`} {...props}>
      <div className={`main__first ${color}`}>
        <div className={"main__text"}>
          <span>I'm</span>
          <h1 className={"h1__main"}>
            <Typewriter
              options={{
                loop: true,
                delay: 220
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Franco Ruiz")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .pauseFor(10000)
                  .start();
              }}
            />
          </h1>
        </div>
        <h3>Frontend Engineer</h3>
      </div>
      <div className={"main__second"}></div>
    </div>
  );
};
