import React, { Component } from 'react';


class ListProfile extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        return (
            <div>

                {/* body */}
                <div className='content'>
                    <div className='list'>
                        <img className='img-larger' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                    </div>
                    <div className='list-human' >
                        <table className='table-condensed'>
                            <thead>
                                <tr className='cart-menu'>
                                    <th>Images</th>
                                    <th>Tên Facebook</th>
                                    <th>Địa chỉ</th>
                                    <th>Link Facebook</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='detail'>
                                    <td>
                                        <img className='img-small' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                                    </td>
                                    <td>
                                        <p>Loey</p>
                                    </td>
                                    <td>
                                        <p>Quảng Nam</p>
                                    </td>
                                    <td>

                                        <p>Liên kết</p>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className='detail'>
                                    <td>
                                        <img className='img-small' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                                    </td>
                                    <td>
                                        <p>Park Chanyeol</p>
                                    </td>
                                    <td>
                                        <p>Quảng Nam</p>
                                    </td>
                                    <td>

                                        <p>Liên kết</p>
                                    </td>
                                </tr>
                            </tbody>

                        </table>



                    </div>
                </div>

            </div>





        )
    }
}
export default ListProfile;