import React from 'react';
import { Button } from '@mui/material';
import {
  HomeGridContainer,
  HomeLeftSection,
  HomeTitle,
  HomeTitleSpan,
  HomeText,
  HomeButtonContainer,
  HomeRightSection
} from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeGridContainer>
      <HomeLeftSection>
        <HomeTitle>
          <HomeTitleSpan>HandyContact</HomeTitleSpan> 
          A convenient application
          for storing phone contacts
        </HomeTitle>
        <HomeText>
          HandyContact offer convenient tools for filling, editing, and deleting
          your contacts. The website implements JWT authorization, so your data
          is 100% safe
        </HomeText>
        <HomeButtonContainer>
          <Button variant="contained" LinkComponent={Link} disableElevation to="login">
            Sign in
          </Button>
          <Button variant="outlined" LinkComponent={Link} disableElevation to="contacts">
            Contacts
          </Button>
        </HomeButtonContainer>
      </HomeLeftSection>
      <HomeRightSection>
        
      </HomeRightSection>
    </HomeGridContainer>
  );
};

export default Home;
