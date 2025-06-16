import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Third Party Disclaimer */}
      <div className="bg-teal-900 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-bold text-sm mb-2">THIRD PARTY LINK DISCLAIMER</h3>
          <p className="text-xs leading-relaxed">
            LINKED WEBSITES ARE NOT UNDER THE CONTROL OF TROPICAL FINANCIAL CREDIT UNION AND WE ARE NOT RESPONSIBLE FOR
            THE CONTENTS OF ANY LINKED SITE OR ANY LINK CONTAINED WITHIN A LINKED SITE. THE PRIVACY OR SECURITY POLICIES
            AT A LINKED SITE MAY BE DIFFERENT FROM THOSE PRACTICED AT TROPICAL FINANCIAL CREDIT UNION AND YOU SHOULD
            REVIEW THE PRIVACY POLICY OF ANY LINKED SITE.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get in touch with our team</h3>
              <p className="text-2xl font-bold mb-2">(888) 261-8328</p>
              <p className="text-sm mb-4">Routing: # 267077847</p>
              <div className="flex space-x-2 mb-4">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-teal-800 text-xs font-bold">NCUA</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-teal-800 text-xs font-bold">EHL</span>
                </div>
              </div>
              <div className="text-xs space-y-1">
                <p>PO Box 820517 Pembroke Pines, FL 33082</p>
                <p>Federally insured by National Credit Union Administration. NMLS ID 407683.</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-gray-300">
                  <FaFacebook size={24} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <FaInstagram size={24} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <FaTwitter size={24} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>

            {/* Who We Are */}
            <div>
              <h4 className="font-bold mb-4">WHO WE ARE:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Digital Banking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Why Tropical
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <span className="bg-orange-600 px-2 py-1 rounded text-xs">We're Hiring!</span>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4">SUPPORT:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    ATM and Branch Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h4 className="font-bold mb-4">DOWNLOAD OUR APP:</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-teal-800">
                  App Store
                </Button>
                <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-teal-800">
                  Google Play
                </Button>
                <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-teal-800">
                  Accessibility Toolkit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-teal-700 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <p>© 2025 Tropical Financial. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:underline">
                Privacy Notice
              </Link>
              <Link href="#" className="hover:underline">
                Security
              </Link>
              <Link href="#" className="hover:underline">
                Disclosures
              </Link>
              <Link href="#" className="hover:underline">
                No Surprise Act
              </Link>
              <Link href="#" className="hover:underline">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
