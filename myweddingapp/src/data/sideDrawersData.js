import TitleWithIcon from '../components/molecules/titleWithIcon/TitleWithIcon';
import Image from '../components/atoms/image/Image';
import ceremonyMap from '../assets/images/ceremony_map.png';
export const sideDrawersData = {
    italian: {
        ceremony:{
            title:  <TitleWithIcon type="primary" sectionTitle="Dettagli Cerimonia" icon={<Image name="church" type="png" size="medium"/>}/>,
            address: {
                name: "Cattedrale di Santa Maria Assunta",
                address: <h4>Via Puccinotti, 29, 61029 <br />Urbino (PU) Marche</h4>,
                map: 'https://res.cloudinary.com/de2x5mgq7/image/upload/v1672907866/ceremony_jbmgsl.png',
                mapLink: 'https://goo.gl/maps/bPn5uL7BhtGyoiBB6'
                // map: <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4311.956096167932!2d12.633964438990498!3d43.72526038140902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cf83a653fc62f%3A0xc2281fe7252d237f!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e0!3m2!1sen!2suk!4v1668612734473!5m2!1sen!2suk" allowFullScreen=""  referrerPolicy="no-referrer-when-downgrade"></iframe>
            },
            directions: {
                title: "Come raggiungere Urbino",
                sections: [
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="Dall'estero" icon={<Image classes="ml-xl" name="plane" type="png" size="small"/>}/>,
                        content: <div className='location-info-directions-section-content'>
                            <p className='mt-md'>Rimini, Ancona e Bologna sono gli aeroporti più vicini, vi consigliamo di affittare una macchina ad uno di questi aeroporti:</p>
                            <ul className='mb-xl'>
                                <li className='mt-md mb-md'><a rel="noreferrer" target="_blank" href='https://riminiairport.com/'>Aeroporto di Rimini</a> - 57km da Urbino.</li>
                                <li className='mt-md mb-md'><a rel="noreferrer" target="_blank" href='https://www.ancona-airport.com/'>Aeroporto di Ancona</a> - 89km da Urbino.</li>
                                <li className='mt-md mb-md'><a rel="noreferrer" target="_blank" href='https://www.bologna-airport.it/benvenuto-all-aeroporto-di-bologna/?idC=62175'>Aeroporto di Bologna</a> - 178km da Urbino.</li>
                            </ul>
                        </div>
                    },
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="In Auto" icon={<Image classes="ml-xl" name="car" type="png" size="small"/>}/>,
                        content: <div className='location-info-directions-section-content'><p className='mt-lg'>Da Rimini/Bologna: prendete l’A14 in direzione Ancona, uscite a “Pesaro-Urbino” e seguite la SP423 verso Urbino per 40 minuti circa.</p><p className='mt-lg mb-xl'>Da Ancona: prendete l’A14 in direzione Bologna, uscite a “Fano” e tenete la destra per imboccare la SS73bis verso Urbino guidando per 40 minuti circa.</p></div>
                    },
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="Parcheggio" icon={<Image classes="ml-xl" name="parking" type="png" size="xsmall"/>}/>,
                        content: <div className='location-info-directions-section-content'>
                            <p className='mt-md mb-xl'>Urbino si trova su un colle molto ripido con divieto di accesso al centro storico in auto. I parcheggi a pagamento offrono l’accesso più facile al centro storico, e sono muniti di ascensori.</p>
                            <p className='paid-parking-info'><a rel="noreferrer" target="_blank" href='https://goo.gl/maps/MUEep6Q5bPjWrEnv5'>Borgo Mercatale</a> Prezzo: €1.50 all'ora (€12 forfettario).</p> <p>Ascensore: €0.50</p>
                            <p className='mt-lg paid-parking-info'><a rel="noreferrer" target="_blank"  href='https://goo.gl/maps/eGmAmTBaaKxU2ue69'>Centro Commerciale Santa Lucia</a> Prezzo: 1a ora €1.50, 2a ora €1.20, 3a ora e successive €1 (€10 forfettario). </p> <p>Ascensore gratuito, parcheggio coperto.</p>
                            <p className='mt-xl mb-lg'>Parcheggi gratuiti: situati fuori dalle mura, preparatevi ad affrontare discese e salite molto ripide per raggiungere il centro storico!</p>
                            <p><a rel="noreferrer" target="_blank" href='https://goo.gl/maps/ecGuhr4c9cJu4Kiq5'>Piazzale Del Popolo</a></p>
                            <p className='mb-xl mt-md'><a rel="noreferrer" target="_blank" href='https://goo.gl/maps/opY9sjbprV3FUFD6A'>Fortezza Albornoz - Parco Della Resistenza</a></p>
                            <p className='mb-xl mt-md'>Clicca <a rel="noreferrer" target="_blank" href='http://www.urbinoservizi.it/wp-content/uploads/2016/02/pianta-festa-duca.jpg'>qui</a> per la mappa dei parcheggi</p>
                        </div>
                    },
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="Trasporto pubblico" icon={<Image classes="ml-xl" name="bus" type="png" size="small"/>}/>,
                        content: <div className='location-info-directions-section-content'><p className='mt-md mb-xl'>Vi sconsigliamo di usare i transporti pubblici: nonostante sia possibile raggiungere Urbino in autobus, non ci sono collegamenti con mezzi pubblici per Casa Londei.</p></div>
                    },
                ]
            },
        },
        venue: {
            title: <TitleWithIcon type="primary" sectionTitle="Informazioni Ricevimento" icon={<Image name="dinner" type="png" size="medium"/>}/>,
            address: {
                name: "Ristorante Casa Londei",
                address: <h4>Via Reforzate, 43, 61040 <br />Sant'Ippolito (PU) Marche</h4>,
                map: 'https://res.cloudinary.com/de2x5mgq7/image/upload/v1672907867/venue_uclg8a.png',
                mapLink: 'https://goo.gl/maps/kLMtxgSd1hiTxyvVA'
                // map: <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11544.599731614304!2d12.8750038!3d43.6658515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd24043ec68b942d5!2sRistorante%20Casa%20Londei!5e0!3m2!1sen!2sit!4v1672827067955!5m2!1sen!2sit" allowFullScreen=""  referrerPolicy="no-referrer-when-downgrade"></iframe>
            },
            directions: {
                title: "Come raggiungere Casa Londei",
                sections: [
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="In auto" icon={<Image classes="ml-xl" name="car" type="png" size="small"/>}/>,
                        content: <p className='mt-md mb-xl'>Da Urbino, seguite la SS73bis in direzione Fano, uscite a "St.Ippolito" e prendete Via Serra/Strada Provinciale 5 fino a Via Reforzate.</p>
                    },
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="Parcheggio" icon={<Image classes="ml-xl" name="parking" type="png" size="xsmall"/>}/>,
                        content: <p className='mt-md mb-xl'>Parcheggio gratuito disponibile.</p>
                    },
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="Trasporto pubblico" icon={<Image classes="ml-xl" name="bus" type="png" size="small"/>}/>,
                        content: <p className='mt-md mb-xl'>Non ci sono collegamenti con mezzi pubblici per Casa Londei.</p>
                    },
                ]
            },
        }
    },
    english: {
        ceremony:{
            title:  <TitleWithIcon type="primary" sectionTitle="Ceremony Information" icon={<Image name="church" type="png" size="medium"/>}/>,
            address: {
                name: "Cattedrale di Santa Maria Assunta",
                address: <h4>Via Puccinotti, 29, 61029 <br />Urbino (PU) Italy</h4>,
                map: 'https://res.cloudinary.com/de2x5mgq7/image/upload/v1672907866/ceremony_jbmgsl.png',
                mapLink: 'https://goo.gl/maps/bPn5uL7BhtGyoiBB6'
                // map: <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4311.956096167932!2d12.633964438990498!3d43.72526038140902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cf83a653fc62f%3A0xc2281fe7252d237f!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e0!3m2!1sen!2suk!4v1668612734473!5m2!1sen!2suk" allowFullScreen=""  referrerPolicy="no-referrer-when-downgrade"></iframe>
            },
            directions: {
                title: "How to get here",
                sections: [
                    {
                        title: <TitleWithIcon type="secondary" sectionTitle="From abroad" icon={<Image classes="ml-xl" name="plane" type="png" size="small"/>}/>,
                        content: <div className='location-info-directions-section-content'>
                            <p className='mt-md'>Rimini, Ancona and Bologna are the closest airports, we suggest hiring a car at these airports. </p>
                            <ul className='mb-xl'>
                                <li className='mt-md mb-md'><a rel="noreferrer" target="_blank" href='https://riminiairport.com/en/'>Rimini airport</a> - 57km from Urbino.</li>
                                <li className='mt-md mb-md'><a rel="noreferrer" target="_blank" href='https://www.ancona-airport.com/en/'>Ancona airport</a> - 89km from Urbino.</li>
                                <li className='mt-md mb-md'><a rel="noreferrer" target="_blank" href='https://www.bologna-airport.it/en/welcome-to-bologna-airport/?idC=62175'>Bologna Airport</a> - 178km from Urbino.</li>
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
                            <p className='paid-parking-info'><a rel="noreferrer" target="_blank"  href='https://goo.gl/maps/MUEep6Q5bPjWrEnv5'>Piazza Mercatale</a> Price: €1.50 per hour (€12 for 1 day).</p> <p>Lift to city centre: €0.50</p>
                            <p className='mt-lg paid-parking-info'><a rel="noreferrer" target="_blank"  href='https://goo.gl/maps/eGmAmTBaaKxU2ue69'>Santa Lucia</a> Price: 1st hour €1.50, 2nd hour €1.20, 3rd hour onwards €1 (€10 for 1 day). </p> <p>Free lift.</p>
                            <p className='mt-xl mb-lg'>Free Parking: located outside the city walls, prepare to face steep roads to access the city centre!</p>
                            <p><a rel="noreferrer" target="_blank"  href='https://goo.gl/maps/ecGuhr4c9cJu4Kiq5'>Piazzale Del Popolo</a></p>
                            <p className='mb-xl mt-md'><a rel="noreferrer" target="_blank"  href='https://goo.gl/maps/opY9sjbprV3FUFD6A'>Parco Della Resistenza</a></p>
                            <p className='mb-xl mt-md'>Check the parking map <a rel="noreferrer" target="_blank" href='http://www.urbinoservizi.it/wp-content/uploads/2016/02/pianta-festa-duca.jpg'>here</a></p>
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
                address: <h4>Via Reforzate, 43, 61040 <br />Sant'Ippolito (PU) Italy</h4>,
                map: 'https://res.cloudinary.com/de2x5mgq7/image/upload/v1672907867/venue_uclg8a.png',
                mapLink: 'https://goo.gl/maps/kLMtxgSd1hiTxyvVA'

                // map: <iframe title='ceremonyMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11544.599731614304!2d12.8750038!3d43.6658515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd24043ec68b942d5!2sRistorante%20Casa%20Londei!5e0!3m2!1sen!2sit!4v1672827067955!5m2!1sen!2sit" allowFullScreen=""  referrerPolicy="no-referrer-when-downgrade"></iframe>
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
            }
        }
    }
}