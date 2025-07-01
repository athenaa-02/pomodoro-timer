import { useEffect, useState } from 'react'
import './Master.css'

function Master(){
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() =>{
        if(!isRunning) return

        const timer = setInterval(() =>{
            if(seconds > 0){
                setSeconds((prev) => prev -1)
            } else {
                if(minutes > 0){
                    setMinutes((prev) => prev - 1)
                    setSeconds(59)
                }
                else{
                    clearInterval(timer)
                    setIsRunning(false)
                }
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [isRunning, seconds, minutes])

    const toggleTimer = () =>{
        setIsRunning((prev) => !prev)
    }

    return(
        <>
        <main>

                <div className='outerCircle' onClick={toggleTimer}>
                    <div className="innerCircle">
                        <div className="redLine">
                        </div>
                        <section className='time'>
                           <aside>{String(minutes).padStart(2, '0')}</aside>
                           <aside>:</aside>
                           <aside>{String(seconds).padStart(2, '0')}</aside>
                        </section>
                        <p className='pause'>{isRunning ? 'PAUSE' : 'RESUME'}</p>
                        <div className='positionCircle'></div>
                    </div>
                </div>
        </main>
        </>
    )
}

export default Master