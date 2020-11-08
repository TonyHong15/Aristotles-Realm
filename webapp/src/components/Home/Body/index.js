import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
class Body extends React.Component{
    
    render() {
        return(
            <div className='body'>
                <div className = 'Introduction_wrapper'>
                    <span className='intro_text'>
                        
                    </span>
                </div>
                
                <div className = 'animatedtext_wrapper'>
                    <span className='animated_text'>
                    </span>
                </div>
                <div className='body_wrapper'>
                    <div className='left_body_wrapper'>
                        <div className='register_intro_text'>
                            <div className='getting_started_text'> Getting Started </div>
                            <span className='getting_started_body_text'>
                                Welcome to Aristotle's Realm. <br>
                                </br>
                                As an unregistered user you will be able to read stories posted by writers in our community.
                                <br>
                                </br>
                                <br></br>
                                Of course, reading stories is only a small part of what we provide. Our main goal is to
                                create a community of writers that share ideas to produce amazing collaborative content.
                                <br>
                                </br>
                                <br>
                                </br>
                                Register below to write your own creative stories as well as collaborate with other users.
                            </span>
                        </div>
                        <Link className ="register_link" to={"./register"}> { /*link to registration page*/}
                            <Button className='button'>
                                <h1 className="register_text"> Create An Account</h1>
                            
                            </Button>
                        </Link>

                        <div className='wrapper'>
                            Have an Account? 
                        </div>
                            
                        <Link className='login_link'  to={"./login"}> { /*link to login page*/}
                            <Button className="button" >
                                <h1 className="register_text"> log In</h1>                          
                            </Button>
                        </Link>
                    </div>
                    <div className='right_body_wrapper'>
                        <div className="foreground">
                        </div>                       
                    </div>
                   
                    
                </div>
                
                
               
            </div>
        )
    }
}
export default Body