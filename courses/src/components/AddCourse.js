import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "./../api/bootapi";
import axios from "axios";

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add course || LearnEarn";
    }, []);

    const [course, setCourse] = useState({});

    const addc = (e) => {
        console.log(course);
        postCourse(course);
        e.preventDefault();
    }

    const postCourse = (data) => {
        return axios.post(base_url + "/" + data).then(
            (response) => {
                console.log(response);
                setCourse({});
                console.log("success");
            }, (error) => {
                console.log(error);
                console.log("error");
            }
        )
    }

    return (
        <div>
            <Fragment>
                <h1>fill course detail</h1>
                <Form onSubmit={addc}>
                    <FormGroup>
                        <label for="userId">Course Id</label>
                        <Input type="text" placeholder="Enter here" name="userId" id="userId"
                            onChange={(e) => { setCourse({ ...course, id: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="title">Course Title</label>
                        <Input type="text" placeholder="Enter title here" id="title"
                            onChange={(e) => { setCourse({ ...course, title: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="description">Course Description</label>
                        <Input type="textarea" placeholder="Enter description here" id="description" style={{ height: 200 }}
                            onChange={(e) => { setCourse({ ...course, description: e.target.value }) }} />
                    </FormGroup>
                    <Container className="text-center">
                        <Button type="submit" color="success">Add Course</Button>
                        <Button type="reset" color="warning ml-3" onClick={() => { setCourse({}); }}>clear</Button>
                    </Container>
                </Form>
            </Fragment>
        </div>
    )
}

export default AddCourse;