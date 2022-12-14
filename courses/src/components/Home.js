import React, { useEffect } from "react";
import { Container, Button, Card } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const Home = () => {
    
    useEffect(() => {
        document.title = "Home || LearnEarn";
    }, []);

    const navigate = useNavigate();

    return(
        <div>
         <Card>
          <h1> Learn with Experts and Earn from learners</h1>
        <p>coding expert courses, enterpreneur courses, investor courses,mentor courses.</p>
        <Container>
           <Button onClick={()=>{navigate("/add-course")}} color="primary" outline>start</Button>
        </Container>
        </Card>
        </div>
    );
};

export default Home;