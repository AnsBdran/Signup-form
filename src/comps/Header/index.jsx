import { Component } from 'react';
import './Header.scss';

class Header extends Component {

    render() {
        return (
            <>
            <div className="welcome">
                <h2>Welcome back, <br/> Jenny</h2>
            </div>
            <div className="profile-pic">
                <img src="imgs/game/profile-picture/normal.png" />
            </div>
            </>
        )
    }
}

export default Header;