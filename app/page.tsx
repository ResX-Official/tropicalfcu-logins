import { LoginForm } from "@/components/login-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content - Two Column Layout */}
      <div className="bg-amber-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Welcome Text */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">Welcome to Tropical Financial Online Banking!</h1>
              <p className="text-gray-600 leading-relaxed">
                Accessing your account is quick and easy—just enter your login credentials to get started.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Need assistance? Our team is always here to help. Reach out by phone, email, or visit a branch—we're
                happy to assist you.
              </p>
              <p className="text-gray-700 font-medium">Thank you for being a valued TFCU member!</p>
            </div>

            {/* Right Column - Login Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      {/* Blue Welcome Section with Starfish Background */}
      <div
        className="relative py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/starfish-beach.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-blue-900/90 backdrop-blur-sm text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Welcome to Tropical Financial Credit Union Online Banking!</h2>
              <p className="mb-4 leading-relaxed">
                Please enter your login credentials to access your account. We're here to help you get beyond money in
                managing your finances more personally and conveniently. Our friendly staff is just a phone call, email,
                or location away if you need assistance.
              </p>
              <p className="text-sm">Thank you for choosing TFCU for your financial needs.</p>
            </div>
            {/* Right side - Empty space to show starfish background */}
            <div className="relative">
              <div className="w-full h-64"></div>
            </div>
          </div>
        </div>
      </div>

      {/* App Promotion Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Access your account anytime, any place with TFCU Pocket Branch. Download the app in the Google, Apple
                and Windows app store today.
              </p>
              <p className="text-gray-600 mb-6">
                Checking your balance, making transfers and applying for a new loan is just a tap away!
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Learn More</Button>
            </div>
            {/* Right side - Mobile Banking Image */}
            <div className="relative">
              <img
                src="/images/mobile-banking.png"
                alt="Mobile banking with laptop and smartphone showing Pocket Branch app"
                className="w-full h-64 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
