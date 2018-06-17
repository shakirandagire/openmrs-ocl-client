import React from 'react';
import PropTypes from 'prop-types';
import ConceptTable from './ConceptTable';
import Loader from '../../Loader';

const ConceptList = ({ concepts, fetching }) => {
  if (concepts.length >= 1) {
    return (
      <div className="text-center mt-3">
        <table className="table table-bordered table-striped">
          <thead className="header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Datatype</th>
            </tr>
          </thead>
          <tbody>
            {concepts.map(concept => (
              <ConceptTable concept={concept} key={concept.id} />
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (fetching) {
    return (
      <div className="text-center mt-3">
        <Loader />
      </div>
    );
  }
  return (
    <div className="text-center mt-3">
      <h5>No concept found</h5>
    </div>
  );
};

ConceptList.propTypes = {
  fetching: PropTypes.bool.isRequired,
  concepts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};
export default ConceptList;
