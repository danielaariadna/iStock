import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iennmlivjcdgfdccxinc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllbm5tbGl2amNkZ2ZkY2N4aW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3ODc2NjQsImV4cCI6MjA2MzM2MzY2NH0.Y-7YQeSAk0-pDj9kOoaJkHDBvzeh7KDPSFzySTMOp10"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;