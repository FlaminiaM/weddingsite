import './App.scss';
import Button from './components/atoms/button/Button';
import Icon from './components/atoms/icon/Icon';
import Image from './components/atoms/image/Image';
import Line from './components/atoms/line/Line';
import MenuContainer from './components/organisms/menuContainer/MenuContainer';

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
      <Icon name="arrow-down" size={66} animation="bounce"/> 

      <MenuContainer />
    </div>
  );
}

export default App;
