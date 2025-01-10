import propTypes from 'prop-types'
import IconArrow from '/icon/icon_arrow.svg'
import { useNavigate } from 'react-router-dom'
const Card = ({
    title,
    image,
    content,
    newProduct,
    className,
    path
}) => {
    const navigate = useNavigate()
    const handleClick = (path) => {
        navigate(`${path}`)
    }
    return (
        <div className={`flex flex-col bg-base-100 shadow-xl rounded-lg ${className} cursor-pointer`} onClick={() => handleClick(path)}>
            <div className='object-cover image-container p-3'>
                <img src={image} className="rounded w-full !object-cover " />
                {newProduct && <div className="new-product-label">New Product</div>}
            </div>
            <div className='flex flex-row p-4 items-center justify-between'>
                <div className="flex flex-col text-left w-3/4">
                    <span className="text-black text-xl font-semibold">{title}</span>
                    <span className="text-black text-base font-normal">{content}</span>

                </div>
                <div className="">
                    <button><img src={IconArrow} alt="Gazali Bawavi Group" /></button>
                </div>
            </div>

        </div>
    )

}
Card.propTypes = {
    title: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    newProduct: propTypes.bool,
    className:propTypes.string,
    path:propTypes.string.isRequired
}

export default Card