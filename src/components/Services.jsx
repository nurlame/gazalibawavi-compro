import bulldozer from '../assets/bulldozer.jpg'
import crane from '../assets/crane.jpg'
import excavator from '../assets/excavator.jpg'
export default function Services() {
    return (
      <div className="p-10">
        <h2 className="text-3xl text-navy font-bold text-center mb-6">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card shadow-xl">
            <div className="card-body">
            <img src={excavator} width={250} height={250} />
              <h3 className="card-title">Excavator</h3>
              <p>Alat berat untuk penggalian dan pengerukan.</p>
            </div>
          </div>
          <div className="card shadow-xl">
            <div className="card-body">
                <img src={bulldozer} width={250} height={250}/>
              <h3 className="card-title">Bulldozer</h3>
              <p>Alat berat untuk pemindahan tanah dan material.</p>
            </div>
          </div>
          <div className="card shadow-xl">
            <div className="card-body">
            <img src={crane} width={250} height={250}/>
              <h3 className="card-title">Crane</h3>
              <p>Alat berat untuk pengangkatan material berat.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  