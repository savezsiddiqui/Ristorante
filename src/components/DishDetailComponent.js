import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { comment } from 'postcss';


const RenderDish = ({ dish }) => {

    return (
        <Card key={dish.id}>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const SingleComment = ({ comment }) => {

    return (
        <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>--{comment.author}, {comment.date.substr(0, 10)}</p>
        </li>
    )
}

const RenderComments = ({ comments }) => {

    const comments1 = comments.map(comment => {
        return (
            <SingleComment comment={comment} />
        )
    })
    return (
        <ul className="list-unstyled">
            {comments1}
        </ul>
    )
}

const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1 align-self-center">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );

}

export default DishDetail;