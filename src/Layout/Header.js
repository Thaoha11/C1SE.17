import React, { Component } from 'react';
class Header extends Component {

    // renderLogin() {
    //     const isLogin = localStorage.getItem('isLogin')

    //     // console.log(isLogin)
    //     if (JSON.parse(isLogin)) {
    //         return (
    //             <div className='admin'><a href='./place' style={{ color: 'white', fontSize: "20px" }} >Place</a></div>
    //         )
    //     }
    //     else {
    //         return (
    //             <div className='admin'> <a href="/login"> Admin</a> </div>
    //         )
    //     }

    // }
    render() {
        return (
            <>
                <div className="header">
                    <div className="home-header">
                        <a>
                            <img className="logo" src="./images/fb.png" />
                        </a>
                        <ul className="menu">
                            <li>Home</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Help Center</li>

                        </ul>
                        <div className='admin'>
                            <a href='./login'>
                                My Account
                            </a>
                        </div>
                        {/* {this.renderLogin()} */}
                    </div>
                </div>
            </>
        )
    }
}
export default Header;
