import './App.css';
import Class from './components/Class';
import Props from './components/Props';
import ParentComp from './components/ParentComp';
import Array from './components/Array';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import Form from './components/Form';
import Carousel from './components/Carousel';
import slides from './components/CarouselData.json'
import Navbar from './components/Navbar';
import Details from './components/Details';
import Count from './components/Count';
import Clock from './components/Clock';
import IncrDecr from './components/IncrDecr';
import SignUpLogin from './components/SignUpLogin';
import Bmi from './components/Bmi';
import SumCalculator from './components/SumCalculator';
import AgeCalculator from './components/AgeCalculator';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <div >
      <StopWatch />
      {/* <AgeCalculator /> */}
      {/* <SumCalculator /> */}
      {/* <Bmi /> */}
      {/* <SignUpLogin /> */}
      {/* <IncrDecr /> */}
      {/* <Clock /> */}
      {/* <Count /> */}
      {/* <Details /> */}
      {/* <Navbar /> */}
      {/* <Carousel data={slides} /> */}
      {/* <Form /> */}
      {/* <Class /> */}
      {/* <Props name="virali" heroName="developer" /> */}
      {/* <ParentComp /> */}
      {/* <Array /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
    </div>
  );
}

export default App;
