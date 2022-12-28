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
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.screen.height * 0.01;
  let vw = window.screen.width * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.screen.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let vw = window.screen.width * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  });

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
