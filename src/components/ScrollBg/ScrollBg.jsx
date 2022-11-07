import React from 'react';
import s from './ScrollBg.module.css';
import './ScrollBg';


class ScrollBg extends React.Component {
    constructor(props) {
        super(props);
        this.bgImgEl = null;
        this.start = this.start.bind(this);
    }
    start() {
        // console.log(this); 
        // this.setState({text: 'hi'});
        var that = this;
        var elId = document.querySelector('#scroll1');
        this.bgImgEl = elId.querySelector('#bgImg');

        // window.addEventListener('scroll', () => {
        //     that.bgImgEl.style.opacity = 1 - window.pageYOffset / 800;
        //     console.log(window.pageYOffset, 1 - window.pageYOffset / 800);
        //     that.bgImgEl.style.backgroundSize = 230 - (window.pageYOffset / window.innerHeight * 30) + 'vh';
        //     console.log(that.bgImgEl.style.backgroundSize);
        // });
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.showText}>Push</button>
                <p>{this.state.text}</p> */}
                <div id='scroll1'>
                    <div className={s.bgImg} id='bgImg'></div>
                    <div className={s.container}>
                        <h1>Welcome to our website</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
                            laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
                            eius.</p>
                    </div>
                </div>
            </div>
        )
    }

    // var elId = document.querySelector('#scroll1');
    // var bgImgEl = elId.querySelector('#bgImg');

    // window.addEventListener('scroll', () => {
    //     bgImgEl.style.opacity = 1 - window.pageYOffset / 800;
    //     console.log(window.pageYOffset, 1 - window.pageYOffset / 800);
    //     bgImgEl.style.backgroundSize = 230 - (window.pageYOffset / window.innerHeight * 30) + 'vh';
    //     console.log(bgImgEl.style.backgroundSize);
    // });
    // return (
    //     <div>
    // <div id='scroll1'>
    //     <div className={s.bgImg} id='bgImg'></div>
    //     <div className={s.container}>
    //         <h1>Welcome to our website</h1>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam rerum ratione delectus, blanditiis
    //             laborum amet cupiditate beatae dolorum quos alias perspiciatis ex maiores autem neque! Quisquam quod aut
    //             eius.</p>
    //     </div>
    // </div>
    //     </div>
    // );
}

export default ScrollBg;