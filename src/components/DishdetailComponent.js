import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Moment from 'react-moment';

class Dishdetail extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                selectedDish: null
            }
        }
    
        renderDish(dish) {
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
        renderComments(comment){
            {
                if(comment!=null)
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

        }

        render() {
            console.log(this.props.dishdetail);
            if (this.props.dishdetail != null)
                return(
                    <div className="container">
                        <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dishdetail)}
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dishdetail.comments)}
                        </div>
                        </div>
                    </div>
                );
            else
                return(
                    <div></div>
                );
        }
}

export default Dishdetail;