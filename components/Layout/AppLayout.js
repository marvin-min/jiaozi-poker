import NavBar from "@/components/NavBar"
const AppLayout = ({ children }) => {
  return (
    <div className='container mx-auto px-4 min-h-screen'>
      <NavBar />
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

export default AppLayout