import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #e0e0e0;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
  <LoaderWrapper>
    <Spinner />
  </LoaderWrapper>
);

export default Loader;
