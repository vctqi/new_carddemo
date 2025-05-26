'use client'

import { useSession } from 'next-auth/react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

export default function Dashboard() {
  const { data: session } = useSession()
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div>
          <span className="text-gray-500">
            Welcome back, {session?.user?.name}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50">
          <div className="flex flex-col">
            <span className="text-blue-500 text-4xl font-bold">Accounts</span>
            <span className="text-gray-500 mt-2">Manage your accounts</span>
            <Link href="/dashboard/accounts" className="mt-4 btn-primary text-center">
              View Accounts
            </Link>
          </div>
        </Card>
        
        <Card className="bg-green-50">
          <div className="flex flex-col">
            <span className="text-green-500 text-4xl font-bold">Cards</span>
            <span className="text-gray-500 mt-2">Manage your cards</span>
            <Link href="/dashboard/cards" className="mt-4 btn-primary text-center">
              View Cards
            </Link>
          </div>
        </Card>
        
        <Card className="bg-purple-50">
          <div className="flex flex-col">
            <span className="text-purple-500 text-4xl font-bold">Transactions</span>
            <span className="text-gray-500 mt-2">View recent transactions</span>
            <Link href="/dashboard/transactions" className="mt-4 btn-primary text-center">
              View Transactions
            </Link>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <div className="space-y-4">
            <p className="text-gray-500">No recent activities to display.</p>
          </div>
        </Card>
        
        <Card title="Quick Actions">
          <div className="space-y-4">
            <Link
              href="/dashboard/transactions/new"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center">
                <div className="mr-4 text-2xl">💱</div>
                <div>
                  <h3 className="font-medium">Add Transaction</h3>
                  <p className="text-sm text-gray-500">
                    Record a new transaction
                  </p>
                </div>
              </div>
            </Link>
            
            <Link
              href="/dashboard/reports"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center">
                <div className="mr-4 text-2xl">📊</div>
                <div>
                  <h3 className="font-medium">Generate Report</h3>
                  <p className="text-sm text-gray-500">
                    Create a new transaction report
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}