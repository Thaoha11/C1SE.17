import React, { Component } from 'react';
import axios from "axios";
import './admin.css';
import './userProfile.css';
class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [],
            idDelete: ''
        }
        this.renderProfiles = this.renderProfiles.bind(this);
        this.deleteProfiles = this.deleteProfiles.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e) {
        const nameInput = e.target.name;
        const value = e.target.value;
        this.setState({
            [nameInput]: value
        })
    }
    componentDidMount() {

        axios
            .get("http://localhost:3000/profiles")
            .then((res) => {
                console.log(res)
                this.setState({
                    profiles: res.data
                })

            })
            .catch((error) => console.log(error));
    }

    deleteProfiles(e) {
        let { profiles } = this.state;
        let idDelete = e.id
        console.log(idDelete)
        profiles = profiles.filter(value => value.id != e.id)
        this.setState({
            profiles
        })


    }

    renderProfiles() {
        let { profiles } = this.state;
        if (profiles.length > 0) {
            return profiles.map((value, key) => {
                return (
                    <tr>
                        <td>{value["email"]}</td>
                        <td>{value["pass"]}</td>
                        <td>{value["address"]}</td>
                        <td>{value["phone"]}</td>
                        <td>
                            <button className='btn-edit'><i class="far fa-edit"></i></button>
                            <button className='btn-delete' onClick={() => this.deleteProfiles(value)}> <i class="fa fa-trash" /></button>
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <div id="wrapper" style={{ display: 'flex' }}>

                    {/* ========== Left Sidebar Start ========== */}
                    <div className="left-side-menu">
                        <div className="slimscroll-menu" style={{ width: '260px' }}>
                            {/*- Sidemenu */}
                            <div id="sidebar-menu" >
                                <ul className="metismenu" id="side-menu">
                                    <li>
                                        <h2>Menu</h2>
                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-th-list" style={{ marginRight: '10px' }}></i>
                                            <span>Dashboard</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-users" style={{ marginRight: '10px' }}></i>
                                            <span>user profile</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-map" style={{ marginRight: '10px' }}></i>
                                            <span>map</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-bell" style={{ marginRight: '10px' }}></i>
                                            <span>notification</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-leaf" style={{ marginRight: '10px' }}></i>
                                            <span>Icon</span>
                                        </a>

                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-rocket" style={{ marginRight: '10px' }}></i>
                                            <span>UI Elements</span>
                                        </a>


                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar */}
                            <div className="clearfix" />
                        </div>
                        {/* Sidebar -left */}
                    </div>

                    <div className="content-page">
                        <div className="content">

                            <div className="container-fluid">

                                <div className="row">
                                    <div className="col-12">
                                        <div className="page-title-box">
                                            <div className="page-title-right">
                                                <ol className="breadcrumb m-0">
                                                    <li className="breadcrumb-item"><a href="">FB</a></li>
                                                    <li className="breadcrumb-item active">User Profile</li>
                                                </ol>
                                            </div>
                                            <h4 className="page-title">User Profile</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4 mx-3">
                                    <table id="customers">
                                        <tbody><tr>
                                            <th>Email</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>

                                            {this.renderProfiles()}

                                        </tbody></table>


                                </div>





                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
export default UserProfile;