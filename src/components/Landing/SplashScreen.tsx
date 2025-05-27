import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState} from "react"

type Props = {
    visible: boolean;
    onFinish: () => void;
}

export default function SplashScreen({ visible, onFinish}: Props) {
    const [startExit, setStartExit] = useState(false)

    useEffect(() => {
        if (!visible) return

        const delayBeforeExit = setTimeout(() => {
            setStartExit(true)
        }, 3000)

        const finishSplash = setTimeout(() => {
            onFinish()
        }, 1500)

        return () => {
            clearTimeout(delayBeforeExit)
            clearTimeout(finishSplash)
        }
    }, [visible, onFinish])

    return(
        <AnimatePresence>
            {visible && (
                <motion.div
                initial={{ y: 0 }}
                animate={startExit ? {y: "-100%" }: { y: 0}}
                exit={{ y: "-100%" }}
                transition={{  duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-orange-500 z-50 flex items-center justify-center"
                >
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0  }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{  duration: 1, ease: "easeOut"  }}
                        className="text-white text-4xl md:text-6xl font-bold"
                    >
                        AccessTrip
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    )
}