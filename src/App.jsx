import { Container } from 'react-bootstrap'; 
import SliderExpress from './Components/Slider/Slider';
import Component from './constants/Component';
import ChangeLang from './Context/ChangeLang';
import './style/App.scss';

function App() {
  return (
    <>
      <ChangeLang>
        <Component.NavBar />
        <div style={{ marginTop: '70px' }}>
          <SliderExpress />
        </div>

        <div className='overflow-hidden'>
        <Container fluid > 
          <Component.AboutExpress />
          <Component.AdvExpress />
          <Component.WhyExpress/>
          <Component.Express/>
          <Component.Blog/>
          <Component.Contact/>
        </Container>

        <Component.Footer /> 
        </div>
      </ChangeLang>
    </>
  );
}

export default App;
