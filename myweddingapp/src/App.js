import './App.scss';
import Button from './components/atoms/button/Button';
import Icon from './components/atoms/icon/Icon';
import Line from './components/atoms/line/Line';
import MenuItem from './components/atoms/menuItem/MenuItem';

function App() {
  return (
    <div className="App">
      <Button type="button" text="RSVP" />
      <h1>Hello World</h1>
      <Line type="divider" orientation="horizontal" />
      <Line type="timeline" orientation="horizontal" />
      <Line type="timeline" orientation="vertical" />
      <Icon name="church" size="small"/>
      <Icon name="church" size="medium"/>
      <Icon name="church" size="large"/>
      <MenuItem url="#" text="Example"/>
    </div>
  );
}

export default App;
