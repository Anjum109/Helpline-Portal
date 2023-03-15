import React from 'react';
import '../Css/Widget.css'
import WidgetOption from './WidgetOption';

const Widget = () => {
    return (
        <div className='widget'>
            <div className="widget__header">
                <h5>Spaces to follow</h5>
            </div>
            <WidgetOption />
        </div>
    );
};

export default Widget;