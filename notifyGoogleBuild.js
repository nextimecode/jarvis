const { google } = require('googleapis')

console.log('teste', process.env.GOOGLE_APPLICATION_CREDENTIALS)

async function authenticate() {
  // Carregue suas credenciais das variáveis de ambiente.
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    scopes: ['https://www.googleapis.com/auth/webmasters'],
  })

  return await auth.getClient()
}

export async function notifyGoogle() {
  const siteUrl = 'https://www.nextime.com.br'
  const sitemapUrl = `${siteUrl}/sitemap.xml`

  try {
    const client = await authenticate()
    const webmasters = google.webmasters({ version: 'v3', auth: client })

    // Use o método 'submit' para enviar o sitemap ao Google.
    await webmasters.sitemaps.submit({
      siteUrl,
      feedpath: sitemapUrl,
    })

    console.log(`Notificação enviada com sucesso para: ${sitemapUrl}`)
  } catch (error) {
    console.error(`Erro ao notificar o Google sobre o sitemap: ${sitemapUrl}`, error.message)
  }
}

notifyGoogle() // Adicione esta linha para executar a função ao executar o script.
