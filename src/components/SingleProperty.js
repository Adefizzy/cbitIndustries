import React from 'react';

import styled from 'styled-components';
import {theme} from './globalAccets/themes';
import { getCenter } from '../utils/getCenter';
import { device } from './globalAccets/breakpoints';
import { Col, Row } from  'antd';
import { UseBannerContext } from './context/bannerContext';

const data = ['month/fortnight timesheet approval workflow', 'offline capability with PWA technology','CSV bulk user import', 'advance searching filtering', 'download & print sheet']

export const SingleProperty = (props) => {

    const dataList = data.map((item, index) => {
        return (
          <StyledSingleProperty key={index}>
            <p>{item}</p>
          </StyledSingleProperty>
        )
      })

    return (
    <Col>
      <StyledSingleService isBlueBackground={props.isBlueBackground}>
        <h1>SynCBit</h1>
        <h1>Time tracking application</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <StyledPropertyList>
          {dataList}
        </StyledPropertyList>
        <StyledButtonDiv>
          <StyledButton>go to project</StyledButton>
        </StyledButtonDiv>
        <StyledborderBottom></StyledborderBottom>
      </StyledSingleService>
      </Col>
    );
};





const StyledSingleService = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 50px;


  & h1{
    width: 100%;
    margin: 0 auto;
    text-transform: capitalize;
    font-size: 26px;
    margin-bottom: 20px;
    color: ${props => props.isBlueBackground? '#fff': '#000'};
    text-align: center;

  }

  & h1:first-child{
    margin-bottom: 0px;
  }

  & > p{
    width: 95%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;
    font-size: 17px;
    line-height: 1.9rem;
    color: ${props => props.isBlueBackground? '#fff': theme.black};
  }

  @media ${device.laptop}{
    width: 75%;
    & > p {
        width: 80%;
      font-size: 1.2vw;
    }

    & h1{
        width: 50%;
      font-size: 1.9vw;
      text-align: left;
    }
  }
`

const StyledPropertyList = styled.div`

  ${getCenter()};
  padding: 0px 10px;

  @media ${device.laptop}{
      padding: 0px 0px;
  }
`

const StyledSingleProperty = styled.div`
  border-radius: 10px;
  padding: 30px 40px;
  box-shadow: 4px 11px 48px -7px rgba(2,117,189,0.31);
  margin-bottom: 35px;
  background-color: #fff;
 
  & p{
    color: ${theme.primaryColor};
    text-transform: capitalize;
    margin: 0px;
  }
  & :last-child  {
    margin-left: 0px;
  }

  @media ${device.tablet}{
    margin-right: 30px;
    & :last-child  {
    margin-left: 0px;
  }

  }

  @media ${device.laptop}{
    margin-right: 90px;
  }
`
const StyledButton = styled.button`
  border: none;
  background-color: #e21f16;
  color: #fff;
  text-transform: uppercase;
  border-radius: 8px;
  cursor: pointer;
  padding: 15px 15px;
  font-size: 16px;
  font-weight: bold;

  &:focus{
    outline: none;

  }
`

const StyledButtonDiv = styled.div`
  ${getCenter()};
`

const StyledborderBottom = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  border-bottom: 1px dashed ${theme.lightBlue};
  border-bottom-width: 4px;
`
