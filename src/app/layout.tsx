import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web-мастер',
  description: 'Сайт участника областного конкурса "Создание сайта"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100`}>
        {/* Header Section */}
        <header className="bg-blue-900 text-white p-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href='/' className="flex items-center space-x-4">
                <img src="/images/logo.png" alt="Lyceum Logo" className="h-12 w-12" />
                <div>
                  <h1 className="text-l font-extrabold">КГУ «ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №7» ОТДЕЛА ОБРАЗОВАНИЯ ГОРОДА ШАХТИНСКА УПРАВЛЕНИЯ ОБРАЗОВАНИЯ КАРАГАНДИНСКОЙ ОБЛАСТИ</h1>
                  <p className="text-sm italic">Учитель информатики Сибанбай Абай</p>
                </div>
              </a>
            </div>
          </div>
        </header>

        {/* Navigation Section */}
        <nav className="bg-blue-800 text-white shadow-md py-3">
          <div className="container mx-auto">
            <ul className="flex flex-wrap justify-center space-x-1 sm:space-x-4">
              <li>
                <a href='#method' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Лайфхак</a>
              </li>
              <li>
                <a href='#tips' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Советы</a>
              </li>
              <li>
                <a href='#important' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Важно</a>
              </li>
              <li>
                <a href='#conclusion' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Заключение</a>
              </li>
              <li>
                <a href='#contacts' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Контакты</a>
              </li>
              
              
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        
        {children}

        {/* Footer Section */}
        <footer className="bg-blue-900 text-white p-6" id='contacts'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:px-10 gap-8">
            
            {/* Адрес */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Автор сайта</h4>
              <p className='hover:underline'>Учитель информатики <br/> КГУ ОШ №7 города Шахтинск <br/> Сибанбай Абай Мухтарулы</p>
            </div>
            
            {/* Контакты */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul>
                <li className='hover:underline'><a href='tel:+77078916794'>+77078916794</a></li>
              </ul>
            </div>

            

            {/* Социальные сети */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Я в социальных сетях</h4>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.instagram.com/abaysib" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/abaysib" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/tiktok.png" alt="TikTok" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/abaysib" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/telegram.png" alt="Telegram" className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
