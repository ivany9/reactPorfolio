import { contains } from 'dom-helpers';
import React from 'react';
import {Form,Cont} from './pagesStyles';

const Contact = () => {
  return (
    
    <Cont>
      <Form>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</Form>
</Cont> 

  );
};

export default Contact;
