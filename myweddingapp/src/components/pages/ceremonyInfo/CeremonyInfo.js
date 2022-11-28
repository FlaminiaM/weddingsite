import React from 'react';
import './CeremonyInfo.scss';

import TitleWithIcon from '../../molecules/titleWithIcon/TitleWithIcon';
import Image from '../../atoms/image/Image';
import Line from '../../atoms/line/Line';
import Icon from '../../atoms/icon/Icon';


function CeremonyInfo() {
  return (
    <div className='ceremony-info'>
        <TitleWithIcon type="primary" sectionTitle="Ceremony Information" icon={<Image name="church" type="png" size="medium"/>}/>
        <div>
        <div>
        <div className='ceremony-info-address txt-center mt-xl mb-xl'>
            <h2>Santa Maria Assunta Cathedral</h2>
            <h4>Via Puccinotti, 29, 61029 <br />Urbino PU, Italy</h4>
        </div>
        <div id="ceremony-map">
            <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4311.956096167932!2d12.633964438990498!3d43.72526038140902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cf83a653fc62f%3A0xc2281fe7252d237f!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e0!3m2!1sen!2suk!4v1668612734473!5m2!1sen!2suk" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Line classes='mt-xxl mb-xl' type='divider' orientation="horizontal" />
        </div>
        <div>
        <h2 className='ceremony-info-title mb-xl'>How to get here</h2>
        <TitleWithIcon type="secondary" sectionTitle="From abroad" icon={<Image classes="ml-xl" name="plane" type="png" size="small"/>}/>
        <p className='mt-lg'>Rimini, Ancona and Bologna are the closest airports, we suggest hiring a car at these airports. </p>
        <ul className='mb-xl'>
          <li className='mt-md mb-md'><a href='https://riminiairport.com/'>Rimini airport</a> - 57km from Urbino.</li>
          <li className='mt-md mb-md'><a href='https://www.ancona-airport.com/en/'>Ancona airport</a> - 89km from Urbino.</li>
          <li className='mt-md mb-md'><a href='https://www.bologna-airport.it/en/welcome-to-bologna-airport/?idC=62175'>Bologna Airport</a> - 178km from Urbino.</li>
        </ul>
        <TitleWithIcon type="secondary" sectionTitle="By car" icon={<Image classes="ml-xl" name="car" type="png" size="small"/>}/>
        <p className='mt-lg'>From Rimini/Bologna: take the A14 southbound, take exit “Pesaro-Urbino” and take the SP423 towards Urbino for approx. 40 minutes.</p>
        <p className='mt-lg mb-xl'>From Ancona: take the A14 northbound, take exit “Fano” and keep right to take the SS73bis towards Urbino for approx. 40 minutes.</p>
        <TitleWithIcon type="secondary" sectionTitle="Parking info" icon={<Image classes="ml-xl" name="parking" type="png" size="xsmall"/>}/>
        <p className='mt-lg mb-xl'>Urbino is located on a steep hill with restricted car access to the city centre. Paid Parking provides the easiest access to the city centre with lift services.</p>
        <p className='paid-parking-info'><a href='https://goo.gl/maps/MUEep6Q5bPjWrEnv5'>Piazza Mercatale</a> Price: €1.50 per hour (€12 for 1 day).</p> <p>Lift to city centre: €0.50</p>
        <p className='mt-lg paid-parking-info'><a href='https://goo.gl/maps/eGmAmTBaaKxU2ue69'>Santa Lucia</a> Price: 1st hour €1.50, 2nd hour €1.20, 3rd hour onwards €1 (€10 for 1 day). </p> <p>Free
lift.</p>
        <p className='mt-xl mb-lg'>Free Parking: located outside the city walls, prepare to face steep roads to access the city centre!</p>
        <p><a href='https://goo.gl/maps/MUEep6Q5bPjWrEnv5'>Piazzale Del Popolo</a></p>
        <p className='mb-xl mt-md'><a href='https://goo.gl/maps/opY9sjbprV3FUFD6A'>Parco Della Resistenza</a></p>
        <p className='mb-xl mt-md'>Check the parking map <a target="_blank" href='http://www.urbinoservizi.it/wp-content/uploads/2016/02/pianta-festa-duca.jpg'>here</a></p>
        <TitleWithIcon type="secondary" sectionTitle="Public transport" icon={<Image classes="ml-xl" name="bus" type="png" size="small"/>}/>
        <p className='mt-lg mb-xl'>We wouldn't advise you to use public transports: although it is possible to reach Urbino by bus, there are no transport links to Casa Londei.</p>
        <Line classes='mt-xxl mb-xl' type='divider' orientation="horizontal" />
        </div>
        </div>
    </div>
  )
}

export default CeremonyInfo;