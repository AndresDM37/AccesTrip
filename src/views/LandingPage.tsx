import { useState } from "react";
import SplashScreen from '../components/Landing/SplashScreen'
import MainLanding from '../components/Landing/MainLanding'

export default function Landingpage({ setActiveTab}: { setActiveTab: (tab: string) => void }) {
    const [showSplash, setShowSplash] = useState(true)

    const handleSplashFinish = () => {
        setShowSplash(false)
    }


    return(
        <div className="min-h-screen w-full">
            {showSplash ? (
                <SplashScreen onFinish={handleSplashFinish} />
            ) : (
                <MainLanding setActiveTab={setActiveTab} />
            )}
        </div>
    )
}