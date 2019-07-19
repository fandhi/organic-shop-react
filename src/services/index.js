import axios from 'axios';

const RootPath = 'http://localhost:3004';
const OnlineRoot = 'http://jsonplaceholder.typicode.com';

const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
            .then(response => {
                //   console.log('axios ',response)
                resolve(response.data)
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data)
            .then(response => {
                resolve(response.data)
            }, (err) => {
                reject(err);
                console.log('error ', err)
            })
    })
    return promise;
}

const postNewsBlog = (data) => Post('posts', false, data);

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
    postNewsBlog,
    getNewsBlog,
    getComments
}

export default API;