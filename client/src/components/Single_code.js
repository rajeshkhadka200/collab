import React, { useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
const SingleCode = () => {
  useEffect(() => {
    let code_box = document.querySelectorAll(".code_body");
    // code_box[0][0].style.backgroundColor = "red";
    console.log(code_box);
  }, []);

  return (
    <>
      <div className="single_code_wrapper">
        <div className="single_code">
          <div className="code_title">
            <h3>How to fetch the api with axios in javascript !</h3>
          </div>
          <div className="code_body">
            <CodeBlock
              text={`
              const a = 20;
              const b = 30;
              function calc(){
                a+b;
              }
              calc(a,b)
              `}
              language={"javascript"}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCode;
