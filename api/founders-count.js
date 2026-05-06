export default async function handler(req, res) {
  try {
    const url = 'https://lvofjaxliueblngsrxkg.supabase.co'
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2b2ZqYXhsaXVlYmxuZ3NyeGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0OTg1NzIsImV4cCI6MjA4OTA3NDU3Mn0.FMciJlkSfh6UP2VPZMOdNoYELbjFDhtNAcRiTxXJnWw'

    const response = await fetch(
      `${url}/rest/v1/subscriptions?select=id&founders=eq.true&status=eq.active`,
      {
        headers: {
          'apikey': key,
          'Authorization': `Bearer ${key}`,
          'Prefer': 'count=exact',
        },
      }
    )

    const countHeader = response.headers.get('content-range')
    const count = countHeader ? parseInt(countHeader.split('/')[1]) : 0

    res.status(200).json({ placesLeft: 100 - (count || 0) })
  } catch (e) {
    res.status(200).json({ placesLeft: 97, error: e.message })
  }
}
