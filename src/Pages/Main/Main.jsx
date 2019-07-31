import React from 'react';
import { Button } from 'reactstrap';
import { Welcome } from '../../components';

export default function Main() {
  return (
    <React.Fragment>
      <Welcome />
      <button type="button" className="btn btn-primary">Primary</button>
      <Button color="primary">primary</Button>
    </React.Fragment>
  );
}
