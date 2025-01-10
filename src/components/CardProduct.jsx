import propTypes from 'prop-types'
import IconArrow from '/icon/icon_arrow.svg'

function CardProduct({
    title,
    image,
    content,
    newProduct,
}) {
    console.log(image, "image from post")
    return (
        <div className="card bg-base-100 w-96 h-[470px] m-1 p-5 shadow-xl relative ">
            <figure className="p-5">
                <div className="image-container rounded-xl">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                    {newProduct ? <div className="new-product-label">New Product</div> : ""}

                </div>
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title text-black">{title}</h2>
                <p className="text-black">{content}</p>
                <div className="card-actions justify-end">
                    <button><img src={IconArrow} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

CardProduct.propTypes = {
    title: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    newProduct: propTypes.bool
}
export default CardProduct