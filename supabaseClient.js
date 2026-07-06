// ============================================================
//  supabaseClient.js
//  Initializes the Supabase client for the entire app.
//  Uses the global `supabase` object from the CDN.
// ============================================================
// Your Supabase project credentials
const SUPABASE_URL = 'https://dxetipngdhsvitjgxbft.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ZiHiCfyoDmNaCyCMu2NXKQ_6yTCHLYU';
// Create the Supabase client and make it globally available
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Optional: log to confirm it's working
console.log('Supabase client initialized.');
