import React, { Component } from 'react';
import Post from '../../../components/Post';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: '',
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then(response => {
        //   console.log('axios ',response)
          this.setState({
              post: response.data
          })
      })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then(response => {
            // console.log(response)
            this.getPostAPI()
        }, (error) => {
            console.log('error ', error)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then(response => {
            console.log('object ', response)
            this.getPostAPI()
        })
        this.setState({
            formBlogPost: {
                userId: 1,
                id: 1,
                title: '',
                body: '',
            },
            isUpdate: false
        })
    }

    handleUpdate = (data) => {
        console.log('handleUpdate ', data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then(response => {
            console.log(response)
            this.getPostAPI()
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost}
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDataToAPI()
        }else{
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount() {
        this.getPostAPI()
    };

    
    render() {
        return (
            <div className="col-lg-9 col-md-8">
                <Card className="shadow-sm mb-1">
                    <Card.Body>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" value={this.state.formBlogPost.title} placeholder="Title" onChange={this.handleFormChange} />
                        </Form.Group>
                        <Form.Group controlId="formContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" name="body" value={this.state.formBlogPost.body} rows="3" placeholder="Input Content" onChange={this.handleFormChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Card.Body>
                </Card>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </div>
            
        );
    }
}

export default BlogPost;
