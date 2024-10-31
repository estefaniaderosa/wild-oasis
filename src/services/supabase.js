import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://edgwjjjaaltgqaoipgga.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZ3dqamphYWx0Z3Fhb2lwZ2dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNjY2MDksImV4cCI6MjA0NTc0MjYwOX0.VO45utfD2gSu_XDhufOD20eoxogFP_Ms3wOeVFKH4N0";
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;