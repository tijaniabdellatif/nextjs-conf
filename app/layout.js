import '../styles/globals.scss';
import { ReduxProvider } from './provider';

export const metadata = {
  title: 'Shop Easy',
  description: 'Online shopping, Shopping services for all your choices',
  applicationName: 'ShopEasy',
  referrer: 'origin-when-cross-origin',
  keywords: ['Shopping', 'maroc', 'cart'],
  authors: [{ name: 'Seb' }, { name: 'Tijani Abdellatif', url: 'https://nextjs.org' }],
  colorScheme: 'light',
  creator: 'Tijani Abdellatif',
  publisher: 'Sara Bentamar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    
    <html lang='en'>
    <body>
      <ReduxProvider>
        {children}
        </ReduxProvider>
    </body>
    </html>
   
  
  )
}
