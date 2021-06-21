import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Row,Col,Container} from 'reactstrap'
import Header from './components/Header'
import Home from './components/Home'
import Course from './components/Course'
import Allcourses from './components/Allcourses'
import './App.css';
import Addcourse from './components/Addcourse';
import Menus from './components/Menus';
//divided into ratio 1:2
function App() {
  return (<div >
    <Router>
    <Container>
<Header></Header>
      <Row>
        <Col md={4}>  
<Menus/>
         </Col>
         <Col md={8}>
           <Route path="/" component={Home} exact />
           <Route path="add-course" component={Addcourse} exact />
          <Route path="/view-courses" component={Allcourses} exact/>
         </Col>
      </Row>
    </Container>

    </Router>
    </div>
    )
  //{} outer bracket is used to write jva script nd inner bracket used to fetch js object
 }

export default App;
