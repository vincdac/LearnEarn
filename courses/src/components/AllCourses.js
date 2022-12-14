import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";

const AllCourses = () => {

    useEffect(() => {
        document.title = "All Courses || LearnEarn";
    }, []);

    const getAllCourses = () => {
        return axios.get(base_url).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data);
            }, (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        getAllCourses();
    }, []);


    const [courses, setCourses] = useState(
        [
            { id: 123, title: "java course", description: "this is demo course" },
            { id: 123, title: "Django course", description: "this is demo course" },
            { id: 123, title: "Reactjs course", description: "this is demo course" }
        ]
    );

    const updateCourses = (id) => {
        setCourses(courses.map((c) => c.id !== id))
    }

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Courses</p>

            {courses.length > 0
                ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
                : "No courses"}
        </div>
    )
}

export default AllCourses;