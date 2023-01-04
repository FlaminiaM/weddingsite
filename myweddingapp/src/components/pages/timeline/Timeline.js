import React from 'react';
import './Timeline.scss';

import { pagesContent } from '../../../data/pagesData';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Icon from '../../atoms/icon/Icon';
import TimelineComponent from '../../organisms/timelineComponent/TimelineComponent';

function Timeline({isItalian}) {
  const content = isItalian ? pagesContent["italian"]["timeline"] : pagesContent["english"]["timeline"] ;
  const title = isItalian ? "Timeline Matrimonio" : "Wedding Timeline"
  return (
    <PageContainer pageName="timeline">
        <h1 className='txt-center'>{title}</h1>
        <TimelineComponent content = {content}/>
        {window.innerWidth > 992 ? <Icon classes="mt-xxl" name="arrow-down" width={66} height={20}  animation="bounce"/>  : null}
    </PageContainer>
  )
}

export default Timeline