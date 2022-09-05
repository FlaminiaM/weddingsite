import './App.scss';
import TwoColumns from './components/layout/twoColumns/TwoColumns';
// import Icon from './components/atoms/icon/Icon';
// import Image from './components/atoms/image/Image';
import {columnLeftData} from './data/columnLeftData';
import {columnRightData} from './data/columnRightData';
// import Line from './components/atoms/line/Line';
// import MenuContainer from './components/organisms/menuContainer/MenuContainer';

function App() {
  console.log(columnLeftData)
  return (
    <div className="App">
      <TwoColumns sectionLeftContent={columnLeftData} sectionRightContent={columnRightData}/>
      {/* <TwoColumns sectionLeftContent={<Image name="church" type="png" size="large"/>} sectionRightContent={<h1>Hello World</h1>}/> */}
      {/* <Button type="button" text="RSVP" />
      <h1>Hello World</h1>
      <Line type="divider" orientation="horizontal" />
      <Line type="timeline" orientation="horizontal" />
      <Line type="timeline" orientation="vertical" />
      <Image name="church" size="small"/>
      <Image name="church" size="medium"/>
      <Image name="church" size="large"/>
      <Icon name="arrow-down" size={66} animation="bounce"/> 

      <MenuContainer /> */}
    </div>
  );
}

export default App;
