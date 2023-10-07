import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getCarouselAction } from '../../../../Redux/reducers/actions/CarouselActions';
const contentStyle = {
    height: '500px',
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
    const dispatch = useDispatch();

    //Se tu kich hoat khi component load ra
    //1 action = {type: '', data}
    //2 (Phai cao middleware)
    //callBackFuncrion(dispatch)
    useEffect(() => {
        dispatch(getCarouselAction);

    }, [])



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
