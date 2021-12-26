import React from 'react';
import styled, { keyframes }  from 'styled-components';
import ywm_pic from '../images/terrarium.jpg';
import './PicAnimation.css';

export default function TextAnimation() {
  
  return (
    <Container className="main">
    <Wrapper>
    <div className="triangle">
      <img className="ui medium image babylon" src={ywm_pic}/>
    </div>
    </Wrapper>
    </Container>
  );
}

// setting animation in a CSS type format
// 0% == beginning of the animation...
// this is an 'animation keyframe'
const animation = keyframes`
 0% { transform: scale(0.5); }
 100% { transform: scale(1.5); }
`

// this is styled-components syntax
// there are 'css animations'
const Wrapper = styled.div`
  animation-name: ${animation};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`