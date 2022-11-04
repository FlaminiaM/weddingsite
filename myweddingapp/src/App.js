import './App.scss';
import React from 'react';
import MainContainer from './components/layout/mainContainer/MainContainer';
import { Provider } from 'react-redux';
import {pages} from './data/pagesData';
import store from './store';
import SideDrawer from './components/organisms/sideDrawer/SideDrawer';

function App() {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 992);
  
  React.useEffect(() => {
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  });
  
  const checkDevice = () => {
    if(window.innerWidth >= 992 && !isDesktop){
      setIsDesktop(true);
    } else if(window.innerWidth < 992 && isDesktop){
      setIsDesktop(false);
    }
  }

  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer isDesktop={isDesktop} pages={pages} />
        <SideDrawer />
      </div>
    </Provider>
  );
}

export default App;
