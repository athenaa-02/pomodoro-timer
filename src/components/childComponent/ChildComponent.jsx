import './ChildComponent.css'

function ChildComponent(props) {


  return (
    <>
     <button onClick={(e) =>{e.target.style.backgroundColor='rgba(248, 112, 112, 1)'}}>{props.text}</button>
    </>
  )
}

export default ChildComponent
