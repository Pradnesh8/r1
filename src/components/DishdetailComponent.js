import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Moment from 'react-moment';
   
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
        function RenderComments({comment}) {
            if (comment != null)
                return(
                    comment.map(comment => 
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
            console.log(props.dishdetail);
            if (props.dishdetail != null)
                return(
                    <div className="container">
                        <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish= {props.dishdetail} />
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comment={props.dishdetail.comments} />
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