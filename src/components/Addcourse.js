import React,{Fragment} from 'react'
import {Form,FormGroup,Input,Button,Container} from "reactstrap"
function Addcourse() {
    return (
        <Fragment>
            <h1>Fill Details To Add Course</h1>
            <Form>
<FormGroup>
<label for="userid">
CourseId
</label>
<Input type="text" placeholder="Enter here" name="userid" id="userid"/>
</FormGroup>
<FormGroup>
<label for="title">
Course Title
</label>
<Input type="text" placeholder="Enter here" name="title" id="title"/>
</FormGroup>
<FormGroup>
<label for="desc">
Course Description
</label>
<Input type="textarea" placeholder="Enter here" name="desc" id="desc"/>
</FormGroup>
<Container className="text-center">
    <Button>
      Add Course  
    </Button>
</Container>
            </Form>
        </Fragment>
    )
}

export default Addcourse
