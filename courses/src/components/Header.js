import React from "react"
import { Card, CardBody } from "reactstrap";

function Header() {
    return (
        <div>
            <Card>
                <CardBody className="header">
                    <h1 className="text-center my-5">LearnEarn</h1>
                    <h4 className="text-center my-5">Learn and Earn with us...</h4>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;