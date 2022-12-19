import React from 'react';
import './ContactUs.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Line from '../../atoms/line/Line';
import Image from '../../atoms/image/Image';
import {handleDrawerState} from '../../../redux/actions/drawerActions';
import { connect } from 'react-redux';

import { pagesContent } from '../../../data/pagesData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function ContactUs(props) {
    const content = props.isItalian ? pagesContent["italian"]["contactUs"] : pagesContent["english"]["contactUs"] ;
  return (
    <PageContainer pageName="ContactUs">
        <div className='contactUs'>
            {content.intro}
            <div className='mb-xl txt-center'>
                <p className='mb-s' style={{fontWeight: 'bold'}}>Flaminia</p>
                <div className='contactUs-contact-wrapper'>
                    <p className='contactUs-contact-wrapper-info mb-lg mt-lg'><FontAwesomeIcon size="lg" icon={faEnvelope} />flaminia.mazzitelli.92@gmail.com</p>
                    <p className='contactUs-contact-wrapper-info'><FontAwesomeIcon size="lg" icon={faPhoneAlt} />+44 7506961704</p>
                </div>
            </div>
            <div className='mb-xl txt-center'>
                <p className='mb-s' style={{fontWeight: 'bold'}}>Marco</p>
                <div className='contactUs-contact-wrapper'>
                    <p className='contactUs-contact-wrapper-info mb-lg mt-lg'><FontAwesomeIcon size="lg" icon={faEnvelope} />marco.crociani.92@gmail.com</p>
                    <p className='contactUs-contact-wrapper-info'><FontAwesomeIcon size="lg" icon={faPhoneAlt} />+44 7506961642</p>
                </div>
            </div>
            <Line type="divider" orientation="horizontal" />
            {content.needHelp}
            <div className='guests-info mt-xxl mb-lg'>
                <Image 
                    name = "luggage"
                    size = "large" 
                    type ="png"
                />
                <h4 onClick={()=> props.handleDrawerState()}>{content.guestInfo}</h4>
            </div>
        </div>
    </PageContainer>
  )
}

export default connect(null, { handleDrawerState })(ContactUs);