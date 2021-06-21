import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
function Menus() {
    return (
<ListGroup>
    <ListGroupItem tag="a" href="/" action>
        Home
    </ListGroupItem>
    <ListGroupItem tag="a" href="/add-course" action>
        ADD COURSE
    </ListGroupItem>
    <ListGroupItem tag="a" href="/view-courses" action>
        VIEW COURSE
    </ListGroupItem>
    <ListGroupItem tag="a" href="#!" action>
        ADD COURSE
    </ListGroupItem>
</ListGroup>

    )
}

export default Menus;
