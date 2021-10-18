import React, { Component } from 'react';
import './place.css'
class Place extends Component {
    render() {
        return (
            <>

                <div className='map'>
                    <select >
                        {/* <option value="0">Chọn thành phố</option> */}
                        <option value="34">Đà Nẵng</option>
                        <option value="46"> TP.HCM</option>
                        <option value="68">Hà Nội</option>

                    </select>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64667009347!2d108.1716864209382!3d16.04716590689819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1631372234849!5m2!1svi!2s" width={1140} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />

                </div>
            </>
        )
    }
}
export default Place;