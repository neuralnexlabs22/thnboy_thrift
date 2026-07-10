import React from 'react';
import Link from 'next/link';
import { Package, ShoppingCart, LayoutDashboard, Settings, Store } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Store className="mr-2 h-5 w-5" />
          <span className="font-bold tracking-wider uppercase text-lg">TN Admin</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-muted text-foreground">
            <LayoutDashboard className="mr-3 h-5 w-5 text-muted-foreground" />
            Dashboard
          </Link>
          <Link href="/admin/orders" className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-muted text-foreground">
            <ShoppingCart className="mr-3 h-5 w-5 text-muted-foreground" />
            Orders
          </Link>
          <Link href="/admin/products" className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-muted text-foreground">
            <Package className="mr-3 h-5 w-5 text-muted-foreground" />
            Products
          </Link>
          <Link href="/admin/settings" className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-muted text-foreground">
            <Settings className="mr-3 h-5 w-5 text-muted-foreground" />
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          <Link href="/" className="flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-foreground text-background hover:opacity-90">
            View Store
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
