import react, { Fragment, useEffect } from "react";
import './App.css';
import { Container, Row, Col } from "reactstrap";
import Home from "./components/Home";
import AddCourse from './components/AddCourse.js';
import AllCourses from './components/AllCourses.js';
import Menus from "./components/Menus";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    document.title = "Home || LearnEarn";
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Container>
          <Row>
            <Col md={4}>
              <h2>MENU</h2>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
