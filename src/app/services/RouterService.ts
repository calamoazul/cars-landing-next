
'use client'

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

export default function useRouterService() {

    const router:AppRouterInstance = useRouter();
    const returnHome = () => {

        router.push('/')
    
    }

    return {

        returnHome
    }
}