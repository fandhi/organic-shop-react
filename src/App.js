import './App.css';

import React, { Component, Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Header from './components/Header';
import BlogPost from './container/pages/BlogPost/BlogPost';
import DetailPost from './container/pages/BlogPost/DetailPost';
import LifeCycleComponents from './container/pages/LifeCycleComponents/LifeCycleComponents';
import Product from './container/pages/Product/Product';

class App extends Component {
    state = {
        showComponent: true
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <div className="container mt-1">
                        <div className="row">
                            <ListGroup variant="flush" className="col-lg-3 col-md-4 mb-2">
                                <ListGroup.Item action>
                                    <Link to="/">Home</Link>
                                    </ListGroup.Item>
                                <ListGroup.Item action><Link to="/product">Product</Link></ListGroup.Item>
                                <ListGroup.Item action>
                                    <Link to="/lifecycle">Lifecycle</Link>
                                </ListGroup.Item>
                            </ListGroup>
                            {/* <Product />
                        {!this.state.showComponent ?
                            null :
                            <LifeCycleComponents />
                        }
                        <div className="col-lg-9 col-md-8">
                            <BlogPost />
                        </div> */}
                            <div className="col-lg-9 col-md-8">
                                <Route exact path="/" component={BlogPost} />
                                <Route exact path="/detail-post/:postId" component={DetailPost} />
                                <Route path="/product" component={Product} />
                                <Route path="/lifecycle" component={LifeCycleComponents} />
                            </div>
                        </div>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    };
}

export default App;
