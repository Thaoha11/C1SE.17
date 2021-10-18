import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        proFileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState == 2) {
                this.setState({ proFileImg: reader.result })
            }

        }
        reader.readAsDataURL(e.target.files[0])
    }
    render() {
        const { proFileImg } = this.state;
        return (
            <div>

                {/* body */}
                <div className="content">
                    <div className="container">
                        <h1>Face Search Engine</h1>
                        <p>FACIAL RECOGNITION SEARCH TOOL. UPLOAD YOUR PHOTO AND FIND WHERE IMAGES WITH YOUR FACE APPEAR ONLINE.</p>
                    </div>
                    <div className="upload">

                        <div className='container-1'>
                            <h2 className='heading'>Add your Images </h2>
                            <div className='img-holder'>
                                <img src={proFileImg} alt='' id='img' className='img' />
                            </div>
                            <input type='file' name='image-upload' id='input' accept='image/*' onChange={this.imageHandler} />
                            <div className='label'>
                                <label htmlFor='input' className='image-upload'>
                                    <i className='material-icons' style={{ marginRight: '5px' }} > add_photo_alternate</i>
                                    Choose your photo

                                </label>


                            </div>
                            <div className='search'>
                                <span>
                                    <i className="fas fa-search" style={{ fontSize: '20px', marginRight: '8px' }} />
                                    Search
                                </span>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}



export default Home;