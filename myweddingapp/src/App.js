import './App.scss';
import React from 'react';
import TwoColumns from './components/layout/twoColumns/TwoColumns';
import {pages} from './data/pagesData';
import {columnLeftData} from './data/columnLeftData';
import {columnRightData} from './data/columnRightData';
import SingleColumn from './components/layout/singleColumn/SingleColumn';

function App() {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 768);
  return (
    <div className="App">
      {/* <div className='App-test'></div> */}
      {
        isDesktop 
          ? <TwoColumns pages={pages}/>
          : <SingleColumn pages = {pages}/>
      }
    </div>
  );
}

export default App;
