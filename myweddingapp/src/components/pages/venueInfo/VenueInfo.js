import React from 'react';
import './VenueInfo.scss';

import TitleWithIcon from '../../molecules/titleWithIcon/TitleWithIcon';
import Image from '../../atoms/image/Image';
import Line from '../../atoms/line/Line';



function VenueInfo() {
  return (
    <div className='ceremony-info'>
        <TitleWithIcon type="primary" sectionTitle="Venue Information" icon={<Image name="dinner" type="png" size="medium"/>}/>
        <div className='ceremony-info-address txt-center mt-xl mb-xl'>
            <h2>Ristorante Casa Londei</h2>
            <h4>Via Puccinotti, 29, 61029 <br />Urbino PU, Italy</h4>
        </div>
        <div id="ceremony-map">
            <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4311.956096167932!2d12.633964438990498!3d43.72526038140902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cf83a653fc62f%3A0xc2281fe7252d237f!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e0!3m2!1sen!2suk!4v1668612734473!5m2!1sen!2suk" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Line classes='mt-xxl mb-xl' type='divider' orientation="horizontal" />
        <h2 className='ceremony-info-title mb-xl'>How to get here</h2>
        <TitleWithIcon type="secondary" sectionTitle="By car" icon={<Image classes="ml-xl" name="car" type="png" size="small"/>}/>
        <p className='mt-lg mb-xl'>From Urbino follow SS73bis towards Fano, take exit "St.Ippolito", then take Via Serra and Strada Provinciale 5 to Via Reforzate.</p>
        <TitleWithIcon type="secondary" sectionTitle="Parking info" icon={<Image classes="ml-xl" name="parking" type="png" size="xsmall"/>}/>
        <p className='mt-lg mb-xl'>Free parking available on site.</p>
        <TitleWithIcon type="secondary" sectionTitle="Public transport" icon={<Image classes="ml-xl" name="bus" type="png" size="small"/>}/>
        <p className='mt-lg mb-xl'>There are no transport links to Casa Londei.</p>
        <Line classes='mt-xxl mb-xl' type='divider' orientation="horizontal" />
    </div>
  )
}

export default VenueInfo;