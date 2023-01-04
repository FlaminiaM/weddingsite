import Home from "../components/pages/home/Home";
import Locations from '../components/pages/locations/Locations';
import Timeline from '../components/pages/timeline/Timeline';
import Gifts from "../components/pages/gifts/Gifts";
import Rsvp from "../components/pages/rsvp/Rsvp";
import ContactUs from "../components/pages/contactUs/ContactUs";

export const pages = 
{
    italian: [
        {
            id: 1,
            pageName: "homepage",
            sectionIntro: {
                showDesktopOnly: false,
                title: "Marco & Flaminia",
                subtitle: "Non vediamo l'ora di condividere <br/> il nostro giorno speciale con voi",
                pageTitleTextColor: 'white',
                // gif: Airplane,
                imageUrl: 'https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/home_qadol9_yp9mfd.jpg',
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Home,
            }
        },
        {
            id: 2,
            pageName: "locations",
            sectionIntro: {
                showDesktopOnly: false,
                title: "Save the date",
                subtitle: "Sabato 8 Luglio 2023",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/IMG-20220617-WA0013_swbasa_t9jnhm.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Locations,
            }
        },
        {
            id: 3,
            pageName: "timeline",
            sectionIntro: {
                showDesktopOnly: false,
                title: "The wedding",
                subtitle: "",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/timeline_mytswh_d4ff8h.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Timeline,
            }
        },
        {
            id: 4,
            pageName: "gifts",
            sectionIntro: {
                showDesktopOnly: false,
                title: "To our next adventure...",
                subtitle: "",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/gift_ove5ti_dkmqe5.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Gifts,
            }
        },
        {
            id: 5,
            pageName: "rsvp",
            sectionIntro: {
                showDesktopOnly: false,
                title: "We'd love to have <br/> you with us!",
                subtitle: "Sabato 8 Luglio 2023",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/rsvp_wybdkf_l0paoc.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Rsvp,
            }
        },
        {
            id: 6,
            pageName: "contactUs",
            sectionIntro: {
                showDesktopOnly: false,
                title: "Urbino",
                subtitle: "Sabato 8 Luglio 2023",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/urbino_twlusw_ujwsre.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: ContactUs,
            }
        },
    ],
    english: [
        {
            id: 1,
            pageName: "homepage",
            sectionIntro: {
                showDesktopOnly: false,
                title: "Marco & Flaminia",
                subtitle: "We can’t wait  to share our special <br/> day with you.",
                pageTitleTextColor: 'white',
                // gif: Airplane,
                imageUrl: 'https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/home_qadol9_yp9mfd.jpg',
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Home,
            }
        },
        {
            id: 2,
            pageName: "locations",
            sectionIntro: {
                showDesktopOnly: false,
                title: "Save the date",
                subtitle: "Saturday 8th July 2023",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/IMG-20220617-WA0013_swbasa_t9jnhm.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Locations,
            }
        },
        {
            id: 3,
            pageName: "timeline",
            sectionIntro: {
                showDesktopOnly: false,
                title: "The wedding",
                subtitle: "",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/timeline_mytswh_d4ff8h.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Timeline,
            }
        },
        {
            id: 4,
            pageName: "gifts",
            sectionIntro: {
                showDesktopOnly: false,
                title: "To our next adventure...",
                subtitle: "",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/gift_ove5ti_dkmqe5.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Gifts,
            }
        },
        {
            id: 5,
            pageName: "rsvp",
            sectionIntro: {
                showDesktopOnly: false,
                title: "We'd love to have <br/> you with us!",
                subtitle: "Saturday 8th July 2023",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/rsvp_wybdkf_l0paoc.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: Rsvp,
            }
        },
        {
            id: 6,
            pageName: "contactUs",
            sectionIntro: {
                showDesktopOnly: false,
                title: "Urbino",
                subtitle: "Saturday 8th July 2023",
                pageTitleTextColor: 'white',
                imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1672751907/urbino_twlusw_ujwsre.jpg"
            }, 
            sectionContent: {
                showDesktopOnly: false,
                component: ContactUs,
            }
        },
    
    ]
}

