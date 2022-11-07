import React from 'react';
import preloader from './../../../accets/images/loading-gif.gif';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={s.preloaderGif}/>
        </div>
    );
};

export default Preloader;