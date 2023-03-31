import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'

async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(String(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
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

    await webmasters.sitemaps.submit({
      siteUrl,
      feedpath: sitemapUrl,
    })

    console.log(`Notificação enviada com sucesso para: ${sitemapUrl}`)
  } catch (error) {
    console.error(
      `Erro ao notificar o Google sobre o sitemap: ${sitemapUrl}`,
      (error as Error).message,
    )
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      await notifyGoogle()
      res.status(200).json({ message: 'Notificação enviada com sucesso' })
    } catch (error) {
      res.status(500).json({
        message: 'Erro ao notificar o Google sobre o sitemap',
        error: (error as Error).message,
      })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
