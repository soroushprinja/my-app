'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
const navItems = [
    { label:'Home',href:'/'},
    { label:'Companions',href:'/companions'},
    { label:'My Journy',href:'/my-journy'},
]
const Navitems = () => {
    const pathname = usePathname();
    return (
    <div>
        <nav className= "flex items-center gap-4">
            {navItems.map(({ label,href})=>(
                <Link 
                    href={href} 
                    key={label} 
                    className={cn(pathname===href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    </div>
  )
}

export default Navitems