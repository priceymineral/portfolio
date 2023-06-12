// import Form from './Form'
const About = () => {
    return (
        <>
            <div className="subheader">About</div>
            <div className="about-container">
                <p className="about">
                    I am a software developer with a BS in Physics who transitioned from a career in nuclear power plant operations in the US Navy. <br></br>I am currently a jr back-end developer intern at TopDev.<br></br>I would <a href="https://en.wikipedia.org/wiki/Love" target="_blank" rel="noreferrer">💖</a> to hear about what you do and see how our interests might align, please don't hesitate to reach out (<span
                        style={{
                            color: "white",
                            fontSize: "20px",
                            cursor: "pointer"
                        }}
                        onClick={(e) => {
                            window.location.href = 'mailto:tudaeva@gmail.com'
                        }}>✉</span>)!
                </p>
            </div >
        </>
    )
}

export default About