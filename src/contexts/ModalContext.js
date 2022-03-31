import { createContext, useState } from "react";

export const ModalContext = createContext({});

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, index, setIndex }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
