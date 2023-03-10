import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 180px;
  height: 180px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const boxVariants = {
  hover: {
    rotateZ: 90,
  },
  click: {
    borderRadius: "100px",
  },
};

function App() {
  const xcoord = useMotionValue(0);
  useEffect(() => {
    xcoord.onChange(() => console.log(xcoord.get()));
  }, [xcoord]);
  console.log(xcoord);
  return (
    <Wrapper>
      <button onClick={() => xcoord.set(200)}>Click me!</button>
      <Box style={{ x: xcoord }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
