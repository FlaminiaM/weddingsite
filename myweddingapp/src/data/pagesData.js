import Home from "../components/pages/home/Home";
import Locations from '../components/pages/locations/Locations';
import Timeline from '../components/pages/timeline/Timeline';
import Gifts from "../components/pages/gifts/Gifts";
import Rsvp from "../components/pages/rsvp/Rsvp";
import Urbino from "../components/pages/urbino/Urbino";

import Airplane from '../assets/gifs/airplane.gif';

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
            imageUrl: 'https://ceremony-media.withjoy.com:443/ir/l/e5faf3a0fad83a5ba5a5f2928dbfd50a8f4c493c6d2e65f45/HzhDnFa3SzWYSKFaA8Kw_IMG_20220829_175835_606.jpg/st%3D2022-09-05T13%253A51%253A30Z%26se%3D2023-09-05T13%253A56%253A30Z%26sp%3Dr%26sv%3D2016-05-31%26sr%3Dc%26sig%3Dg3xBW2qckm8ABLOnT7yMRzXi69Lg0TOVYRNBSqFOKsw%253D',
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
            imageUrl: "https://ceremony-media.withjoy.com:443/ir/l/e5faf3a0fad83a5ba5a5f2928dbfd50a8f4c493c6d2e65f45/qSUkbzk6THyuTNpcCy7B_IMG-20220617-WA0013.jpg/st%3D2022-09-07T08%253A04%253A05Z%26se%3D2023-09-07T08%253A09%253A05Z%26sp%3Dr%26sv%3D2016-05-31%26sr%3Dc%26sig%3DcB7vlsDXLq8xcukjJmu9wSch5430wyQ%252Bg0GClxM50X0%253D"
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
            imageUrl: "https://ceremony-media.withjoy.com:443/ir/l/e5faf3a0fad83a5ba5a5f2928dbfd50a8f4c493c6d2e65f45/KKXP9oEMRUmDmKGdYEgj_20220611_090434.jpg/st%3D2022-09-07T08%253A04%253A05Z%26se%3D2023-09-07T08%253A09%253A05Z%26sp%3Dr%26sv%3D2016-05-31%26sr%3Dc%26sig%3DcB7vlsDXLq8xcukjJmu9wSch5430wyQ%252Bg0GClxM50X0%253D"
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
            pageTitleTextColor: 'black',
            imageUrl: "https://ceremony-media.withjoy.com:443/ir/l/e5faf3a0fad83a5ba5a5f2928dbfd50a8f4c493c6d2e65f45/yMN0qv5TwGBTxpU5TL0f_1%201.jpg/st%3D2022-09-07T14%253A51%253A27Z%26se%3D2023-09-07T14%253A56%253A27Z%26sp%3Dr%26sv%3D2016-05-31%26sr%3Dc%26sig%3DmYP4mYuUjX%252FWREcAdmlYTDwCiS7xJpiKxfEr3pg%252F0Pc%253D"
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
            imageUrl: "https://ceremony-media.withjoy.com:443/ir/l/e5faf3a0fad83a5ba5a5f2928dbfd50a8f4c493c6d2e65f45/6oECGZiWQWaBEiEN1Hqm_20220608_165613.jpg/st%3D2022-09-08T14%253A57%253A04Z%26se%3D2023-09-08T15%253A02%253A04Z%26sp%3Dr%26sv%3D2016-05-31%26sr%3Dc%26sig%3D7TIOCqm1jGwySpBX6TkeKRxZgLG1xVfPLUCiQ3SnBaM%253D"
        }, 
        sectionContent: {
            showDesktopOnly: false,
            component: Rsvp,
        }
    },
    {
        id: 6,
        pageName: "urbino",
        sectionIntro: {
            showDesktopOnly: false,
            title: "Urbino",
            subtitle: "Saturday 8th July 2023",
            pageTitleTextColor: 'white',
            imageUrl: "https://ceremony-media.withjoy.com:443/ir/l/e5faf3a0fad83a5ba5a5f2928dbfd50a8f4c493c6d2e65f45/1nyzJ7JQemhuGpkhGWf4_marian-luzi-NI0bY-VvMi8-unsplash.jpg/st%3D2022-09-09T10%253A57%253A01Z%26se%3D2023-09-09T11%253A02%253A01Z%26sp%3Dr%26sv%3D2016-05-31%26sr%3Dc%26sig%3DY28R%252BplQdT2qhuPa5W2XhJZmmPQMdPSEHWx143zPPzs%253D"
        }, 
        sectionContent: {
            showDesktopOnly: false,
            component: Urbino,
        }
    },

]