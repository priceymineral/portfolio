import githubLogo from '../assets/images/github.svg';
import liLogo from '../assets/images/linkedin.png'

const Header = () => {
    return (
        <div className="header-container nine">
            <div className="name">Octavio Sifuentes</div>
            <div className="links-container">
                <span>
                    <a  className="github" href="https://github.com/priceymineral" target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="github logo" />
                    </a>    
                </span>
                <span>
                    <a  className="linked-in" href="https://www.linkedin.com/in/octavio-sifuentes/" target="_blank" rel="noreferrer">
                        <img src={liLogo} alt="linkedIn logo" />
                    </a>
                </span>
            </div>
        </div>

    )
}

export default Header