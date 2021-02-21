import React from 'react';
import styled from 'styled-components';
import {theme} from './globalAccets/themes';
import { getCenter } from '../utils/getCenter';
import { device } from './globalAccets/breakpoints';
import logo from './globalAccets/images/logo.png';
import { Col } from  'antd';

export const SecondHeader = (props) => {
    return (
        <StyledHeader sm={{span: 24}}>
        <SyledLogoDiv>
          <StyledImage src={logo} alt='logo'/>
          <p>C-BIT<br/>INDUSTRIES<br/>LIMITED</p>
        </SyledLogoDiv>
        <StyledButton>BOOK YOUR PROJECT</StyledButton>
      </StyledHeader>
    );
};

const StyledHeader = styled(Col)`
  margin: 0 20px;
  padding: 20px 0px;
  ${getCenter({justifyContent: 'space-between'})};
  align-items: center;

  @media ${device.tablet}{
    width: 75%;
    flex-direction: row;
    margin: 0 auto;
  }
`

const SyledLogoDiv = styled.div`
  ${getCenter()};
  & p{
    text-align: left;
    font-size: 10px;
    font-weight: bold;
    margin-left: 5px;
    display: none;
  }

  @media ${device.laptop}{
    & p{
      display: block;
    }
  }
`

const StyledImage = styled.img`
 width: 35px;
 border-radius: 5px;
  @media ${device.laptop}{
    width: 2.5vw;
  }
`

const StyledButton = styled.button`
  background-color: ${theme.primaryColor};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 17px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
 /*  margin-top: 10px; */

  &:hover, &:focus{
    outline: none;
  } 

  @media ${device.tablet}{
    margin-top: 0px;
    padding: 15px 17px;
    font-size: 0.8vw;
  }
`