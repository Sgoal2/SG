import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery 
        query={graphql`
            query profileImage {
                file(relativePath: { eq: "mahipat-bike.jpg" }){
                    childImageSharp {
                        sizes(maxWidth: 250, maxHeight: 350) {
                        ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        `}
        render={data => (    
            <section id="header">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="col-12">
                            <div className="card bg-dark shadow-lg">
                            <div className="card-body bg-warning about">
                                <div className="row">
                                <div className="col-md-3 col-xs-12 d-flex justify-content-center">
                                    <Img  sizes={data.file.childImageSharp.sizes} src={data.file.childImageSharp.sizes.src}  className="shadow-lg p-2 photo" alt="Sagie Gelbhauer" />
                                </div>
                                <div className="col-md-9 col-xs-12 about-text">
                                    <h1 className="card-text text-black">Hi, I'm Sagie Gelbhauer</h1>
                                    <h4 className="card-text text-black">Full stack developer</h4>
                                    <hr/>
                                    <h4>
                                    <div>
                                        <a title="Github" href="https://github.com/Sgoal2" className="card-link text-black"><i className="fa fa-github" /></a>
                                        <a title="Twitter" href="https://twitter.com/sagg227" className="card-link text-black"><i className="fa fa-twitter" /></a>
                                        <a title="Email" href="mailto:sgelb2@gmail.com" className="card-link text-black"><i className="fa fa-envelope" /></a>
                                        <a title="Linkedin" href="https://www.linkedin.com/in/sagie-g/" className="card-link text-black"><i className="fa fa-linkedin" /></a>
                                        {/* <a title="Skype" href="skype:mahipat2?chat" className="card-link text-black"><i className="fa fa-skype" /></a> */}
                                    </div>

                                    </h4>
                                </div>
                                </div>
                            </div>
                            <div className="card-body bg-dark shadow-lg">
                                <h5 className="card-title">My Toolbox</h5>
                                <h2 className="card-text">Javascript, HTML5, CSS3, ReactJS, Redux, NodeJS, GraphQl, GatsbyJS, Bootstrap, DB(PostgreSQL, SQLite), Git.</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}  
    />
)
