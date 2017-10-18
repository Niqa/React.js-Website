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
                <div className={'mainStyle', 'container'}>
                    <h1 className={'activeTitle'}>HOME</h1>
                    <p>jkkjdshfkjfc</p>
                </div>
            )

        }
    }

    class Problems extends React.Component{
        render(){
            return (
                <div className={'mainStyle', 'container'}>
                    <h1 className={'activeTitle'}>PROBLEMS</h1>
                    <p>jkkjdshfkjfc</p>
                </div>
            )

        }
    }

    class Technologies extends React.Component{
        render(){
            return (
                <div className={'mainStyle', 'container'}>
                    <h1 className={'activeTitle'}>TECHNOLOGIES</h1>
                    <p>
                        On this page you can find fechnologies what I use to build this website!
                        Enoy!
                    </p>
                    <div className={'Freepik'}>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    <div className={'technoIcon'}>
                        <div className={'React'}></div>
                        <div className={'ReactRouter'}></div>
                        <div className={'Webpack'}></div>
                        <div className={'Css3'}></div>
                    </div>

                </div>

            )

        }
    }

    class AboutMe extends React.Component{
        render(){
            return (
                <div className={'mainStyle', 'container'}>
                    <h1 className={'activeTitle'}>ABOUT ME</h1>
                    <p>Hello! Welcome in my react website.
                    I was born in seaside in Poland. When I was young my family moved to Cracow- 750km away from home town.
                    Now I live in this beautyful, royal city place and study IT.
                    </p>
                    <img src="images/nikola.JPG" alt="author photo" className={'myPhoto'}/>
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
                        <p id="code">4<span>0</span><span>4</span></p>
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