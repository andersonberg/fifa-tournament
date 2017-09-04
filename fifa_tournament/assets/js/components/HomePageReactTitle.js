import React from 'react';
import PropTypes from 'prop-types';

const HomePageReactTitle = ({ title }) => {
  const homeURL = window.Django.url('home');
  return <div className="container"><h2>{title}</h2></div>;
};

HomePageReactTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePageReactTitle;
