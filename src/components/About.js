// import Form from './Form'
const About = () => {
    return (
        <>
            <div className="subheader">About</div>
            <div className="about-container">
                <p className="about">
                    I am a software developer with a BS in Physics who transitioned from a career in nuclear power plant operations in the US Navy. <br></br> My latest experience includes working at MightyNest, where I optimized the code base to minimize dependencies,<br></br> increase maintainability/development speed and implemented WCAG changes to improve accessibility.<br></br>I would <a href="https://en.wikipedia.org/wiki/Love" target="_blank" rel="noreferrer">💖</a> to hear about what you do and see how our interests might align, please don't hesitate to reach out (<span
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