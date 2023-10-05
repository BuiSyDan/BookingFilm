import React, { useState } from 'react'
import { Radio, Space, Tabs } from 'antd';
const { TabPane } = Tabs;
export default function HomeMenu(props) {
    const [state, setState] = useState({
        tabPosition: 'left',
    })

    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    }
    const { tabPosition } = state;
    return (
        <>
            <Tabs tabPosition={tabPosition}>
                <TabPane tab={<img src='https://nhadepso.com/wp-content/uploads/2023/01/nhung-hinh-anh-dep-ve-tinh-yeu_26.jpg' width={50} className='rounded-full' alt='anh tinh yeu' />} key="1">Anh tinh yeu 1</TabPane>
                <TabPane tab={<img src='https://nhadepso.com/wp-content/uploads/2023/01/nhung-hinh-anh-dep-ve-tinh-yeu_26.jpg' width={50} className='rounded-full' alt='anh tinh yeu' />} key="2">Anh tinh yeu 2</TabPane>
                <TabPane tab={<img src='https://nhadepso.com/wp-content/uploads/2023/01/nhung-hinh-anh-dep-ve-tinh-yeu_26.jpg' width={50} className='rounded-full' alt='anh tinh yeu' />} key="3">Anh tinh yeu 3</TabPane>

            </Tabs>
        </>
    )
}
