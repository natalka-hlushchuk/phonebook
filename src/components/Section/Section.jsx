import React from 'react';
import Container from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Container>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </Container>
  );
};

export default Section;

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
