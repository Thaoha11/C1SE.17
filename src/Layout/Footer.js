import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="icon">
                    <div className="icon-1">
                        <ul>
                            <li>
                                <i className="fas fa-search" style={{ fontSize: '35px' }} />
                                <p>Search </p>
                            </li>
                            <li>
                                <i className="fas fa-wallet" style={{ fontSize: '35px' }} />
                                <p>Pricing </p>
                            </li>
                            <li>
                                <i className="fas fa-life-ring" style={{ fontSize: '35px' }} />
                                <p>Help Center </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-1">
                        <a>
                            <img className="logo" src="./images/fb.png" />
                        </a>
                        <div className="footer-right">
                            <ul>
                                <li>About</li>
                                <li>Media</li>
                                <li>Terms of service</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-2">
                        <span> @ 2021 Facebook Finder v8.02</span>
                        <div className="footer-right1">
                            <a>Help center </a>
                            <a> Opt-Out Request</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;