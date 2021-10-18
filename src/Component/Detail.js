import React, { Component } from 'react';
import "./detail.css"
class Detail extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <>
                <div className='content'>
                    <div className='wapper'>
                        <img className='img-detail' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                        <div className='info'>
                            <ul>
                                <li>Họ tên</li>
                                <li> <i class="fas fa-envelope-open-text"></i> Email :
                                    <span> abc@gmail.com</span>

                                </li>
                                <li>
                                    <i class="fas fa-phone"></i> Điện thoại :
                                    <span> (024) 6680 5588 </span>
                                </li>
                                <li>
                                    <i class="fas fa-user"></i> Giới tính :
                                    <span> Nữ </span>
                                </li>
                                <li>
                                    <i class="fas fa-calendar-times"></i> Ngày sinh :
                                    <span> 01/01/1990</span>
                                </li>
                                <li>
                                    <i class="fas fa-home"></i> Địa chỉ :
                                    <span> Đà Nẵng</span>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default Detail;