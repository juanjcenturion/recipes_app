import { useState, useEffect } from "react"

export default function Banner(){
    const [currentImage, setCurrentImage] = useState(0);
    const imgs = [
        'src/assets/Banner-1_img.jpg',
        'src/assets/Banner-2_img.jpg',
        'src/assets/Banner-3_img.png'
    ];

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrentImage((prevImage) => (prevImage + 1) % imgs.length)
        }, 5000);

        return () => clearInterval(interval)
    }, [imgs.length])
    return (
        <section className="w-full absolute grid grid-cols-1 mx-auto lg:-my-96 max-h-dvh bg-black"
            style={{
                maskImage: 'linear-gradient(to bottom, black 40%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent)'
            }}
        >
            <img
                src={imgs[currentImage]}
                className="opacity-60"
                alt=""
            />
        </section>
    )
}