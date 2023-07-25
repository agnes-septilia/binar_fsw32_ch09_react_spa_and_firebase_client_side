import React from 'react';
import Footer from '../../Component/Footer';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import {
  MdAlternateEmail
} from 'react-icons/md';
import {
  BiLogoPlayStore
} from 'react-icons/bi';

import '../../Styles/LandingPages/share.css';

function Share() {
  return (
    <div>
      <div className="background">
        <div className="container">
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '20px', marginRight: '50px' }}>
              <div className='share-title'>
                <h1>Follow Us On:</h1>
              </div>
              <div className='share-icon' style={{ color: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <MdAlternateEmail />
                <FaYoutube />
                <FaTwitter />
                <FaTelegram />
                <FaDiscord />
                <BiLogoPlayStore />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='share-form' style={{ backgroundColor:'#4E67EB'}}>
                  <h1 className='text-light'>Or drop a message :</h1>
                  <Form>
                    <FormGroup>
                      <Label for="username" style={{ color: 'white' }}>
                        Name
                      </Label>
                      <Input
                        id="username"
                        name="name"
                        placeholder="Name"
                        type="text"
                      />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                      <Label for="email" style={{ color: 'white' }}>
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="textarea" style={{ color: 'white' }}>
                        How can we help you?
                      </Label>
                      <Input
                        id="textarea"
                        name="textarea"
                        placeholder=""
                        type="textarea"
                        rows="5"
                      />
                    </FormGroup>
                    {' '}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button style={{ backgroundColor: 'blue' }}>
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Share;
