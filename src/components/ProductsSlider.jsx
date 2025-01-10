import Card from "./Card"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useItemsOfProduct } from "../hooks/useItemsOfProduct"

function ProductsSlider() {
    const { itemsOfProduct } = useItemsOfProduct()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="flex flex-col">
            <span className="text-black text-left text-5xl font-semibold p-2">
                Other Products
            </span>
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                showDots={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={500}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px px-2 py-4 mt-1"

            >
                {
                    itemsOfProduct.map((e, index) => (
                        <Card
                            key={index}
                            title={e.title}
                            image={e.image}
                            content={e.content}
                            newProduct={e.newProduct}
                            path={e.path} />
                    ))
                }
            </Carousel>
        </div>

    );
};

export default ProductsSlider