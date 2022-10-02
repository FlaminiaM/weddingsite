import './App.scss';
import React from 'react';
import TwoColumns from './components/layout/twoColumns/TwoColumns';
import {pages} from './data/pagesData';
import {columnLeftData} from './data/columnLeftData';
import {columnRightData} from './data/columnRightData';
import SingleColumn from './components/layout/singleColumn/SingleColumn';

import { Provider } from 'react-redux';

import store from './store';

function App() {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 768);
  
  React.useEffect(() => {
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  });
  
  const checkDevice = () => {
    if(window.innerWidth > 768 && !isDesktop){
      setIsDesktop(true);
    } else if(window.innerWidth < 768 && isDesktop){
      setIsDesktop(false);
    }
  }

  return (
    <Provider store={store}>
      <div className="App">
        {/* <div className='App-test'></div> */}
        {
          isDesktop 
            ? <TwoColumns pages={pages}/>
            : <SingleColumn pages = {pages}/>
        }
      </div>
    </Provider>
  );
}

export default App;
