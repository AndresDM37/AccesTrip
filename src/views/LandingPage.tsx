import { useEffect, useState } from "react";
import SplashScreen from '../components/Landing/SplashScreen'
import MainLanding from '../components/Landing/MainLanding'

export default function Landingpage({ setActiveTab}: { setActiveTab: (tab: string) => void }) {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])


    return(
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* SIEMPRE VISIBLE */}
            <MainLanding setActiveTab={setActiveTab} />

            {/* ANIMACION */}
            <SplashScreen onFinish={() => setShowSplash(false)} visible={showSplash} />
        </div>
    )
}