import React from 'react';
// I don't have this..
import styled, { keyframes }  from 'styled-components';

export default function TextAnimation() {
  
  return (
    // Wrapper == parent container...??
    
    <Wrapper className="header">
    <Text>
    <p>
    YOU
    <br />
    WANT
    <br />
    MILK
    </p>
    </Text>
    </Wrapper>
  );
}

// setting animation in a CSS type format
// 0% == beginning of the animation...
// this is an 'animation keyframe'
const animation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

// this is styled-components syntax
// there are 'css animations'
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flexWrap: 'W';
  flexShrink: 1;
`
const Text = styled.span`
  animation-name: ${animation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  font-size: 100px;
`



