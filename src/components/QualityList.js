import React from 'react';
import image1 from './globalAccets/images/image1.png';
import image2 from './globalAccets/images/image2.png';
import image3 from './globalAccets/images/image3.png';
import styled from 'styled-components';
import {theme} from './globalAccets/themes';
import { getCenter } from '../utils/getCenter';
import { device } from './globalAccets/breakpoints';
import { Col, Row } from  'antd';
import { UseBannerContext } from './context/bannerContext';

export const QualityList = (props) => {
    const { bannerHeigth } = UseBannerContext();

    return (
        <Col sm={{span: 24}}>
        <StyledQualityList style={{marginTop: `${bannerHeigth + 30}px`}}>
          <StyledSingleQuality >
              <StyledImage src={image1} alt=''/>
              <h1>Tailor Made Solution</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </StyledSingleQuality>
          <StyledSingleQuality>
              <StyledImage src={image2} alt=''/>
              <h1>Tailor Made Solution</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </StyledSingleQuality>
          <StyledSingleQuality>
              <StyledImage src={image3} alt=''/>
              <h1>Tailor Made Solution</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </StyledSingleQuality>
        </StyledQualityList>
      </Col>
    );
};


const StyledQualityList = styled.div`
  width: 75%;
  margin: 0 auto;
  ${getCenter()};

  @media ${device.laptop}{
    justify-content: space-between;
  }
`

const StyledSingleQuality = styled.div`
  flex-basis: 100%;
  text-align: center;
  margin-bottom: 20px;

  & h1{
    font-size: 20px;
    color: ${theme.black};
  }

  & p {
    font-size: 14px;
    color: ${theme.black};
    margin-top: 40px;
  }

  @media ${device.laptop}{
    flex-basis: 30%;
    & h1{
      font-size: 1.7vw;
    }

    & p{
      font-size: 1.1vw;
    }
  }
`

const StyledImage = styled.img`
  width: 40%;
  height: auto;
`