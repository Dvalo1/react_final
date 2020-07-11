import React from 'react'
import axios from 'axios';

// Register page (Simple form, no validations)
const PATH_BASE = "https://gorest.co.in/public-api/users";
const AUTH_TOKEN = "?_format=json&access-token=lU9aBDvir17m3GFfbv73ht2HlMvi7GK21_Ys";

class Register extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        email: '',
        username: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState({[fieldName]: fleldVal});
    }
    
    handleClick = (event) => {
        console.log(AUTH_TOKEN)
        const payload = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
         };
         console.log("PAYLOAD", payload)
         axios 
         .post(`${PATH_BASE}/${AUTH_TOKEN}`, {
           username: payload.username,
           email: payload.email,
           password: payload.password,
         })
         .then(response => {
           console.log('response', response);
         })
         .catch(error => {
           console.log('An error occurred:', error.response);
         });
        


    };
    render() {
        return (
        <div className="str_authentication">
            <div className="str_auth_wrapper">
                <input type="text" name="email" placeholder="E-Mail" required onChange={this.handleChange} />
            <br/>
                <input type="text" name="username" placeholder="Username" required onChange={this.handleChange} />
            <br/>
                <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
            <br/>
                <input type="submit" value="Sign Up" onClick={(event) => this.handleClick(event)} />

            </div>
        </div>
        );
    }

};


export default Register;