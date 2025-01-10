import Hero from '../../components/Hero'
import Services from './services'

export default function Home() {

    return (
        <div className='md:max-w-screen-3xl overflow-hidden'>
            <Hero />
            <Services />
        </div>
    )
}