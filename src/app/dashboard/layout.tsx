import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = await getServerSession(authOptions)
  // if (!session) redirect('/login')

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 👈 Sidebar stays on the left */}
      <Sidebar />

      {/* 👉 Main content area */}
      <div className="flex flex-1 flex-col">
        {/* Topbar stays on top of the main content */}
        {/* <Topbar user={session.user} /> */}
        <Topbar user={`Amit Kumar`} />
        {/* Main page content (ChatUI or any child) */}
        <main className="bg-background flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
