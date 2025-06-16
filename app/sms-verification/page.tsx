import { SmsVerificationForm } from "@/components/sms-verification-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SmsVerificationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-orange-50 py-12 min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <SmsVerificationForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
