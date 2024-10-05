import React from 'react'
import { GrGithub, GrLinkedinOption } from 'react-icons/gr'
import { FaWhatsapp } from 'react-icons/fa'
const SocialLinks = () => {
    return (
        <div className='flex gap-5 text-white text-xl'>
            <a target='_blank' rel="noreferrer" href='https://github.com/kennyobey' className='border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300'><GrGithub /></a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/kehinde-obe-9305a9191/' className='border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300'><GrLinkedinOption /></a>
            {/* <a target='_blank' rel="noreferrer" href='https://web.facebook.com/Black.Vibes007' className='border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300'><GrFacebookOption /></a> */}
            <a target='_blank' rel="noreferrer" href='https://wa.me/07032867019/' className='border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300'><FaWhatsapp /></a>
        </div>
    )
}

export default SocialLinks