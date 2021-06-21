import React from 'react'
import {
Card,
CardBody,
CardTitle,
CardSubtitle,
CardText,
CardFooter,
Button,
Container
} from 'reactstrap'
function Course({course}) {
    return (
        <Card>
            <CardBody>
                <CardSubtitle>{course.title}</CardSubtitle>
                <CardText>{course.desc}</CardText>
                <Container classname="text-center">
                    <Button >
            UpdateCourse
                    </Button>
                    <Button style={{marginLeft:3}}>
                DeleteCourse
                    </Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course
