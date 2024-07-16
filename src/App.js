import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
function App() {
  return (
    <div className="App">
      {/* <Greet name= "Tamim" > Dhur ghum pay khali</Greet> */}
      {/* <Greet name = "Sabbir" />
      <Greet name = "Kodu Azad"/>
      <Welcome name ="Kodu Well Azad"></Welcome>
      <Welcome name="wellCome"/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
