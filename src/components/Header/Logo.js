import Image from 'next/image'
import Link from 'next/link'
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark dark:text-light'>
        <div className='w-12 md-12 rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-4'>
            <Image src={profileImg} alt="Codebucks" className='w-full h-auto rounded-full' />
        </div>
       <span className='font-bold dark:font-semibold text-xl'>CodeBucks</span>
    </Link>
  )
}

export default Logo