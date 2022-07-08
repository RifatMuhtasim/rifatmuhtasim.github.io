import React, { useContext} from "react";
import { Use_window_resize } from "../../utility/use_window_resize";
import { Box, Paper } from "@mui/material";
import "./about_css.css";
import { Custom_btn } from "./banner";
import { TransactionsContext} from "../../contract/TransactionsContext";


export const About = () => {

  return(
    <div>
      <div>
        <Details />
      </div>
      <div id="education_list" >
        <Education/>
      </div>
    </div>
  )
}


const Details = () => {
  const [height, width] = Use_window_resize()

  return(
    <div >
      <div className="container py-1" style={{marginTop: width < 600 ? "3.5em" : "0px"}}>
      <div className="row">
        <div className="col-lg-4 col-md-4 py-3">
          <Box className="img-place wow fadeInUp" style={{ marginLeft: width < 1000 ? width < 600 ? "0%": '10%' :"30%", marginRight: width < 900 ?"0%" : "-15%", marginTop: 600 < width < 900 ? "0%": "-5%"}}>
            <img style={{objectFit: "cover", height: "23em", width: width < 600 ? "99%" : "90%", borderRadius: "2%"}} 
              src="https://i.pinimg.com/236x/ac/18/e6/ac18e6d1cc327a5d5d5a97c182a598af.jpg" alt="" />
          </Box>
        </div>

        <div className="col-lg-6 col-md-8 offset-lg-1 wow fadeInRight pt-3">
          <h1 className="fw-light">Khandokar Rifat Muhtasim</h1>
          <h5 className="fg-theme mb-3">Bootylicious Boss & Full Stack Pancake</h5>

          <p className="text-muted">
            I am myself, I am unique, I am great, I am the son of my parents, 
            I am a lazy person who by chance loves 'all-computer' and is happy that he now need not move from a place to earn money.
          </p>
          <ul className="theme-list" style={{marginLeft: "-2.5%"}}>
            <li><b>From:</b> Second London</li>
            <li><b>Lives In:</b> Like London, but better.</li>
            <li><b>Age:</b> Legal enough</li>
            <li><b>Sex:</b> Male</li>
          </ul>

          <Custom_btn />
        </div>
      </div>
    </div>
    </div>
  )
}



const Education = () => {

  return(
    <div>
      <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn py-3" data-wow-delay="0.1s">
                    <h2>Education</h2>
                </header>
                <div className="timeline">
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2019 - Present</div>
                            <h2>Shahjalal University of Science & Technology</h2>
                            <h4>Akalia, Sylhet, Bangladesh </h4>
                            <p>
                               Help me! I'm stuck in varsity and can't get out!
                            </p> 
                            <p>Hey Freshman, Run from this fucking place !!</p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2017 - 2019</div>
                            <h2>Jalalabad Cantonment Public School & College </h2>
                            <h4>Jalalabad Cantonment, Sylhet Sadar</h4>
                            <p>
                              Zombies have the right to attend this college. They've had it for centuries!
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2012 - 2017</div>
                            <h2>Jalalabad Cantonment Public School & College </h2>
                            <h4>Jalalabad Cantonment, Sylhet Sadar</h4>
                            <p>
                            Let me say no danger and no hardship ever makes me wish to get back to that high school life again.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2005 - 2011</div>
                            <h2>R. K. Lyceum School</h2>
                            <h4>Hatbond, Barlekha, Sylhet</h4>
                            <p>
                              This golden part of life began with a foggy winter morning. There were some failures. I lost my childhood. However, the seven springs did not go in vain at all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}