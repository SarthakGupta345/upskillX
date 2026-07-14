import React from 'react'

const FooterPage = () => {
  const linksCompany = ['About us', 'Careers', 'Contact us', 'Blog']
  const linksLearn = ['Get the app', 'Teach on here', 'Help and Support', 'Affiliate']
  const linksLegal = ['Terms', 'Privacy policy', 'Cookie settings', 'Sitemap']

  return (
    <footer className="w-full bg-neutral-950 text-gray-300 font-sans mt-auto border-t border-gray-900 rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        
        {/* Top Section: Link Groups Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* Group 1 */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {linksCompany.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-150">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2 */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {linksLearn.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-150">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 3 */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {linksLegal.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-150">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 4: Language Selector Dropdown Alternative Button */}
          <div className="flex md:justify-end items-start">
            <button className="flex items-center gap-2 border border-gray-700 bg-transparent hover:bg-gray-900 text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-colors duration-150">
              <span>🌐</span>
              <span>English</span>
            </button>
          </div>

        </div>

        {/* Divider line line */}
        <hr className="border-gray-900 my-6" />

        {/* Bottom Section: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            {/* Minimalist Logo Icon Symbol */}
            <span className="bg-[#a435f0] text-white font-black px-2 py-1 rounded-md text-sm shadow-md">
              P
            </span>
            <span className="text-sm font-bold text-white tracking-tight">Platform Inc.</span>
          </div>
          
          <p>© 2026 Platform, Inc. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default FooterPage