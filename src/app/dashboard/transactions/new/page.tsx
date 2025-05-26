'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Card from '@/components/ui/Card'
import Link from 'next/link'

type CardOption = {
  id: string
  cardNumber: string
  accountId: string
}

const CATEGORIES = [
  'Groceries',
  'Dining',
  'Transportation',
  'Entertainment',
  'Shopping',
  'Utilities',
  'Healthcare',
  'Travel',
  'Other',
]

export default function NewTransaction() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [cardOptions, setCardOptions] = useState<CardOption[]>([])
  const [loadingCards, setLoadingCards] = useState(true)
  
  // Form state
  const [cardId, setCardId] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  
  useEffect(() => {
    // For MVP, using dummy data
    // In a real app, this would fetch from the API
    const dummyCards = [
      {
        id: '1',
        cardNumber: '4111 1111 1111 1111',
        accountId: '1',
      },
      {
        id: '2',
        cardNumber: '5555 5555 5555 4444',
        accountId: '1',
      },
      {
        id: '3',
        cardNumber: '3782 8224 6310 005',
        accountId: '2',
      },
    ]
    
    setTimeout(() => {
      setCardOptions(dummyCards)
      setLoadingCards(false)
    }, 500) // Simulate API call
  }, [])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Validate form
      if (!cardId || !description || !amount || !category || !date) {
        throw new Error('All fields are required')
      }
      
      if (isNaN(Number(amount)) || Number(amount) <= 0) {
        throw new Error('Amount must be a positive number')
      }
      
      // For MVP, just simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSuccess(true)
      setTimeout(() => {
        router.push('/dashboard/transactions')
      }, 2000)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }
  
  if (success) {
    return (
      <Card>
        <div className="text-center py-8">
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="mt-2 text-lg font-medium">Transaction Added Successfully!</h2>
          <p className="mt-1 text-gray-500">Redirecting to transactions list...</p>
        </div>
      </Card>
    )
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Add New Transaction</h1>
        <Link href="/dashboard/transactions" className="text-primary hover:underline">
          Back to Transactions
        </Link>
      </div>
      
      <Card>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="cardId" className="block text-sm font-medium text-gray-700 mb-1">
                Card
              </label>
              <select
                id="cardId"
                value={cardId}
                onChange={(e) => setCardId(e.target.value)}
                className="form-input"
                disabled={loadingCards}
                required
              >
                <option value="">Select a card</option>
                {cardOptions.map((card) => (
                  <option key={card.id} value={card.id}>
                    {card.cardNumber}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Transaction Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Amount ($)
              </label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-input"
                placeholder="0.00"
                step="0.01"
                min="0.01"
                required
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-input"
                required
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
                placeholder="Transaction description"
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <Link
              href="/dashboard/transactions"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Transaction'}
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}