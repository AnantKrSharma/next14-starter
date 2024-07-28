'use client';

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const NavigationTest = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter();
    const path = usePathname();
    const query = useSearchParams();
    
    function handleClick(){
        router.refresh();
        const name = query.get('name');
        const size = query.size;

        console.log(size, name)
    }

    return (
        <div>
            <Link href='http://harkirat.classx.co.in'>Go to Home Page</Link>
                <br />
                <br />
            <button onClick={handleClick}>Testing Button</button>
        </div>
    )
}

export default NavigationTest
