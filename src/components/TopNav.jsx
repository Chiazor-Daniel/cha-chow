import { Search, ShoppingBag } from "lucide-react"

export const TopNav = ()=>{
    return(
        <header className="bg-white shadow-sm p-4 fixed top-0 w-full z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-orange-500 text-2xl font-bold">Cha Chaw</h1>
          <div className="relative flex-1 mx-4">
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="w-full p-2 pl-10 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <ShoppingBag className="text-gray-700" size={24} />
        </div>
      </header>
    )
}