import React from 'react';
import photo1 from '../../../assets/qZone1.png'
import photo2 from '../../../assets/qZone2.png'
import photo3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center py-4 my-4'>
            <h4>Q-Zone</h4>
            <div>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
            </div>
        </div>
    );
};

export default QZone;