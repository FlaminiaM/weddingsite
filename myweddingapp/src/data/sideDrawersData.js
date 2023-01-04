import TitleWithIcon from '../components/molecules/titleWithIcon/TitleWithIcon';
import Image from '../components/atoms/image/Image';

export const sideDrawersData = {
    ceremony:{
        title:  <TitleWithIcon type="primary" sectionTitle="Ceremony Information" icon={<Image name="church" type="png" size="medium"/>}/>,
        address: {
            name: "Santa Maria Assunta Cathedral",
            address: <h4>Via Puccinotti, 29, 61029 <br />Urbino PU, Italy</h4>,
            map: <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4311.956096167932!2d12.633964438990498!3d43.72526038140902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cf83a653fc62f%3A0xc2281fe7252d237f!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e0!3m2!1sen!2suk!4v1668612734473!5m2!1sen!2suk" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        },
        directions: {
            title: "How to get here",
            sections: [
                {
                    title: <TitleWithIcon type="secondary" sectionTitle="From abroad" icon={<Image classes="ml-xl" name="plane" type="png" size="small"/>}/>,
                    content: <div className='location-info-directions-section-content'>
                        <p className='mt-md'>Rimini, Ancona and Bologna are the closest airports, we suggest hiring a car at these airports. </p>
                        <ul className='mb-xl'>
                            <li className='mt-md mb-md'><a href='https://riminiairport.com/'>Rimini airport</a> - 57km from Urbino.</li>
                            <li className='mt-md mb-md'><a href='https://www.ancona-airport.com/en/'>Ancona airport</a> - 89km from Urbino.</li>
                            <li className='mt-md mb-md'><a href='https://www.bologna-airport.it/en/welcome-to-bologna-airport/?idC=62175'>Bologna Airport</a> - 178km from Urbino.</li>
                        </ul>
                    </div>
                },
                {
                    title: <TitleWithIcon type="secondary" sectionTitle="By car" icon={<Image classes="ml-xl" name="car" type="png" size="small"/>}/>,
                    content: <div className='location-info-directions-section-content'><p className='mt-lg'>From Rimini/Bologna: take the A14 southbound, take exit “Pesaro-Urbino” and take the SP423 towards Urbino for approx. 40 minutes.</p><p className='mt-lg mb-xl'>From Ancona: take the A14 northbound, take exit “Fano” and keep right to take the SS73bis towards Urbino for approx. 40 minutes.</p></div>
                },
                {
                    title: <TitleWithIcon type="secondary" sectionTitle="Parking info" icon={<Image classes="ml-xl" name="parking" type="png" size="xsmall"/>}/>,
                    content: <div className='location-info-directions-section-content'>
                        <p className='mt-md mb-xl'>Urbino is located on a steep hill with restricted car access to the city centre. Paid Parking provides the easiest access to the city centre with lift services.</p>
                        <p className='paid-parking-info'><a href='https://goo.gl/maps/MUEep6Q5bPjWrEnv5'>Piazza Mercatale</a> Price: €1.50 per hour (€12 for 1 day).</p> <p>Lift to city centre: €0.50</p>
                        <p className='mt-lg paid-parking-info'><a href='https://goo.gl/maps/eGmAmTBaaKxU2ue69'>Santa Lucia</a> Price: 1st hour €1.50, 2nd hour €1.20, 3rd hour onwards €1 (€10 for 1 day). </p> <p>Free lift.</p>
                        <p className='mt-xl mb-lg'>Free Parking: located outside the city walls, prepare to face steep roads to access the city centre!</p>
                        <p><a href='https://goo.gl/maps/MUEep6Q5bPjWrEnv5'>Piazzale Del Popolo</a></p>
                        <p className='mb-xl mt-md'><a href='https://goo.gl/maps/opY9sjbprV3FUFD6A'>Parco Della Resistenza</a></p>
                        <p className='mb-xl mt-md'>Check the parking map <a target="_blank"  rel="noreferrer" href='http://www.urbinoservizi.it/wp-content/uploads/2016/02/pianta-festa-duca.jpg'>here</a></p>
                    </div>
                },
                {
                    title: <TitleWithIcon type="secondary" sectionTitle="Public transport" icon={<Image classes="ml-xl" name="bus" type="png" size="small"/>}/>,
                    content: <div className='location-info-directions-section-content'><p className='mt-md mb-xl'>We wouldn't advise you to use public transports: although it is possible to reach Urbino by bus, there are no transport links to Casa Londei.</p></div>
                },
            ]
        },
    },
    venue: {
        title: <TitleWithIcon type="primary" sectionTitle="Venue Information" icon={<Image name="dinner" type="png" size="medium"/>}/>,
        address: {
            name: "Ristorante Casa Londei",
            address: <h4>Via Reforzate, 43, 61040 <br />Sant'Ippolito PU, Italy</h4>,
            map: <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4311.956096167932!2d12.633964438990498!3d43.72526038140902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cf83a653fc62f%3A0xc2281fe7252d237f!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e0!3m2!1sen!2suk!4v1668612734473!5m2!1sen!2suk" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        },
        directions: {
            title: "How to get here",
            sections: [
                {
                    title: <TitleWithIcon type="secondary" sectionTitle="By car" icon={<Image classes="ml-xl" name="car" type="png" size="small"/>}/>,
                    content: <p className='mt-md mb-xl'>From Urbino follow SS73bis towards Fano, take exit "St.Ippolito", then take Via Serra and Strada Provinciale 5 to Via Reforzate.</p>
                },
                {
                    title: <TitleWithIcon type="secondary" sectionTitle="Parking info" icon={<Image classes="ml-xl" name="parking" type="png" size="xsmall"/>}/>,
                    content: <p className='mt-md mb-xl'>Free parking available on site.</p>
                },
                {
                    title: <TitleWithIcon type="secondary" sectionTitle="Public transport" icon={<Image classes="ml-xl" name="bus" type="png" size="small"/>}/>,
                    content: <p className='mt-md mb-xl'>There are no transport links to Casa Londei.</p>
                },
            ]
        },
    }
}