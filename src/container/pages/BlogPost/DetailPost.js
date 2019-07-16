import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: '',
            userId: []
        }
    }
    componentDidMount() {
        let id = this.props.match.params.postId;
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(response => {
                console.log('response ', response)
                let post = response.data;
                this.setState({
                    post: {
                        title: post.title,
                        body: post.body,
                        userId: post.userId
                    }
                })
            })
    };

    render() {
        console.log(this.props)
        return (
            <Fragment>
                    <Card>
                        <Card.Img variant="top" src="https://placeimg.com/783/783/any" />
                        <Card.Body>
                            <Card.Title>{this.state.post.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.state.post.userId}</Card.Subtitle>
                            <Card.Text>{this.state.post.body}</Card.Text>
                        </Card.Body>
                    </Card>
            </Fragment>
        );
    }
}

export default DetailPost;
