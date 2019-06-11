import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailsComponent extends Component {

    renderDish(dish) {

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

    renderComments(commentsArray) {

        const comments = commentsArray.map(item => {

            const timeStamp = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(Date.parse(item.date)))

            if (item == null)
                return (<div></div>)
            else {
                return (
                    <ul className="list-unstyled">
                        <li>{item.comment}</li>
                        <li>--{item.author} , {timeStamp} </li>
                    </ul>
                )
            }
        })

        return comments
    }

    render() {

        const dish = this.props.dish

        if (dish == null) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1 align-self-center">
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default DishDetailsComponent;