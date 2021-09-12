import preloader from "../../../assets/images/preloader.gif";
import css from './Preloader.module.css';
import React from "react";

let Preloader = (props) => {
    return (
        <div className={css.preloader}>
            <img src={preloader}/>
        </div>
    );
}

export default Preloader;