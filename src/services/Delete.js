import axios from 'axios';
import { OnlineRoot, RootPath } from './Config';

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot : RootPath}/${path}`)
            .then(response => {
                //   console.log('axios ',response)
                resolve(response.data)
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Delete;