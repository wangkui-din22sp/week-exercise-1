import "./App.css";
import Question from './Question';


function App({question,options}) {

  // const options = ["1.3km", "1.8km", "2.0km", "1.0km"];
  

  return (<div className="App">
   
    <Question question={question} options={options} />

    </div>);

} 

export default App;