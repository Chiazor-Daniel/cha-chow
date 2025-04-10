import React from 'react'
import { TopNav } from '../components/TopNav'
import { BottomNav } from '../components/BottomNav'

function History() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopNav showBack={true} />
      
      <main className="pt-16 pb-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <div className="text-center py-8 text-gray-500">
            No order history yet
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}

export default History