import React from "react";

const Gallery = () => {
    const Gallery = ["/img1.webp", "/img4.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg",];
    return (
        <section className="gallery">
            <h1>Better Beats Best</h1>
            <div className="images">
                {
                    Gallery.slice(0, 3).map((element, index) => {
                        return <img key={index} src={element} alt="gallery image" />
                    })
                }
            </div>
            <div className="images">
                {
                    Gallery.slice(5, 7).map((element, index) => {
                        return <img key={index} src={element} alt="gallery image" />
                    })
                }
            </div>
            <div className="images">
                {
                    Gallery.slice(7, 9).map((element, index) => {
                        return <img key={index} src={element} alt="gallery image" />
                    })
                }
            </div>

        </section>
    )
}
export default Gallery;