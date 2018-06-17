import React from 'react';

const ConceptTable = (concept) => {
  const {
    concept: {
      id,
      concept_class,
      datatype,
      display_name,
    },
  } = concept;
  return (
    <tr>
      <td>{id}</td>
      <td>{display_name}</td>
      <td>{concept_class}</td>
      <td>{datatype}</td>
    </tr>

  );
};

export default ConceptTable;
