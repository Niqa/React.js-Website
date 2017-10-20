import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import Media from 'react-media';

document.addEventListener('DOMContentLoaded', function(){

    class Home extends React.Component{
        render(){
            return (
                <div className={'mainStyle container'}>
                    <h1 className={'activeTitle'}>HOME</h1>
                    <p>Where I'm?</p><p className={'errorClass'}>FOLLOW ME!</p>
                    <div className={'technoIcon'}>
                        <div className={'facebook picElem'}>
                           <a className={'linkPic'} href={'https://www.facebook.com/nikola.krol.3'}></a>
                        </div>
                        <div className={'github picElem'}>
                            <a className={'linkPic'} href={'https://github.com/Niqa'}></a>

                        </div>
                        <div className={'linkedin picElem'} >
                            <a className={'linkPic'} href={'https://www.linkedin.com/in/nikola-kr%C3%B3l-a00652151/'}></a>
                        </div>
                        <div className={'wordpress picElem'}>
                            <a className={'linkPic'} href={'https://lovepeak.wordpress.com/'}></a>
                        </div>
                    </div>
                </div>

            )

        }
    }

    class Problems extends React.Component{
        render(){
            return (
                <div className={'mainStyle', 'container'}>
                    <h1 className={'activeTitle'}>PROBLEMS</h1>
                    <p>I don't have any problems :P</p>
                    <div className={'ProblemClass'}></div>
                    <div className={'falseDiv'}>
                        <p>It's funny because it's a</p> <p className={'false'}>FALSE</p>
                    </div>

                </div>
            )

        }
    }

    class Technologies extends React.Component{
        render(){
            return (
                <div className={'mainStyle container'}>
                    <h1 className={'activeTitle'}>TECHNOLOGIES</h1>
                    <p>
                        What is inside this website?
                    </p>
                    <div className={'technoIcon'}>
                        <div className={'Css3 picElem'}>
                            <p className={'picElemP'}>CSS</p>
                        </div>
                        <div className={'RWD picElem'}>
                            <p className={'picElemP'}>RWD</p>
                        </div>
                        <div className={'Html picElem'}>
                            <p className={'picElemP'}>HTML</p>
                        </div>
                    </div>
                    <div className={'technoIcon'}>
                        <div className={'React picElem'}>
                            <p className={'picElemP'}>REACT.js</p>
                        </div>
                        <div className={'ReactRouter picElem'}>
                            <p className={'picElemP'}>REACT ROUTER</p>
                        </div>
                        <div className={'Webpack picElem'}>
                            <p className={'picElemP'}>WEBPACK</p>
                        </div>
                    </div>

                </div>

            )

        }
    }

    class AboutMe extends React.Component{
        render(){
            return (
                <div className={'mainStyle container aboutBackground'}>
                    <h1 className={'activeTitle'}>ABOUT ME</h1>
                    <p>
                        Hi! I'm Nikola. I was born at seaside. I have moved to Cracow when I was a very little girl and I still live in this wonderful city of kings. Currently I'm 20 years old and studying Informatics, which is one of my main hobbies. I love hiking and I'm definitely type of a wanderer. Wilderness is my home. When I have nothing else to do, I take my beloved Sony camera and take pictures of anything that surrounds me including animals, my best life companions.
                    </p>
                    <div className={'center'}>
                        <img src="images/nikola.JPG" alt="author photo" className={'myPhoto'}/>
                    </div>
                </div>

            )

        }
    }

    class Error extends React.Component{
        render(){
            return (
                <div className={'mainStyle', 'container'}>
                    <div className={'errorClass'}>
                        <p id="error">E<span>r</span>ror</p>
                        <p id="error" className={'infoError'}>Page  not  found</p>
                        <p id="code"><span>4</span><span>0</span><span>4</span></p>
                        <div className={'village'}></div>
                    </div>
                </div>

            )

        }
    }

    //MENU
    class Template extends React.Component{
        render(){

            return (
                <div>
                    <NavBarMenu/>
                    {this.props.children}
                </div>

            )

        }
    }

    class App extends React.Component{
        render(){
            return (
                    <Router history={hashHistory}>
                        <Route path='/' component={Template}>
                            <IndexRoute component={Home}/>
                            <Route path='/problems' component={Problems}/>
                            <Route path='/technologies' component={Technologies}/>
                            <Route path='/aboutme' component={AboutMe}/>
                            <Route path='*' component={Error}/>
                        </Route>
                    </Router>

            )
        }
    }



    //////////////////////////////

    //////////////////////////////
    class MenuOn extends React.Component{
        render(){


            return (
            <div>
                <div className={'hamburger'} onClick={this.props.onClick}></div>
                <MenuList/>
            </div>
            )
        }
    }

    class MenuOff extends React.Component{
        render(){
            return <div className={'hamburger'} onClick={this.props.onClick}></div>

        }
    }

    class MobileMenu extends React.Component {
        constructor(props){
            super(props);

            this.state = {MenuOn:false};
        }
        handleTurnOffClick = () => {
            console.log('Off');
            this.setState({MenuOn:false});
        }
        handleTurnOnClick = () => {
            console.log('On');
            this.setState({MenuOn:true});
        }
        render() {
            let List;
            if (this.state.MenuOn){
                List = <MenuOn onClick={this.handleTurnOffClick}/>
            } else {
                List = <MenuOff onClick={this.handleTurnOnClick}/>
            }

            return <div>
                {List}
            </div>;
        }
    }


    class DesktopMenu extends React.Component{
        render(){
            return (
                <MenuList/>
            )
        }
    }
    class MenuList extends React.Component{
        render(){
            const activeStyle= {
                color: 'orange',
                textShadow: '0px 0px 10px rgba(255, 48, 0, 1)',
            }

            return (
                <ul className={'menuStyle'}>
                    <li className={'linkStyle'}><Link to={'/'} >HOME</Link></li>
                    <li className={'linkStyle'}><IndexLink to={'/problems'} activeStyle={activeStyle}>Problems</IndexLink></li>
                    <li className={'linkStyle'}><IndexLink to={'/technologies'} activeStyle={activeStyle}>Technologies</IndexLink></li>
                    <li className={'linkStyle'}><IndexLink to={'/aboutme'} activeStyle={activeStyle}>About Me</IndexLink></li>

                </ul>
            )
        }
    }
    //////////////////////////////

    class NavBarMenu extends React.Component{
        render(){
            return (
                <div className={'LogoStyle'}>
                    <Media query="(min-width: 1200px)">
                        {matches => matches ? (
                            <DesktopMenu/>
                        ) : (
                            <MobileMenu/>
                        )}
                    </Media>
                    <div className={"container2"}>
                        <div className={"dibe"}>React Project</div>
                        <div className={"flux"}>Web&Design</div>
                    </div>
                </div>
            )
        }
    }

    /////////////////////////////

    /////////////////////////////


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});