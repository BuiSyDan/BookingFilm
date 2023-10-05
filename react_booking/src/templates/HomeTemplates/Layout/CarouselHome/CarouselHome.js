import React from 'react'
import { Carousel } from 'antd';

import { useSelector } from 'react-redux'
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
};


export default function CarouselHome() {
    const { arrImg } = useSelector(state => state.CarouselReducer)
    console.log('arrImg', arrImg)



    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img style={{ width: '100%' }}
                        src={item.hinhAnh} className='w-full opacity-0' alt={item.hinhAnh} />
                </div>
            </div>
        })
    }
    return (
        <div>
            <Carousel effect="fade">
                {renderImg()}
            </Carousel>
        </div>
    )
}
