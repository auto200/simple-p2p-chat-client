import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 0.55rem;
  color: #e8e7e3;
`;

const Hamburger = () => {
  return (
    <Icon>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="hamburger"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="3em"
        height="3em"
      >
        <path
          fill="currentColor"
          d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"
        />
      </svg>
    </Icon>
  );
};

export default Hamburger;
