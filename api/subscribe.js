// Vercel Serverless Function — stores emails in Vercel KV (Redis)
// Add KV store via: Vercel Dashboard → Storage → Create KV Database → Link to project

import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    // Store with timestamp, keyed by email (natural dedup)
    await kv.hset(`subscriber:${email}`, {
      email,
      subscribedAt: new Date().toISOString(),
      source: 'withmythos.com'
    });

    // Also add to a set for easy listing
    await kv.sadd('subscribers', email);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('KV write failed:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
