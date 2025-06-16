import Link from "next/link"
import { Search } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">TF</span>
              </div>
              <div className="flex flex-col">
                <div className="text-blue-600 font-bold text-xl leading-tight">TROPICAL</div>
                <div className="text-blue-600 font-bold text-sm leading-tight">FINANCIAL</div>
              </div>
              <div className="w-14 h-14 bg-red-700 rounded-sm flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-xs font-bold leading-tight">FLORIDA</div>
                  <div className="w-6 h-6 bg-white rounded-full mx-auto mt-1 flex items-center justify-center">
                    <span className="text-red-700 text-xs">🛡️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600">Routing: # 267077847</span>
              <Link href="#" className="text-orange-600 font-medium hover:text-orange-700">
                Member Login
              </Link>
              <Link href="#" className="text-blue-600 font-medium hover:text-blue-700">
                Join TFCU
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Locations
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Appointments
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Help
              </Link>
              <Search className="w-5 h-5 text-gray-600" />
            </div>
          </nav>
        </div>

        {/* Main Navigation */}
        <div className="hidden lg:flex items-center space-x-8 py-4 border-t">
          <div className="flex items-center space-x-1">
            <span className="text-blue-600 font-medium">Checking & Savings</span>
            <span className="text-blue-600">▼</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-blue-600 font-medium">Loans</span>
            <span className="text-blue-600">▼</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-blue-600 font-medium">Businesses</span>
            <span className="text-blue-600">▼</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-blue-600 font-medium">Learn More</span>
            <span className="text-blue-600">▼</span>
          </div>
        </div>
      </div>
    </header>
  )
}
