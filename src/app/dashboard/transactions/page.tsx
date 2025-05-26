'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

type Transaction = {
  id: string
  transactionId: string
  description: string
  amount: number
  type: string
  category: string
  date: string
  cardId: string
  cardNumber: string
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    // For MVP, using dummy data
    // In a real app, this would fetch from the API
    const dummyTransactions = [
      {
        id: '1',
        transactionId: 'TRX123456789',
        description: 'Grocery Store',
        amount: 78.95,
        type: 'purchase',
        category: 'Groceries',
        date: '2025-05-21',
        cardId: '1',
        cardNumber: '4111 **** **** 1111',
      },
      {
        id: '2',
        transactionId: 'TRX123456790',
        description: 'Monthly Payment',
        amount: 500.00,
        type: 'payment',
        category: 'Payment',
        date: '2025-05-20',
        cardId: '1',
        cardNumber: '4111 **** **** 1111',
      },
      {
        id: '3',
        transactionId: 'TRX123456791',
        description: 'Restaurant',
        amount: 125.40,
        type: 'purchase',
        category: 'Dining',
        date: '2025-05-19',
        cardId: '2',
        cardNumber: '5555 **** **** 4444',
      },
      {
        id: '4',
        transactionId: 'TRX123456792',
        description: 'Gas Station',
        amount: 45.80,
        type: 'purchase',
        category: 'Transportation',
        date: '2025-05-18',
        cardId: '1',
        cardNumber: '4111 **** **** 1111',
      },
      {
        id: '5',
        transactionId: 'TRX123456793',
        description: 'Online Shopping',
        amount: 127.99,
        type: 'purchase',
        category: 'Shopping',
        date: '2025-05-17',
        cardId: '2',
        cardNumber: '5555 **** **** 4444',
      },
    ]
    
    setTimeout(() => {
      setTransactions(dummyTransactions)
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
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Link href="/dashboard/transactions/new" className="btn-primary">
          Add Transaction
        </Link>
      </div>
      
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Card
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              ) : (
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{transaction.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{transaction.description}</div>
                      <div className="text-xs text-gray-500">{transaction.transactionId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.type === 'purchase' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {transaction.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.cardNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${
                        transaction.type === 'purchase' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {transaction.type === 'purchase' ? '-' : '+'} 
                        ${transaction.amount.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/dashboard/transactions/${transaction.id}`}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}