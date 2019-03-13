import React from 'react';

function About() {
    return (
        <section id="about">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="section-title">
                        <h1 className="display-5">About Me</h1>
                        <span className="animate-border ml-auto mr-auto"></span>
                    </div>
                    <blockquote className="blockquote">
                        <h5 className="card-text text-black">
                            I have always been fascinated with technology in its many forms and how it can make peoples lives better and more efficient. I have worked for many years in E-Commerce and have also recently have gone to technical school for learning full stack web development and have worked on front end and back end projects. <a href="#projects">Projects section</a>.
                        </h5>
                        {/* ince last 7 years, I have been working as full stack developer with companies in india, I have designed and developed reliable, fast, engaging & responsive websites, 
                            with strong focus on performance & responsive design using the latest technologies. check out in */}
                        <h5 className="card-text text-black">
                            If you are looking for the full stack developer with e-commerce knowledge who is eager to learn then you are in the right place
                            <a href="#contact">Let's Talk</a>
                            {/* f you are looking for the full stack developer, 
                            who will take care of all aspect of your project
                            then you are in the right place */}
                        </h5>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}

export default About;
