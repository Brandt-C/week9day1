
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


export const TestUseState = () => {

    const [click, setClicks] = useState(0);

    const handleClick = (counter) => {
        setClicks(counter += 1)
    }

    return (
        <>
        <Button id='TestUseState'  typeof='button' variant='primary' onClick={() => {handleClick(click)} }><h1>Test:{click}</h1></Button>
        </>
    )
}

export default TestUseState;