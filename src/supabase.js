import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://awmfwbywtrheuclscuxk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWZ3Ynl3dHJoZXVjbHNjdXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2NDA4ODYsImV4cCI6MTk5MDIxNjg4Nn0.Zul2jRF_ZG0eDzg2cjIjHILAN3IoK_3dD2ArDswJIb8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
