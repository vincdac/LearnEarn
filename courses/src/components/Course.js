import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import axios from "axios";
import base_url from "./../api/bootapi";

const Course = ({ course }) => {
    const deleteCourse = (id) => {
        return axios.delete(base_url + "/" + id).then(
            (response) => {
                alert("success");
            }, (error) => {
                alert("error");
            }
        );
    };

    return (
        <Card>
            <CardBody>
                <CardSubtitle>java course</CardSubtitle>
                <CardText>this is scratch to advance java course</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.id)
                    }}>Delete</Button>
                    <Button color="success ml-3">update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;