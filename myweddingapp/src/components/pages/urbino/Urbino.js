import React from 'react';
import './Urbino.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Line from '../../atoms/line/Line';
import Image from '../../atoms/image/Image';
import {handleDrawerState} from '../../../redux/actions/drawerActions';
import { connect } from 'react-redux';

function Urbino(props) {
  return (
    <PageContainer pageName="Urbino">
        <div className='urbino'>
            <h1 className='mb-xl'>See you there!</h1>
            <div className='txt-center'>
                <p className='mb-xl mt-xl'>Urbino has a special place in our hearts and we cannot wait to celebrate our special day in this wonderful city with you!</p>
                <p className='mb-xl'>Should you need anything don’t hesitate to get in touch with us via email or via WhatsApp!</p>
                <div className='mb-xl'>
                    <p className='mb-s' style={{fontWeight: 'bold'}}>Flaminia</p>
                    <p>flaminia.mazzitelli.92@gmail.com - +44 7506961704</p>
                </div>
                <div className='mb-xl'>
                    <p className='mb-s' style={{fontWeight: 'bold'}}>Marco</p>
                    <p>marco.crociani.92@gmail.com - +44 7506961642</p>
                </div>
            </div>
            <Line type="divider" orientation="horizontal" />
            <h3 className='txt-center mt-xxl'>Need help finding an <br/> an accomodation?</h3>
            <div className='guests-info mt-xxl'>
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

export default connect(null, { handleDrawerState })(Urbino);