import React from 'react';
import SourceDetails from '../components/SourceDetails';

const SourceInformation = (props) => {
  return (
    <div className="container">
      <SourceDetails sources={props} />
    </div>
  );
};

export default SourceInformation;

