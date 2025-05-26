'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Accounts', href: '/dashboard/accounts', icon: '💳' },
  { name: 'Cards', href: '/dashboard/cards', icon: '💳' },
  { name: 'Transactions', href: '/dashboard/transactions', icon: '💱' },
  { name: 'Reports', href: '/dashboard/reports', icon: '📋' },
]

const adminNavItems = [
  { name: 'Users', href: '/dashboard/admin/users', icon: '👥' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === 'admin'

  return (
    <aside className="bg-primary text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">CardDemo</h1>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center p-3 rounded-lg transition-colors ${
              pathname === item.href
                ? 'bg-white/20'
                : 'hover:bg-white/10'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
        
        {isAdmin && (
          <>
            <div className="border-t border-white/20 my-4 pt-4">
              <p className="text-sm text-white/70 mb-2 px-3">Admin</p>
              {adminNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-white/20'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </nav>
      
      <div className="border-t border-white/20 mt-auto pt-4">
        <div className="flex items-center p-3">
          <div className="mr-3">👤</div>
          <div>
            <p className="font-medium">{session?.user?.name}</p>
            <p className="text-sm text-white/70">{session?.user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full mt-2 p-3 rounded-lg hover:bg-white/10 transition-colors text-left"
        >
          <span className="mr-3">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}