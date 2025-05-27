import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SplashScreen({ onFinish}: {onFinish: () => void}) {
    const [startExit, setStartExit] = useState(false)
    
    useEffect(() => {
        //Se inica solo despues de la animación
        const entryAnimationDuration = 1200

        const entryDone = setTimeout(() => {
            //pasados 5 segundos iniciamos salida
            const timer = setTimeout(() => {
                setStartExit(true)

                //Esperamos que se acabe la salida
                setTimeout(() => {
                    onFinish()
                }, 1800)
            }, 1500)

            return () => clearTimeout(timer)
        }, entryAnimationDuration)

        return () => clearTimeout(entryDone)
    }, [onFinish])

    return(
        <motion.div
            className="flex items-center justify-center bg-orange-500 w-full h-screen"
            initial={{ y: 0}}
            animate={ startExit ? { y: "-100%"} : { y: 0}}
            transition={{ duration: 2, ease: "easeInOut"}}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 50}}
        >
            <motion.h1
                className="text-white text-4xl font-bold"
                initial={{ y: 100, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ duration: 2}}
            >
                AccesTrip
            </motion.h1>
        </motion.div>
    )
}