import './App.scss';
import Button from './components/atoms/button/Button';
import Icon from './components/atoms/icon/Icon';
import Image from './components/atoms/image/Image';
import Line from './components/atoms/line/Line';
import MenuItem from './components/atoms/menuItem/MenuItem';
// import {ReactComponent as Arrow} from './assets/icons/arrow.svg'

function App() {
  return (
    <div className="App">
      <Button type="button" text="RSVP" />
      <h1>Hello World</h1>
      <Line type="divider" orientation="horizontal" />
      <Line type="timeline" orientation="horizontal" />
      <Line type="timeline" orientation="vertical" />
      <Image name="church" size="small"/>
      <Image name="church" size="medium"/>
      <Image name="church" size="large"/>
      <MenuItem url="#" text="Example"/>
      <Icon name="arrow-down" size={66} animation="bounce"/> 
    </div>
  );
}

export default App;
