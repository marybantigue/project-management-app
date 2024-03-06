import Header from '@/layouts/main/header'
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen flex-grow'>
      <div className='flex w-full flex-col '>
        <Header />
        <div className='relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8 container mx-auto'>
          {children}
        </div>
      </div>
    </main>
  )
}
