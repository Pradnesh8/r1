import React, { Component } from 'react';
import Moment from 'react-moment';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
     Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
        function RenderComments({comments, addComment, dishId}) {
            if (comments != null)
                return(
                    <div>{
                        comments.map((comment =>{
                            return (
                            <ul className="list-unstyled">
                            <li key={comment.id}></li>
                            <li className="list-unstyled mt-4">{comment.comment}</li>
                            <li className="list-unstyled mt-4">-- {comment.author}, <Moment format='MMM DD, YYYY'>{comment.date}</Moment></li>
                            </ul>    
                        );
                    }))}
                        <CommentForm dishId={dishId} addComment={addComment} />   
                    </div>
                );
            else
                return(
                    <div></div>
                );
        }
        
        class CommentForm extends Component{
            constructor(props){
                super(props);

                this.toggleModal = this.toggleModal.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.state = {
                    isNavOpen: false,
                    isModalOpen: false
                };
            }
              toggleModal() {
                this.setState({
                  isModalOpen: !this.state.isModalOpen
                });
              }
        
              handleSubmit(values) {
                  this.toggleModal();
                  this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
                // event.preventDefault();
              }
            
            render(){
                return(
                    <div>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submit Comment</Button>                        
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                            <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}><strong>Rating</strong></Label>
                                <Control.select model=".rating" name="rating" className="form-control m-2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" className="m-2">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Name"
                                        className="form-control m-2"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control m-2" />
                            </Row>
                            <Row className="form-group">
                                <Col md={2}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                );
            }
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
                        <RenderComments comments={props.comments} dishId={props.dish.id} addComment={props.addComment} />
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