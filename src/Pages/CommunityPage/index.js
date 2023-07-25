import React from 'react';
import {  } from "reactstrap";

// import css
import '../../Styles/LandingPages/community.css';
import '../../Styles/LandingPages/table.css';

//import components
import Footer from '../../Component/Footer';
import Table from './table';
import CommingSoon from '../../Component/ComingSoon';

const Community = () => {
  return (
    <div className="background">
        <div className="container">
            <div style={{ display: 'flex' }}>
                <div className="table-container" style={{ flexGrow: 1}}>
                    <Table />
                </div>
                <div className='comming-soon-community' style={{ flexGrow: 0}}>
                    <CommingSoon />
                </div>
            </div>
        <Footer />
        </div>
    </div>
  );
}


export default Community;
