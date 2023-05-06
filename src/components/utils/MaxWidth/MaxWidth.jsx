import styled from "./MaxWidth.module.css";

const MaxWidth = ({ maxWidth, children }) => {
  return (
    <div style={{ maxWidth: maxWidth }} className={styled["max-width"]}>
      {children}
    </div>
  );
};

export default MaxWidth;
