import React from 'react';
import Row from '../Row/Row';
import Spinner from '../Spinner/Spinner';

const ReposList = ({ loading, error, data }) => {
  if (loading) return <Spinner id="spinner" size={52} />;
  if (error) return <h3 id="error">{error.message}</h3>;
  return (
    <div id="list">
      {data.map((props) => <Row key={props.id} {...props} />)}
    </div>
  );
};
export default ReposList;
