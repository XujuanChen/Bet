import { createClient } from '@supabase/supabase-js'

const URL = 'https://mddprfjxzywunakougmw.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZHByZmp4enl3dW5ha291Z213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY5MzQsImV4cCI6MTk5NjIzMjkzNH0.VwHwmXpRXn563LGy118wAU003bvNAXElCkxc2hwKfuo';

export const supabase = createClient(URL, API_KEY);


