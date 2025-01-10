import Hero from "./hero"
import Services from "./services"

export default function ExplosiveStorage() {
    return (
        <div className='md:max-w-screen-3xl overflow-hidden'>
            <Hero />
            <Services />
        </div>
    )
}