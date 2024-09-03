import Link from "next/link"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <Link href={"/auth/login"}>
          <button className="border-2 p-3 w-[200px] rounded-lg font-semibold text-lg bg-green-500 text-white">
            Get Started
          </button>
        </Link>
    </div>
  )
}

export default Homepage