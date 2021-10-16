import { contains } from 'dom-helpers';
import React from 'react';
import {Form,Cont} from './pagesStyles';

const Contact = () => {
  return (
    
    <Cont>
      <Form>
        Contact
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input name="name"type="text" className="form-control" placeholder="Jhon Smith"/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="name@example.com" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="10"></textarea>
    </div>
    <button type="submit" className="btn btn-danger ">Submit</button>
</Form>
</Cont> 

  );
};

export default Contact;
