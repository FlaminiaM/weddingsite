import React from 'react';
import './ContactUs.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Line from '../../atoms/line/Line';
import Image from '../../atoms/image/Image';
import {handleDrawerState} from '../../../redux/actions/drawerActions';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function ContactUs(props) {
  return (
    <PageContainer pageName="ContactUs">
        <div className='contactUs'>
            <h1 className='mb-xl txt-center'>See you there!</h1>
            <div className='txt-center'>
                <p className='mb-xl mt-xl'>Urbino has a special place in our hearts and we cannot wait to celebrate our special day in this wonderful city with you!</p>
                <p className='mb-xl'>Should you need anything don’t hesitate to get in touch with us via email or via WhatsApp!</p>
            </div>
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
            <h3 className='txt-center mt-xxl'>Need help finding an <br/> an accomodation?</h3>
            <div className='guests-info mt-xxl mb-lg'>
                <Image 
                    name = "luggage"
                    size = "large" 
                    type ="png"
                />
                <h4 onClick={()=> props.handleDrawerState()}>Guests information</h4>
            </div>
        </div>
    </PageContainer>
  )
}

export default connect(null, { handleDrawerState })(ContactUs);