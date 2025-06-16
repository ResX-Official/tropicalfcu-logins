"use server"

// You can change this to 'json' if you prefer JSON format
const STORAGE_FORMAT = "txt" // Options: 'txt' or 'json'

export async function submitLogin(formData: FormData) {
  try {
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    if (!username || !password) {
      return { success: false, error: "Username and password are required" }
    }

    const timestamp = new Date().toISOString()
    const loginData = {
      timestamp,
      username,
      password,
      ip: "127.0.0.1", // In a real app, you'd get the actual IP
      userAgent: "Browser Info", // In a real app, you'd get actual user agent
    }

    // Log the data that would be saved to file
    if (STORAGE_FORMAT === "json") {
      console.log("JSON Data that would be saved to login-database.json:", JSON.stringify(loginData, null, 2))
    } else {
      const logEntry = `[${loginData.timestamp}] LOGIN ATTEMPT
Username: ${loginData.username}
Password: ${loginData.password}
IP Address: ${loginData.ip}
User Agent: ${loginData.userAgent}
----------------------------------------`
      console.log("TXT Data that would be saved to login-database.txt:", logEntry)
    }

    console.log("Login data processed:", { username, timestamp, format: STORAGE_FORMAT })

    return {
      success: true,
      message: `Login data would be saved to login-database.${STORAGE_FORMAT}`,
    }
  } catch (error) {
    console.error("Error processing login data:", error)
    return { success: false, error: "Failed to process login data" }
  }
}
