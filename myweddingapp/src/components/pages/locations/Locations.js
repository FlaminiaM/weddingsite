import React from 'react';
import './Locations.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Button from '../../atoms/button/Button';

function Locations() {
  return (
    <PageContainer pageName="locations">
      <h1>Locations</h1>
      <Button type="button" text="TEST" />
    </PageContainer>
  )
}

export default Locations