import {useState} from 'react'

import {Container,Con,Heading,Para,Button,Paragraph} from './styledComponents'

const EvenOdd=()=>{
    const [count,setCount]=useState(0)

    const onClickButton=()=>{
        setCount(prevState=>(prevState+Math.floor(Math.random()*100)))
    }

    return(
        <Container>
            <Con>
                <Heading>Count is {count}</Heading>
                <Para>Count is {count%2===0 ? "Even" : "Odd"}</Para>
                <Button onClick={onClickButton} type="button">Increment</Button>
                <Paragraph>*Increase By Random Number Between 0 to 100</Paragraph>
            </Con>
        </Container>
    )
}

export default EvenOdd