import './App.css'
import ControllerField from './components/ControllerField/ControllerField';
import FromAction from './components/SimpleFrom/FromAction/FromAction';
import SimpleFrom from './components/SimpleFrom/SimpleFrom';
import UnControllerField from './components/UnControllerField/UnControllerField';

function App() {

  return (
    <>
      <h1>Explore React From </h1>   
      {/* <SimpleFrom></SimpleFrom>  */}
      {/* <FromAction></FromAction> */}
      {/* <ControllerField></ControllerField> */}
      <UnControllerField></UnControllerField>
    </>
  )
}

export default App;

// ControllerField