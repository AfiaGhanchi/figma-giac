import Image from 'next/image';
// import 'animate.css';
import 'animate.css/animate.min.css';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-transparent to-yellow-300">
      {/* Navbar */}
      <nav className="bg-gray-100">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <h1 className="animate__animated animate__rubberBand">
              <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="mr-5" />
            </h1>
          </div>
          <button
            className="block lg:hidden text-gray-600"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="hidden lg:flex items-center space-x-5">
            <a href="#" className="text-gray-700">About</a>
            <a href="#" className="text-gray-700">Features</a>
            <a href="#" className="text-gray-700">Pricing</a>
            <a href="#" className="text-gray-700">Gallery</a>
            <a href="#" className="text-gray-700">Team</a>
            <div className="flex items-center space-x-2">
              <Image src="/images/navb.png" alt="Nav Icon" width={50} height={50} />
              <Image src="/images/fb.png" alt="Facebook Icon" width={30} height={30} />
              <Image src="/images/twit.png" alt="Twitter Icon" width={30} height={30} />
              <Image src="/images/ins.png" alt="Instagram Icon" width={30} height={30} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="mt-5">
            <h1 className="text-4xl font-bold">
              GIVE ROBOTS <br /> A SECOND CHANCE
            </h1>
            <p className="mt-5 text-lg">
              We save 1 million robots from destruction every year and find a new home for them. Let's save the robots!
            </p>
            <Image src="/images/gets.png" alt="Get Started" width={200} height={200} className="mt-5" />
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center">
            <Image
              src="/images/robot 1.png"
              alt="Robot"
              width={400}
              height={400}
              className="animate__animated animate__bounce animate__delay-2s"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
