import React, { useEffect, useState } from 'react'

export const CarouselItem = ({ children, width }) => {
    // console.log('children in item: ', children)
    return (
        <div 
            className="carousel-item"
            style={{ width: width }}
        >
            {children}
        </div>
    )
}

const Carousel = ({ children }) => {
    // console.log('children carousel: ', children)

    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = newIndex => {
        if (newIndex < 0) {
            // newIndex = 0 // to make it stop at the end
            newIndex = React.Children.count(children) - 1
        } else if (newIndex >=React.Children.count(children)) {
            // newIndex = React.Children.count(children) - 1 // to make it stop
            newIndex = 0 
        }

        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1) 
        }, 6000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <div className="carousel">
            <div 
            className="inner" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            <div className="indicators">
            {/* https://freefrontend.com/css-buttons/ */}
                {/* <ul>
                    <li><a href="#"><i class="fa-brands fa-instagram instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-whatsapp whatsapp"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter twitter"></i></a></li>
                </ul> */}
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Carousel