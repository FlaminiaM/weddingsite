import Home from "../components/pages/home/Home";
import Locations from '../components/pages/locations/Locations';
import Timeline from '../components/pages/timeline/Timeline';
import Gifts from "../components/pages/gifts/Gifts";
import Rsvp from "../components/pages/rsvp/Rsvp";
import ContactUs from "../components/pages/contactUs/ContactUs";

export const pages = [
    {
        id: 1,
        pageName: "homepage",
        sectionIntro: {
            showDesktopOnly: false,
            title: "Marco & Flaminia",
            subtitle: "We can’t wait  to share our special <br/> day with you.",
            pageTitleTextColor: 'white',
            // gif: Airplane,
            imageUrl: 'https://res.cloudinary.com/de2x5mgq7/image/upload/v1668270990/home_qadol9.jpg',
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
            imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1668271433/IMG-20220617-WA0013_swbasa.jpg"
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
            imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1668270990/timeline_mytswh.jpg"
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
            imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1668270990/gift_ove5ti.jpg"
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
            imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1668270990/rsvp_wybdkf.jpg"
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
            imageUrl: "https://res.cloudinary.com/de2x5mgq7/image/upload/v1668270990/urbino_twlusw.jpg"
        }, 
        sectionContent: {
            showDesktopOnly: false,
            component: ContactUs,
        }
    },

]