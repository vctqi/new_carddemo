'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

type CreditCard = {
  id: string
  cardNumber: string
  embossedName: string
  expirationDate: string
  active: boolean
  accountId: string
}

export default function Cards() {
  const [cards, setCards] = useState<CreditCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    // For MVP, using dummy data
    // In a real app, this would fetch from the API
    const dummyCards = [
      {
        id: '1',
        cardNumber: '4111 1111 1111 1111',
        embossedName: 'JOHN DOE',
        expirationDate: '12/2025',
        active: true,
        accountId: '1',
      },
      {
        id: '2',
        cardNumber: '5555 5555 5555 4444',
        embossedName: 'JANE SMITH',
        expirationDate: '03/2026',
        active: true,
        accountId: '1',
      },
      {
        id: '3',
        cardNumber: '3782 8224 6310 005',
        embossedName: 'JOHN DOE',
        expirationDate: '09/2024',
        active: false,
        accountId: '2',
      },
    ]
    
    setTimeout(() => {
      setCards(dummyCards)
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
        <h1 className="text-2xl font-bold">Credit Cards</h1>
        <Link href="/dashboard/cards/new" className="btn-primary">
          Add Card
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.length === 0 ? (
          <Card>
            <p className="text-gray-500 text-center py-8">No cards found.</p>
          </Card>
        ) : (
          cards.map((card) => (
            <div
              key={card.id}
              className={`relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg ${
                card.active ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-gray-400 to-gray-600'
              }`}
            >
              <div className="p-6 text-white">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-lg font-bold">CardDemo</div>
                  <div>
                    {card.active ? (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                        Inactive
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-lg tracking-widest">
                    {card.cardNumber.slice(0, 4)} {card.cardNumber.slice(5, 9)} {card.cardNumber.slice(10, 14)} {card.cardNumber.slice(15, 19)}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs opacity-75">CARDHOLDER NAME</div>
                    <div>{card.embossedName}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-75">EXPIRES</div>
                    <div>{card.expirationDate}</div>
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <Link
                    href={`/dashboard/cards/${card.id}`}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white"
                  >
                    View
                  </Link>
                  <Link
                    href={`/dashboard/cards/${card.id}/edit`}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}