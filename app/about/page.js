import Image from 'next/image'
import aboutStyle from '../styles/about.module.css'
import profilePic from '../../assets/profile.png'
import Link from 'next/link'

export default function About() {
  return (
    <div className={aboutStyle.about}>
         <Image
         src={profilePic}
         alt="..."
         width={200}
         height={200}
         style={{borderRadius:"50%"}}
       />
        <div>
            <h2>Hello, it's Hichem</h2>
            <p>Full stack devollpoer</p>
            <button><Link style={{color:"white",textDecoration:"none"}} href="/projects">View projects</Link></button>
        </div>
    </div>
  )
}