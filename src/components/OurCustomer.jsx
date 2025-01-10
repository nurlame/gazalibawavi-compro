import ImageBox from "./ImageBox"

function OurCustomer() {
    const images = [
        '/images/imagePartner1.svg',
        '/images/imagePartner2.svg',
        '/images/imagePartner3.svg',
        '/images/imagePartner4.svg',
        '/images/Logo5.png',
        '/images/Logo6.png',
        '/images/Logo7.png',
    ]
    const images2 = [
        '/images/Logo8.png',
        '/images/Logo9.png',
        '/images/Logo10.png',
        '/images/Logo11.png',
        '/images/Logo12.png',
        '/images/Logo13.png',
        '/images/Logo14.png',
    ]
    const images3 = [
        '/images/Logo15.png',
        '/images/Logo16.png',
        '/images/Logo17.png',
        '/images/Logo18.png',
        '/images/Logo19.png',
        '/images/Logo20.png',
        '/images/Logo21.png',
    ]
    const images4 = [
        '/images/Logo22.png',
        '/images/Logo23.png',
        '/images/Logo24.png',
        '/images/Logo25.png',
        '/images/Logo26.png',
        '/images/Logo27.png',
        '/images/Logo28.png',
    ]
    return (

        <div className='flex flex-col'>
            <div className='flex flex-col text-black'>
                <span className='text-5xl font-semibold'> Our Customer</span>
                <span className='text-xl font-normal'>Trusted by Businesses of All Sizes and Sectors</span>
            </div>
            <div className='flex flex-wrap gap-3 pt-4 justify-between'>
                <ImageBox images={images} />
                <ImageBox images={images2} />
                <ImageBox images={images3} />
                <ImageBox images={images4} />
            </div>

        </div>



    )
}

export default OurCustomer