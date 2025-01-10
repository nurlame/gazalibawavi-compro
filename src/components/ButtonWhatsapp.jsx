import WhatsAppIcon from '/icon/ic_baseline-whatsapp.svg'



const WhatsAppButton = () => {
    const handleClick = () => {
        const url = `https://wa.me/+628510005630` // Chat link
        window.open(url, "_blank");
    };

    return (
        <button className="btn btn-primary btn-wide"
            onClick={handleClick}><img src={WhatsAppIcon}
                alt='Gazalibawavigroup' />
            Contact Our Sales
        </button>
    );
};


export default WhatsAppButton;