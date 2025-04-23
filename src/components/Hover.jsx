import { motion } from "framer-motion"



 function Hover({ children }) {
    return (
        <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="hover-effect"
        >
        
            {children}  
        </motion.div>
    )
}
export default Hover;