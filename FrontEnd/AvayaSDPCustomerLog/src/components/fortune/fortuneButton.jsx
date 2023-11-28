// import { useEffect, useState } from 'react'
import Fortune from './fortune'

const FortuneButton = () => {
    // const [count, setCount] = useState(0)
    return (
    <>
    <button onClick={() => Fortune()}>
           New Fortune
    </button>
    </>
    )
    }

export default FortuneButton