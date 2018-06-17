import React from 'react';

const SourceDetails = (source) => {
  const {
    source: {
      name,
      full_name,
      owner,
      description,
      extras,
    },
  } = source;
  return (
    <div className="container details">

      <section>
        <article>
          <h6>{name} Details</h6>
          <p>Source {full_name} for {owner}</p>
          <p>{description}</p>
          <p>{extras} </p>
        </article>
      </section>
    </div>

  );
};

export default SourceDetails;

