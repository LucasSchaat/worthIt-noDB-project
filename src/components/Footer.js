import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div className='footerObject'>
                    <div className='empty'></div>
                    <div className='mainBottom'>
                        <div className='bottomLinks'>About Us</div>
                        <div className='bottomLinks'>Home</div>
                        <div className='bottomLinks'>Contact Us</div>
                    </div>
                    <div className='copyright'>Copyright 2019 Worth.It. All rights reserved.</div>
                </div>
            </div>
        )
    }
}

export default Footer