import { motion } from "framer-motion"

export default function MainLanding({ setActiveTab }: { setActiveTab: (tab: string) => void}) {
    const handleStart = () => {
        setActiveTab("inicio")
    }

    return(
        <div>
            <motion.div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{}}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1}}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="">
                        <h1 className="relative z-10 max-w-xl text-center text-white px-6">
                            La vida es breve,
                            <br />
                            pero el universo es <span className="text-orange-400">inmenso</span>.
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-gray-300">
                            En AccessTrip, creamos conexiones auténticas entre viajeros y comunidades locales, ofreciendo experiencias únicas que enriquecen tanto a los visitantes como a los anfitriones.
                        </p>
                        <button 
                            onClick={handleStart}
                            className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300"
                        >
                            Vamos  a comenzar
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}