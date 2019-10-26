import React from 'react';
import Moment from 'react-moment';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
   
        function RenderDish({dish}) {
            console.log(dish)
            if (dish != null)
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
        function RenderComments({comments}) {
            if (comments != null)
                return(
                    comments.map(comment => 
                        (
                            <ul className="list-unstyled">
                            <li className="list-unstyled mt-4">{comment.comment}</li>
                            <li className="list-unstyled mt-4">-- {comment.author}, <Moment format='MMM DD, YYYY'>{comment.date}</Moment></li>
                            </ul>    
                        )
                        )
                );
            else
                return(
                    <div></div>
                );
        }

        const DishDetail = (props) =>{
            console.log(props.dish);
            if (props.dish != null)
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
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                    </div>
                );
            else
                return(
                    <div></div>
                );
        }

export default DishDetail;