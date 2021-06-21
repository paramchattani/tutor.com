import React from 'react'
import {Jumbotron,Container,Button} from 'reactstrap'
function Home() {
    return (
        <div>
            
        <Jumbotron className="text-center">
        <h1>TUTOR.com</h1>
        <p>
            A vast variety of courses from the best tutors around the world
        </p>
        <Container>
            <Button color="primary">Start E-Learning</Button>
        </Container>
        </Jumbotron>
        </div>
    )
}

export default Home
