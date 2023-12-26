import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spidermen Miles Morales',
  description: 'Esse projeto foi criado para divulgar o jogo Spidermen Miles Morales',
  icons: {
    icon:['logo-spidermanbig.svg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
