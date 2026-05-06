export default async function handler(req, res) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY

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
}
