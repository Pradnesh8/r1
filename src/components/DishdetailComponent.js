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
    
    
        render(dish) {
            console.log(this.props.dish);
            if (this.props.dish != null)
                return(
                        <Card>
                        <CardBody>
                          <CardTitle>Comments</CardTitle>
                          <CardText>
                          {this.props.dish.comments.map(comment => 
                        (
                            <p>{comment.comment}<br/><br/>--{comment.author}, <Moment format='MMM DD, YYYY'>{comment.date}</Moment></p>    
                        )
                        )
                        }</CardText>
                        </CardBody>
                        </Card>
                );
            else
                return(
                    <div></div>
                );
        }
}

export default Dishdetail;