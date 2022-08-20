import React, { createContext, useState } from "react";
export const ContexStore = createContext();

const Context = (props) => {
  const [isModel, setisModel] = useState(false);
  const handleModel = () => {
    setisModel(!isModel);
  };
  return (
    <>
      <ContexStore.Provider
        value={{
          modelData: [isModel, setisModel, handleModel],
        }}
      >
        {props.children}
      </ContexStore.Provider>
    </>
  );
};

export default Context;
