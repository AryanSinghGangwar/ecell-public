import Navbar from '@/components/Navbar'
import Initiatives from '@/components/Initiatives'
import Events from '@/components/Events'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='bg-black'>
      <Navbar />
      <div className='flex flex-col gap-10 bg-black'>
        <Landing />
        <About />
        <Stats />
        <Initiatives />
        <Events />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
