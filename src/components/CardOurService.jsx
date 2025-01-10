import propTypes from 'prop-types'



function CardOurServiceArea({
    title,
    image,
    content,
}) {
    return (
        <div className='w-full h-60 flex lg:flex-row sm:flex-col sm:gap-10 text-black'>
            <img src={image} className="w-full h-auto max-w-full object-cover sm:w-1/2 sm:h-auto md:w-768 md:h-auto" alt='Gazalibawavi' />
            <div className='w-full flex flex-col'>
                <p className='font-bold text-2xl mb-1 text-black text-left'>
                    {title}
                </p>
                <ul className='list-disc text-black'>
                    {content.map((items, index) => (
                        <li className={'text-black text-left'} key={index}>{items.text}</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
CardOurServiceArea.propTypes = {
    title: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
}
export default CardOurServiceArea