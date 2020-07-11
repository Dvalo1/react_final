import React from 'react'
import axios from 'axios';

// Create Post page
const PATH_BASE = "https://gorest.co.in/public-api/posts";
const AUTH_TOKEN = "?_format=json&access-token=lU9aBDvir17m3GFfbv73ht2HlMvi7GK21_Ys";

class Post extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        title: '',
        body: ''
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
            title: this.state.title,
            body: this.state.body,
         };
         console.log("PAYLOAD", payload)
         axios 
         .post(`${PATH_BASE}/${AUTH_TOKEN}`, {
            title: payload.title,
            body: payload.body
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
        <div>
            <div className="str_authentication">
                <div className="str_auth_wrapper">
                    <input type="text" name="title" placeholder="Post Title" required onChange={this.handleChange} />
                <br/>
                    <input type="textarea" name="body" placeholder="Placeholder text" required onChange={this.handleChange} />
                <br/>
                    <input type="submit" value="Create Post" onClick={(event) => this.handleClick(event)} />

                </div>
            </div>
            <h4>Posts</h4>
        </div>
        );
    }

};


export default Post;