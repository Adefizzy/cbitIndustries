import React from 'react';
import styled from 'styled-components';
import {theme} from './globalAccets/themes';
import { getCenter } from '../utils/getCenter';
import { device } from './globalAccets/breakpoints';
import { Col, Row } from  'antd';
import cbitimg1 from './globalAccets/images/cbitimg1.png';
import boldImage from './globalAccets/images/boldImage.png';
import { UseBannerContext } from './context/bannerContext';

export const Banner = (props) => {
  const { bannerHeigth, setBannerHeight } = UseBannerContext();
  const bannerRef = React.useRef();


  React.useEffect(() => {
    const bannerCurrent = bannerRef.current
    window.addEventListener('load', () => {
      setBannerHeight(bannerCurrent?.getBoundingClientRect()?.height);
    })


    return () => window.removeEventListener('load', () => {
      setBannerHeight(bannerCurrent?.getBoundingClientRect()?.height);
    })
    
  }, [])


  React.useEffect(() => {

    const bannerCurrent = bannerRef.current
    window.addEventListener('resize', () => {
      setBannerHeight(bannerCurrent?.getBoundingClientRect()?.height);
    })

    return () => window.removeEventListener('resize', () => {
      setBannerHeight(bannerCurrent?.getBoundingClientRect()?.height);
    })
    
  }, [])


    return (
        <Col sm={{span: 24}}>
        <StyledMainBanner>
            <div>
              <StyledTopBanner>
                <h1>Product &amp; <br/>Services</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
              </StyledTopBanner>
              <StyledTopBanner>
                <SyledImage src={cbitimg1} alt=''/>
              </StyledTopBanner>
            </div>
            <BoldImageDiv >
              <BoldImage ref={bannerRef} src={boldImage} alt=''/>
            </BoldImageDiv> 
            <UnderLay1>
              <BoldImage src={boldImage} alt='' style={{visibility: 'hidden'}}/>
            </UnderLay1> 
            <UnderLay2>
              <BoldImage src={boldImage} alt='' style={{visibility: 'hidden'}}/>
            </UnderLay2> 
        </StyledMainBanner>
      </Col>
    );
};

const StyledMainBanner = styled(Row)`
  background-color: ${theme.primaryColor};
  padding-bottom: 50px;
  position: relative;

  & > div:first-child{
    margin: 0px 20px;
    padding: 30px 0px;
    ${getCenter({justifyContent: 'space-between'})};
  }


  @media ${device.tablet}{
    & > div:first-child{
      width: 75%;
      margin: 0px auto;
    }
  }
`

const StyledTopBanner = styled.div`
  color: #fff;
  flex-basis: 100%;
   & h1 {
      font-size: 50px;
    }
   & p{
      word-spacing: 7px;
      font-weight: 500;
   }

   &:nth-child(2){
        display: none;
    }


    @media ${device.tablet}{
      flex-basis: 45%;
      & h1 {
        font-size: 3.5vw;
      }

      & p{
        font-size: 1.3vw;
      }

      &:nth-child(2){
        display: block;
      }
    }
`

const SyledImage = styled.img`
  width: 100%;
  height: auto;
`
const BoldImageDiv = styled.div`
  width: 80%;
  position: absolute;
  height: fit-content;
  left: 10%;
  top: 90%;


  @media ${device.tablet}{
    left: 20%;
    width: 60vw;
  }
`

const BoldImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: auto;
  border-radius: 20px;
`

const UnderLay1 = styled(BoldImageDiv)`
  top: 96%;
  width: 75%;
  left: 12%;
  background-color: #ccc;
  border-radius: 25px;
  z-index: -1;

  @media ${device.tablet}{
    left: 21%;
    width: 58vw;
  }
  
`

const UnderLay2 = styled(BoldImageDiv)`
  top: 98%;
  width: 70%;
  left: 15%;
  background-color: #ccc;
  border-radius: 25px;
  z-index: -2;

  @media ${device.tablet}{
    top: 103%;
    left: 22.5%;
    width: 55vw;
  }
  
`