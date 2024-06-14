import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="hero flex w-full flex-col md:flex-row justify-items-center content-center flex-wrap mb-8 mt-8 md:mt-0 overflow-hidden">
      <div className="h-[--hero-height] w-[--hero-width] md:w-1/2 relative md:p-4 md:order-last -mx-[5vw] md:mx-0">
        <Image
          src="/images/hero_jeremy.png"
          fill
          className="md:p-4 w-[--hero-width] md:object-contain object-cover h-full"
          alt="An image of a smiling Jeremy Hill in front of his Superman collection"
        />
      </div>
      <div className="-mt-32 md:mt-0 text-center w-full md:w-1/2 flex flex-col justify-center z-10 px-6">
        <div className="text-3xl bg-white bg-opacity-80 py-2 font-heading">
          <h1 className="text-6xl bold font-bold uppercase">Jeremy Hill</h1>
          is <br />
          an{' '}
          <Link href="https://www.linkedin.com/in/jhill83/">Engineering Manager</Link>
          , <br />a <Link href="https://github.com/Spifferiferfied">UI Engineer</Link>
          , <br />
          an{' '}
          <Link href="https://www.instagram.com/jeremyhill83/">
            Amateur Photographer
          </Link>
          , <br />
          an{' '}
          <Link href="https://morty.app/@Spifferiferfied">
            Escape Room Aficionado
          </Link>
          , <br />a <Link href="/collections">Collector of Collections</Link>.
        </div>
      </div>
    </div>
  )
}
