import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://ttfvbgyodvjwhvtvprom.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0ZnZiZ3lvZHZqd2h2dHZwcm9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MTAzOTMsImV4cCI6MjAwODM4NjM5M30.RMrLXS5_N1JrbAKXkNnuYwHBozEd0IqFku7qG7uXvdo';


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


