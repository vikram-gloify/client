import React from 'react';
// Components
import Companies from '../../components/Companies/Companies';
import Details from '../../components/Details/Details';
import GetStarted from '../../components/GetStarted/GetStarted';
import Guide from '../../components/Guide/Guide';
import Hero from '../../components/Hero/Hero';
import Properties from '../../components/Properties/Properties';

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
    </>
  );
};

export default Home;
