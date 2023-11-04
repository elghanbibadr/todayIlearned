
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tjabboujnibyffrhmptc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqYWJib3VqbmlieWZmcmhtcHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NTQ0MjYsImV4cCI6MjAxNDQzMDQyNn0.N_RH_KB6DF7m5vuiKhZ7htxC3tJa_OJF_NczsfYDDYs"
const supabase = createClient(supabaseUrl, supabaseKey)

console.log(supabase)
export default supabase