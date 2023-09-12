import './Option.css'

function Option({options}) {
  
    const render_options = (options || []).map( option => (
        <div key={option} className="Option">
          {option}
        </div>  ) )

  return (
    <div >{render_options}</div>
  )
}

export default Option;
