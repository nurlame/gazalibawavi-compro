import { useState, useEffect, useRef } from "react"
import { useTransition, animated } from 'react-spring'
import propTypes from 'prop-types'


function ImageBox({ images }) {
    // const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const sliderRef = useRef(null)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 2000);
    //     return () => clearInterval(interval)
    // }, [images.length])

    // const slideStyle = useSpring({
    //     from: { opacity: 0, transform: 'translateY(100%)' },
    //     to: { opacity: 1, transform: 'translateY(0)' },
    // }, []);
    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     let startPos = 0;

    //     const slide = () => {
    //       startPos -= 1; // Geser posisi 1px setiap frame
    //       if (Math.abs(startPos) >= slider.offsetWidth / 2) {
    //         startPos = 0; // Reset ke awal saat sudah setengah jalan
    //       }
    //       slider.style.transform = `translateX(${startPos}px)`;
    //       requestAnimationFrame(slide);
    //     };

    //     slide();

    //     return () => cancelAnimationFrame(slide);
    //   }, []);

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     let startPos = 0;

    //     const slide = () => {
    //         startPos -= 1; // Geser posisi ke atas 1px setiap frame
    //         if (Math.abs(startPos) >= slider.offsetHeight / 2) {
    //             startPos = 0; // Reset ke awal saat sudah setengah jalan
    //         }
    //         slider.style.transform = `translateY(${startPos}px)`;
    //         requestAnimationFrame(slide);
    //     };

    //     slide();

    //     return () => cancelAnimationFrame(slide);
    // }, []);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    const transitions = useTransition(index, {
        from: { opacity: 0, transform: "translateY(100%)" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0, transform: "translateY(-100%)" },
        config: { duration: 500 },
    });
    // const slideStyle = useSpring({
    //     from: { opacity: 0, transform: 'translateY(100%)' },
    //     to: { opacity: 1, transform: 'translateY(0)' },
    // })

    return (
        //     <div className="relative w-80 h-52 overflow-hidden border border-gray-300 rounded-lg">
        //     <div
        //       ref={sliderRef}
        //       className="flex w-max"
        //       style={{ whiteSpace: "nowrap" }}
        //     >
        //       {/* Gambar digandakan untuk menciptakan efek infinite */}
        //       {images.concat(images).map((src, index) => (
        //         <img
        //           key={index}
        //           src={src}
        //           alt={`Slide ${index + 1}`}
        //           className="w-80 h-52 object-cover"
        //         />
        //       ))}
        //     </div>
        //   </div>

        // <div className="relative w-80 h-52 overflow-hidden border border-gray-300 rounded-lg">
        //     <div
        //         ref={sliderRef}
        //         className="absolute w-full flex flex-col"
        //         style={{ whiteSpace: "nowrap" }}
        //     >
        //         {/* Gambar digandakan untuk menciptakan efek infinite */}
        //         {images.concat(images).map((src, index) => (
        //             <img
        //                 key={index}
        //                 src={src}
        //                 alt={`Slide ${index + 1}`}
        //                 className="w-full h-52 object-cover"
        //             />
        //         ))}
        //     </div>
        // </div>

        <div className="relative lg:w-80 h-52 sm:w-48 overflow-hidden border border-gray-300 rounded-lg">
            {transitions((style, i) => (
                <animated.img
                    src={images[i]}
                    alt={`Gazalibawavi ${i + 1}`}
                    style={style}
                    className="absolute w-full h-full object-contain p-6"
                />
            ))}
        </div>
    );
};

ImageBox.propTypes = {
    images: propTypes.array
}
export default ImageBox