"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Shield } from "lucide-react"
import { submitLogin } from "@/app/actions/auth"

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const formData = new FormData(e.currentTarget)
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    try {
      const result = await submitLogin(username, password)
      if (result.success) {
        sessionStorage.setItem("loginSession", result.sessionId || "")
        router.push("/sms-verification")
      } else {
        setMessage(result.error || "Login failed")
      }
    } catch (error) {
      setMessage("An error occurred while processing your request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Lock className="w-5 h-5 text-gray-600" />
        <h2 className="text-xl font-bold text-gray-800">LOG IN</h2>
      </div>

      <div className="text-sm text-gray-600 mb-6">
        Did you forget your username or password? Don't worry, you can reset it{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-700">
          here
        </a>
        . If you're NEW to online banking{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-700">
          enroll here
        </a>
        .
      </div>

      {/* Security Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-blue-700">Your login is protected with multi-factor authentication</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            required
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full h-12"
        >
          {isSubmitting ? "Signing in..." : "Sign me in"}
        </Button>

        {message && <div className="text-sm p-3 rounded bg-red-100 text-red-700">{message}</div>}
      </form>
    </div>
  )
}
