import Option from './Option';

function Question({question, options}) {
  return (
    <div>
      <h1>{question}</ h1>
      <Option options={options} />
       
    
    </div>
  );
}

export default Question;
