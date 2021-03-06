import React from 'react';
import Layout from '../Layout/Layout';
import style from './footer.module.css';
import { Row, Col, NavLink, Image } from 'react-bootstrap';
import upwork from '../../assets/img/upwork.png';
import github from '../../assets/img/github.png';
import instagram from '../../assets/img/insta.png';
import linked from '../../assets/img/linked.png';
import {Link} from 'react-scroll';

function Footer(){
   return(
      <div className={style.footer}>
         <Layout>
            <Row className='h-100'>
               <Col xs={12} md={4}>
                  <p>City Jakarta, Indonesia <br/> 089607266532 <br/> renalfrontend@gmail.com</p>
               </Col>
               <Col xs={6} md={2}>
                  <Link to='home' smooth='easeInOutCubic'>Home</Link>
                  <Link to='aboutMe' smooth='easeInOutCubic' offset={-130}>About Me</Link>
                  <Link to='work' smooth='easeInOutCubic' offset={-130}>Education</Link>
               </Col>
               <Col xs={6} md={2}>
                  <Link to='portfolio' smooth='easeInOutCubic' offset={-100}>Portfolio</Link>
                  <Link to='contact' offset={-100} smooth='easeInOutCubic'>Contact</Link>
               </Col>
               <Col xs={12} md={4}>
                  <Row className={style.iconContainer}>
                     <Col xs={2} >
                        <div className={style.a}>
                           <NavLink href='https://www.upwork.com/freelancers/~014b322a4248039dce/' target='_blank'>
                              <Image src={upwork} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={2}>
                        <div className={style.a}>
                           <NavLink href='https://github.com/reynaldysaputra' target='_blank'>
                              <Image src={github} style={{background:'white'}} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={2}>
                        <div className={style.a}>
                           <NavLink href='https://www.instagram.com/reynaldysptr/' target='_blank'>
                              <Image src={instagram} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={2}>
                        <div className={style.a}>
                           <NavLink href='https://www.linkedin.com/in/reynaldy-saputra-61330115a/' target='_blank'>
                              <Image src={linked} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={12}>
                        <div>
                           <p>Copyright ©2021 All rights reserved</p>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Layout>
      </div>
   )
}

export default Footer;