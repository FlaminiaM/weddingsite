import React from 'react';
import './Timeline.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Icon from '../../atoms/icon/Icon';
import TimelineComponent from '../../organisms/timelineComponent/TimelineComponent';

function Timeline() {
  return (
    <PageContainer pageName="timeline">
        <h1 className='txt-center'>Wedding Timeline</h1>
        <TimelineComponent />
        {window.innerWidth > 992 ? <Icon classes="mt-xxl" name="arrow-down" width={66} height={20}  animation="bounce"/>  : null}
    </PageContainer>
  )
}

export default Timeline