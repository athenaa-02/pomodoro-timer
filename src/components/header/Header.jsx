import ChildComponent from '../childComponent/ChildComponent'
import './Header.css'

function Header(){
    return(
        <>
        <header>
        <h1>pomodoro</h1>
        <div className="heading" >
            <ChildComponent text='pomodoro'></ChildComponent>
            <ChildComponent text='short break'></ChildComponent>
            <ChildComponent text='long break'></ChildComponent>
        </div>
        </header>
        </>
    )
}

export default Header