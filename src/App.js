import React from 'react';
import './App.css';
import {theme} from './components/globalAccets/themes';
import styled from 'styled-components';
import { getCenter } from './utils/getCenter';
import { TopHeader } from './components/TopHeader';
import { device } from './components/globalAccets/breakpoints';
import logo from './components/globalAccets/images/logo.png';
import { Row, Col}  from 'antd';
import { SecondHeader } from './components/SecondHeader';
import { Banner } from './components/Banner';
import { QualityList } from './components/QualityList';
import { BannerContext } from './components/context/bannerContext';
import {SingleProperty} from './components/SingleProperty';



function App() {
  const [bannerHeigth, setBannerHeight] = React.useState(0);


  return (
    <BannerContext.Provider value={{bannerHeigth, setBannerHeight}}>
    <Row>
      <TopHeader/>
      <SecondHeader/>
      <Banner/>
      <QualityList/>
      <SingleProperty/>
      <SingleProperty/>
      <StyledSection>
        <SingleProperty isBlueBackground/>
        <SingleProperty isBlueBackground/>
      </StyledSection>
      <SingleProperty/>
      <SingleProperty/>
      
    </Row>
    </BannerContext.Provider>
  );
}

const StyledSection = styled.section`
  background-color: ${theme.primaryColor};
  padding: 50px 0px;
`








export default App;
