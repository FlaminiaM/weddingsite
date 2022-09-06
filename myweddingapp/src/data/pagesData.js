import Home from "../components/pages/home/Home";
import Locations from '../components/pages/locations/Locations';

import Airplane from '../assets/gifs/airplane.gif';

export const pages = [
    {
        id: 1,
        pageName: "homepage",
        sectionIntro: {
            showDesktopOnly: false,
            title: "Marco & Flaminia",
            subtitle: "We can’t wait  to share our special day with you.",
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
            showDesktopOnly: true,
            title: "Save the data",
            subtitle: "Saturday 8th July 2023",
            pageTitleTextColor: 'black',
            imageUrl: "https://ceremony-media.withjoy.com/ir/l/e5faf3a0fad83a5ba5a5f2928dbfd50a8f4c493c6d2e65f45/iw8W1jt8Qeah0NyRTA00_20220616_203100.jpg/st%3D2022-09-05T08%253A18%253A11Z%26se%3D2023-09-05T08%253A23%253A11Z%26sp%3Dr%26sv%3D2016-05-31%26sr%3Dc%26sig%3DRspZsaoycrc7ibGpJTX9WUh98StTfzTiT%252FUaZkMVZAo%253D"
        }, 
        sectionContent: {
            showDesktopOnly: false,
            component: Locations,
        }
    },
]