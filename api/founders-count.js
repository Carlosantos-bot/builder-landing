import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  )
  
  const { count, error } = await supabase
    .from('subscriptions')
    .select('*', { count: 'exact', head: true })
    .eq('founders', true)
    .eq('status', 'active')

  if (error) return res.status(500).json({ error: error.message })
  
  res.json({ placesLeft: 100 - (count || 0) })
}
