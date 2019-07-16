import React from 'react';
import { Media, Button } from 'react-bootstrap';

const Post = (props) => {
    return (
        <ul className="list-unstyled">
            <Media as="li" className="shadow-sm">
                <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src="https://placeimg.com/200/200/any"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5 onClick={() => props.goDetail(props.data.id)}>{props.data.title}</h5>
                    <p>{props.data.body}</p>
                    <Button variant="primary" className="mr-1" onClick={() => props.update(props.data)}>Update</Button>
                    <Button variant="danger" onClick={() => props.remove(props.data.id)}>Remove</Button>
                </Media.Body>
            </Media>
        </ul>
    )
};

export default Post;
