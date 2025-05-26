'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'

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

const dummyData = {
  totalSpent: 956.25,
  totalPayments: 500.00,
  categorySummary: [
    { category: 'Groceries', amount: 78.95 },
    { category: 'Dining', amount: 125.40 },
    { category: 'Transportation', amount: 45.80 },
    { category: 'Shopping', amount: 127.99 },
    { category: 'Entertainment', amount: 89.95 },
    { category: 'Utilities', amount: 145.50 },
    { category: 'Healthcare', amount: 210.00 },
    { category: 'Travel', amount: 132.66 },
    { category: 'Other', amount: 0 },
  ],
}

export default function Reports() {
  const [dateRange, setDateRange] = useState('month')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleGenerateReport = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  
  const handleExportCSV = () => {
    // In a real app, this would generate and download a CSV file
    alert('CSV export would be implemented here')
  }
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reports</h1>
      
      <Card>
        <h2 className="text-lg font-semibold mb-4">Transaction Report</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <select
              id="dateRange"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="form-input"
            >
              <option value="month">Current Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="quarter">Last 3 Months</option>
              <option value="year">Last Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          
          {dateRange === 'custom' && (
            <>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="form-input"
                />
              </div>
            </>
          )}
        </div>
        
        <div className="flex space-x-4">
          <button 
            className="btn-primary"
            onClick={handleGenerateReport}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Report'}
          </button>
          
          <button 
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={handleExportCSV}
          >
            Export CSV
          </button>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Spending by Category</h2>
          <div className="space-y-4">
            {dummyData.categorySummary.map((category) => (
              <div key={category.category} className="flex items-center">
                <div className="w-1/3 text-sm text-gray-600">{category.category}</div>
                <div className="w-2/3">
                  <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-primary"
                      style={{ 
                        width: `${Math.min(100, (category.amount / dummyData.totalSpent) * 100)}%` 
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-end pr-2">
                      <span className="text-sm font-medium">
                        ${category.amount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card>
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">Total Spent</div>
              <div className="text-2xl font-bold text-blue-700">
                ${dummyData.totalSpent.toFixed(2)}
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">Total Payments</div>
              <div className="text-2xl font-bold text-green-700">
                ${dummyData.totalPayments.toFixed(2)}
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">Net Balance</div>
              <div className={`text-2xl font-bold ${
                dummyData.totalPayments > dummyData.totalSpent
                  ? 'text-green-700'
                  : 'text-red-700'
              }`}>
                ${(dummyData.totalPayments - dummyData.totalSpent).toFixed(2)}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}