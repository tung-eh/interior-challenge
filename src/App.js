import Navbar from './Navbar'
import TrendingFlat from './icons/TrendingFlat'
import designerAvatar from './images/photo2.png'
import landingImg from './images/photo1.png'

const DesignerInfo = () => (
  <div className="absolute -bottom-24 right-4 md:right-8 bg-gray-900 grid grid-cols-card gap-4 w-10/12 md:w-7/12 shadow-card px-10 py-6">
    <img className="w-12 rounded-full" src={designerAvatar} alt="designer" />
    <div className="flex flex-col justify-evenly">
      <h2 className="text-sm">Aliza Webber</h2>
      <h3 className="text-xs text-gray-400">Interior designer</h3>
    </div>
    <h1 className="col-span-2 font-serif font-bold text-xl">
      Designed in 2020 by
      <br />
      Aliza Webber
    </h1>
  </div>
)

function App() {
  return (
    <div className="grid grid-rows-layout text-white min-h-screen max-w-6xl p-4 md:py-10 mx-auto">
      <div className="flex justify-between">
        <button className="group relative uppercase border font-logo text-xs leading-3 overflow-hidden p-2">
          This Interior
          <div className="group-hover:translate-x-36 transition-all duration-500 absolute -top-5 -left-12 w-10 h-20 opacity-40 bg-white transform rotate-12" />
        </button>
        <Navbar />
      </div>
      <div className="grid md:grid-cols-content gap-14 my-20 md:my-32">
        <div>
          <h1 className="font-serif text-5xl">Modern interior</h1>
          <p className="max-w-xs text-xl font-light my-8">
            A full-servic residential & commercial interior design and staging
            company offering professional organizing & eco&#8209;services.
          </p>
          <button className="group">
            Read more{' '}
            <TrendingFlat className="transform group-hover:animate-readmore  transition-all inline w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="relative mb-20">
          <img src={landingImg} alt="interior" />
          <DesignerInfo />
        </div>
      </div>
      <div className="text-center text-xs text-gray-300">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
