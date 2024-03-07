import Header from '@/layouts/main/header'
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen flex-grow'>
      <div className='flex w-full flex-col '>
        <Header />
        <div className='relative h-full flex flex-auto flex-col container mx-auto p-4 sm:p-6 md:p-8'>{children}</div>
      </div>
    </main>
  )
}
