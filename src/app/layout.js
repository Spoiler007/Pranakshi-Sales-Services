

import { Inter } from 'next/font/google'
import './globals.css'
import GotoTop from '@/components/GotoTop/GotoTop'
//  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//  import "@fortawesome/fontawesome-free/css/all.min.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pranakshi',
  description: 'Sales & Services',
  icons: {
    icon: '/favicon.png', // /public path
  },
}
export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
    
    <body className={inter.className}>
      {children}
      </body>
    </html>

  )
}
