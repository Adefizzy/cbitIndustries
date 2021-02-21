import React from 'react';
import styled from 'styled-components';
import {theme} from './globalAccets/themes';
import { getCenter } from '../utils/getCenter';
import { device } from './globalAccets/breakpoints';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoIosBasketball } from 'react-icons/io';
import { Col } from  'antd';

export const TopHeader = (props) => {
    return (
       
        <StyledHeader sm={{span: 24}}>
        <div>
          <div>
           <p>+234 812 016 8116</p>
           <p>info@cbitindustries.com</p>
          </div>
          <div>
           <StyleFaInstagram/>
           <StyledIoIosBasketball/>
           <StyledFaTwitter/>
           <StyledFaYoutube/>
          </div>
        </div>
      </StyledHeader>
       
    );
};

/* 
     <Col sm={{span: 24}}>
            <h3>Hellow world</h3>
        </Col>
 */

 

const StyledHeader = styled(Col)`
  background-color: ${theme.lightBlue};
  & > div{
    width: 100%;
    margin: 0 auto;
    ${getCenter()};

    & div{
      padding: 20px 0; 
      ${getCenter()};
    

      & p:not(last-child){
        margin-right: 0px;
        width: 100%;
        text-align: center;
      }
    }
  }

  @media ${device.tablet}{
    & > div{
      justify-content: space-between;
      width: 75%;

      & div{
        & p:not(last-child){
        margin-right: 20px;
        width: fit-content;
      }
      }
    }

    & p{
      font-size: 1vw;
    }
    
  }
`

const StyleFaInstagram = styled(FaInstagram)`
  margin-right: 20px;
  font-size: 18px;
  @media ${device.tablet}{
    font-size: 1.4vw;
  }
`

const StyledIoIosBasketball = styled(IoIosBasketball)`
   margin-right: 20px;
   font-size: 18px;
  @media ${device.tablet}{
    font-size: 1.4vw;
  }
`

const StyledFaTwitter = styled(FaTwitter)`
   margin-right: 20px;
   font-size: 18px;
  @media ${device.tablet}{
    font-size: 1.4vw;
  }
`

const StyledFaYoutube = styled(FaYoutube)`
  font-size: 18px;
  @media ${device.tablet}{
    font-size: 1.4vw;
    margin-right: 0px;
  }
`