export const pagesContent = {
    italian: {
        home: <>
            <h3 className='mb-lg mt-lg'>Con gioia vi invitiamo al nostro matrimonio</h3>
            <h2 className='mb-sm mt-lg'>Sabato, 8 Luglio 2023</h2>
            <h3>ore 16:00</h3>
            <h3 className='mb-lg mt-lg'>Duomo di Urbino (PU)</h3>
            <p className='mb-xl mt-xl'>Vedi dettagli</p></>,
        locations: {
            ceremony:{
                sectionTitle:"Cerimonia", 
                venuName:"Cattedrale di Santa Maria Assunta",
                venueAddress:"Via Puccinotti, 29, 61029 <br/> Urbino (PU)",
                linkText :"Vedi dettagli"
            },
            venue:{
                sectionTitle:"Ricevimento", 
                venuName:"Ristorante Casa Londei",
                venueAddress:"Via Reforzate, 43, 61040 <br/> Sant'Ippolito (PU)",
                linkText :"Vedi dettagli"
            }
        },
        timeline:[
            {
                label:"Cerimonia",
                time:"16:00",
                icon: "church",
                position: "left"
            },
            {
                label:"Foto",
                time:"17:30",
                icon: "camera",
                position: "right"
            },
            {
                label:"Cocktail",
                time:"18:30",
                icon: "cocktail",
                position: "left"
            },
            {
                label:"Cena",
                time:"20:00",
                icon: "dinner",
                position: "right"
            },
            {
                label:"Open Bar - Party",
                time:"23:00",
                icon: "party",
                position: "left"
            },
        ],
        gifts: <>
            <h1 className='mb-xxl'>Lista nozze</h1>
            <h2 className='mb-lg'>Viaggio di nozze</h2>
            <p className='mb-md'>Festeggiare in vostra compagnia è il regalo più bello che potremmo desiderare!</p>
            <p className='mb-lg'>Se volete sorprenderci con un regalo, il nostro desiderio sarebbe un contributo per il nostro viaggio di nozze.</p>
        </>,
        contactUs:{
            intro: <> <h1 className='mb-xl txt-center'>Vi aspettiamo!</h1>
            <div className='txt-center'>
                <p className='mb-xl mt-xl'>Urbino ha un posto unico nei nostri cuori e non vediamo l'ora di condividere il nostro giorno speciale con voi in questo magico luogo!</p>
                <p className='mb-xl'>Per qualsiasi informazione potete contattarci via email o su WhatsApp!</p>
            </div></>,
            needHelp: <h3 className='txt-center mt-xxl'>Avete bisogno di aiuto <br/> per trovare un albergo?</h3>,
            guestInfo: "Informazioni utili"

            
        } 
    }, 
    english: {
        home: <>
            <h3 className='mb-lg mt-lg'>We are happy to invite you to our wedding</h3>
            <h2 className='mb-sm mt-lg'>Saturday, 8th July 2023</h2>
            <h3>at 4:00pm</h3>
            <h3 className='mb-lg mt-lg'>Duomo di Urbino (Italy)</h3>
            <p className='mb-xl mt-xl'>View details</p>
        </>,    
        locations: {
            ceremony: {
                sectionTitle:"Ceremony", 
                venuName:"Cattedrale di Santa Maria Assunta",
                venueAddress:"Via Puccinotti, 29, 61029 <br/> Urbino (PU) Italy",
                linkText :"View details"
            },
            venue:{
                sectionTitle:"Venue", 
                venuName:"Ristorante Casa Londei",
                venueAddress:"Via Reforzate, 43, 61040 <br/> Sant'Ippolito (PU) Italy",
                linkText :"View details"
            }
        },
        timeline:[
            {
                label:"Wedding Ceremony",
                time:"4:00pm",
                icon: "church",
                position: "left"
            },
            {
                label:"Photos",
                time:"5:30pm",
                icon: "camera",
                position: "right"
            },
            {
                label:"Cocktail",
                time:"6:30pm",
                icon: "cocktail",
                position: "left"
            },
            {
                label:"Dinner",
                time:"8:00pm",
                icon: "dinner",
                position: "right"
            },
            {
                label:"Open Bar - Party",
                time:"11:00pm",
                icon: "party",
                position: "left"
            },
        ],
        gifts:<><h1 className='mb-xxl'>Gifts</h1>
            <h2 className='mb-lg'>Honeymoon funds</h2>
            <p className='mb-md'>Celebrating with you on our wedding day is the greatest gift we could ask for! </p>
            <p className='mb-lg'>However, if you do wish to surprise us with a gift, a contribution towards our honeymoon would be most appreciated.</p></>,
        contactUs: {
            intro: <> <h1 className='mb-xl txt-center'>See you there!</h1>
            <div className='txt-center'>
                <p className='mb-xl mt-xl'>Urbino has a special place in our hearts and we cannot wait to celebrate our special day in this wonderful city with you!</p>
                <p className='mb-xl'>Should you need anything don’t hesitate to get in touch with us via email or via WhatsApp!</p>
            </div></>,
            needHelp: <h3 className='txt-center mt-xxl'>Need help finding <br/> an accomodation?</h3>,
            guestInfo: "Guests information"
 
        }
    }
}