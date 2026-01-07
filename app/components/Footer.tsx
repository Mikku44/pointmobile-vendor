import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer className='py-4 border-t text-sm border-white/20 text-white/60'>
            <div className="flex justify-between items-center md:flex-row flex-col gap-5 container-x mx-auto">
                <div className="">
                    © CC Group Supply, Inc. All rights reserved.
                </div>

                <div className="flex gap-3 divide-accent items-center">
                    <Link to="#" className='border-r-2 px-3 border-white/50 hover:text-white/80 transition' target='_blank'>Terms</Link>
                    <Link to="#" className='border-r-2 px-3 border-white/50 hover:text-white/80 transition' target='_blank'>Privacy</Link>
                    <Link to="#" className=' px-3 border-white/50 hover:text-white/80 transition' target='_blank'>Cookie Settings</Link>
                </div>

                <div className="">
                    <div className="flex items-center gap-4">

                        {/* Address */}
                        <a
                            href="https://maps.google.com/?q=4222+Ketcham+St+Suite+17E+Elmhurst+NY+11373"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass size-11 flex items-center justify-center rounded-full
               hover:scale-105 hover:bg-white/20 transition"
                            aria-label="Address"
                        >
                            <FaMapMarkerAlt className="text-white/90" />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:salesRFID@ccgroupsupply.com"
                            className="glass size-11 flex items-center justify-center rounded-full
               hover:scale-105 hover:bg-white/20 transition"
                            aria-label="Email"
                        >
                            <FaEnvelope className="text-white/90" />
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+19295442263"
                            className="glass size-11 flex items-center justify-center rounded-full
               hover:scale-105 hover:bg-white/20 transition"
                            aria-label="Phone"
                        >
                            <FaPhoneAlt className="text-white/90" />
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    )
}
