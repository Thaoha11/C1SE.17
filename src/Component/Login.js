import React, { Component } from 'react';
import axios from "axios";
import './login.css'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            error_email: "",
            error_pass: "",
            formError: {}
        }
        this.thaydoi = this.thaydoi.bind(this)
        this.thaydoiPass = this.thaydoiPass.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }
    componentDidMount() {
        axios
            .get("http://localhost:3000/profiles")
            .then((res) => {
                console.log(res);

            })
            .catch((error) => console.log(error));
    }

    thaydoi(e) {
        this.setState({
            email: e.target.value
        })
    }

    thaydoiPass(e) {
        this.setState({
            pass: e.target.value
        })
    }


    submitForm(e) {
        e.preventDefault();
        let flag = true;
        let { email, pass } = this.state;
        let errorSubmit = this.state.formError;
        errorSubmit.email = errorSubmit.pass = "";
        if (email == '') {
            flag = false;
            this.setState({
                error_email: "Email required."
            })
        }
        if (pass == '') {
            flag = false;
            this.setState({
                error_pass: "Pass required."
            })
        }
        if (!flag) {
            this.setState({
                formError: errorSubmit
            })
        }
        else {
            if (pass == '12345' && email == 'admin') {
                this.props.history.push('./admin');
            }

            else {
                const data = {
                    pass: this.state.pass,
                    email: this.state.email,

                };
                axios.post("http://localhost:3000/profiles", data)
                    .then(res => {
                        console.log(res)
                        this.props.history.push('/');

                    })
            }
        }


    }


    render() {
        return (
            <div className='login'>
                <h1 className='td'>LOGIN</h1>

                <form onSubmit={this.submitForm} action='./home'>
                    <div className='form-group'>
                        <label for='email' className='email' > Email</label>
                        <input id='email' type='text' name="email" value={this.state.email} onChange={this.thaydoi} />
                        <p className='note'>{this.state.error_email}</p>
                        <label for='password' className='pass' > Password</label>
                        <input id='password' type='password' name="pass" value={this.state.pass} onChange={this.thaydoiPass} />
                        <p className='note'>{this.state.error_pass}</p>
                    </div>
                    <button type='submit' className='btn' >
                        Login</button>
                    <span className='signin'>Don't have an account ?
                        <a href='/register'> Sign up</a>
                    </span>

                </form>
            </div>
        )


    }
}
export default Login;