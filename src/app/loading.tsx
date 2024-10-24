import { Loader, Loader2, LoaderPinwheel } from "lucide-react"
import { LuLoader } from "react-icons/lu"

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
        <Loader size={150} className=" animate-spin" color="rgba(255, 222, 4, 1)"/>
      
    </div>
  )
}

export default loading
