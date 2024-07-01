import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px solid green;
`;

function App() {
  const testArr = ["가지", "감자", "오이", "고구마", "옥수수"];
  return (
    <Wrapper>
      {testArr.map((testName, i) => (
        <Square key={i}>{testName}</Square>
      ))}
    </Wrapper>
  );
}

export default App;
