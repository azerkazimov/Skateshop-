"use client"

import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col bg-black text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <div className="rounded-full border border-white/20 p-6">
            <ShoppingCart className="h-8 w-8 text-white/50" />
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-white">Your cart is empty</p>
            <p className="text-sm text-white/60">
              Add items to your cart to checkout
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

