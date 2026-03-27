// Vercel Serverless Function — stores emails in Vercel Postgres
// Setup: Vercel Dashboard → Storage → Create Postgres Database → Link to project

import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    // Create table if it doesn't exist (idempotent)
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        subscribed_at TIMESTAMPTZ DEFAULT NOW(),
        source TEXT DEFAULT 'withmythos.com'
      )
    `;

    // Insert with conflict handling (natural dedup)
    await sql`
      INSERT INTO subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Postgres write failed:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
