'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

type Account = {
  id: string
  accountId: string
  currentBalance: number
  creditLimit: number
  active: boolean
}

export default function Accounts() {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    // For MVP, using dummy data
    // In a real app, this would fetch from the API
    const dummyAccounts = [
      {
        id: '1',
        accountId: '10001234567',
        currentBalance: 1250.75,
        creditLimit: 5000,
        active: true,
      },
      {
        id: '2',
        accountId: '10009876543',
        currentBalance: 450.25,
        creditLimit: 2500,
        active: true,
      },
      {
        id: '3',
        accountId: '10005555555',
        currentBalance: 0,
        creditLimit: 1000,
        active: false,
      },
    ]
    
    setTimeout(() => {
      setAccounts(dummyAccounts)
      setLoading(false)
    }, 500) // Simulate API call
  }, [])
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>{error}</p>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Accounts</h1>
        <Link href="/dashboard/accounts/new" className="btn-primary">
          Add Account
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {accounts.length === 0 ? (
          <Card>
            <p className="text-gray-500 text-center py-8">No accounts found.</p>
          </Card>
        ) : (
          accounts.map((account) => (
            <Card key={account.id} className="hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">
                    Account {account.accountId}
                  </h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-600">
                      Balance: <span className="font-medium">${account.currentBalance.toFixed(2)}</span>
                    </p>
                    <p className="text-gray-600">
                      Credit Limit: <span className="font-medium">${account.creditLimit.toFixed(2)}</span>
                    </p>
                    <p className="text-gray-600">
                      Status: 
                      <span className={`ml-1 px-2 py-1 text-xs rounded-full ${
                        account.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {account.active ? 'Active' : 'Inactive'}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/dashboard/accounts/${account.id}`}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                  >
                    View
                  </Link>
                  <Link
                    href={`/dashboard/accounts/${account.id}/edit`}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}