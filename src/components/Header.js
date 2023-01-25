import githubLogo from '../assets/mark-github.svg';
import liLogo from '../assets/linked-in.png'

const Header = () => {
    return (
        <div className="header-container">
            <div className="name">Octavio Sifuentes</div>
            <div className="links-container">
                <a  className="github" href="https://github.com/priceymineral" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="github logo" />
                </a>
                <a  className="linked-in" href="https://www.linkedin.com/in/octavio-sifuentes/" target="_blank" rel="noreferrer">
                    <img src={liLogo} alt="linkedIn logo" />
                </a>
            </div>
        </div>

    )
}

export default Header