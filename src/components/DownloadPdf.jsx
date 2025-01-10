import propTypes from 'prop-types'
import DownloadIcon from '/icon/IconDownload.svg'

const DownloadButton = ({ fileUrl, fileName }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        link.click();
    };

    return (
        <button
            onClick={handleDownload}
            className="btn btn-outline btn-primary btn-wide text-primary items-center"
        >
            <img src={DownloadIcon} alt='Gazalibawavigroup' />Download File Product
        </button>
    );
};



DownloadButton.propTypes = {
    fileUrl: propTypes.string.isRequired,
    fileName: propTypes.string.isRequired
}
export default DownloadButton;
