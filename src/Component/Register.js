import React, { Component } from 'react';
import axios from "axios";
import './register.css';
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            phone: '',
            address: '',
            error_email: "",
            error_pass: "",
            error_phone: "",
            error_address: "",
            formError: {},

        }
        this.thaydoiEmail = this.thaydoiEmail.bind(this);
        this.thaydoiPass = this.thaydoiPass.bind(this);
        this.thaydoiPhone = this.thaydoiPhone.bind(this);
        this.thaydoiAddress = this.thaydoiAddress.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    thaydoiEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    thaydoiPass(e) {
        this.setState({
            pass: e.target.value
        })
    }
    thaydoiPhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    thaydoiAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        let flag = true;
        let { email, pass, phone, address } = this.state;
        let errorSubmit = this.state.formError;
        errorSubmit.email = errorSubmit.pass = errorSubmit.phone = errorSubmit.address = "";
        console.log(123)
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
        if (phone == '') {
            flag = false;
            this.setState({
                error_phone: "Phone required."
            })
        }
        if (address == '') {
            flag = false;
            this.setState({
                error_address: "Address required."
            })
        }
        if (!flag) {
            this.setState({
                formError: errorSubmit
            })
        }
        else {
            const data = {
                pass: this.state.pass,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address

            };
            axios.post("http://localhost:3000/profiles", data)
                .then(res => {
                    console.log(res)
                    this.props.history.push('/');

                })
        }

    }


    render() {
        return (
            <div className='login'>
                <h1 className='td'>Sign in</h1>

                <form onSubmit={this.submitForm} action='./home'>
                    <div className='form-group'>
                        <label for='email' className='email'  > Email</label>
                        <input id='email' type='text' name="email" value={this.state.email} onChange={this.thaydoiEmail} />
                        <p className='note' >{this.state.error_email}</p>
                        <label for='password' className='pass'  > Password</label>
                        <input id='password' type='password' name="pass" value={this.state.pass} onChange={this.thaydoiPass} />
                        <p className='note'>{this.state.error_pass}</p>
                        <label for='phone' className='phone' > Phone</label>
                        <input id='phone' type='text' name="phone" value={this.state.phone} onChange={this.thaydoiPhone} />
                        <p className='note'>{this.state.error_phone}</p>
                        <label for='address' className='address' >Address </label>
                        <input id='address' type='text' name="address" value={this.state.address} onChange={this.thaydoiAddress} />
                        <p className='note'>{this.state.error_address}</p>

                    </div>
                    <button type='submit' className='btn' >
                        Sign in</button>
                    <span className='signin'>Have an account ?
                        <a href='/login'> Log in</a>
                    </span>

                </form>
            </div>
        )
    }
}
export default Register;