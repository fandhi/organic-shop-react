import axios from 'axios';
import Post from './Post';
import Get from './Get';
import Put from './Put';
import Delete from './Delete';

const postNewsBlog = (data) => Post('posts', false, data);

const updateNewBlog = (data, id) => Put(`posts/${id}`, false, data)

const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
    postNewsBlog,
    updateNewBlog,
    deleteNewsBlog,
    getNewsBlog,
    getComments
}

export default API;