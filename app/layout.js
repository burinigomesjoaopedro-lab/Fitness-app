export const metadata = {
  title: 'Fitness App',
  description: 'Aplicativo fitness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}