import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jpsjnuamwhrsgpbsgohl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwc2pudWFtd2hyc2dwYnNnb2hsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MjUwMjE0NywiZXhwIjoyMDk4MDc4MTQ3fQ.UQ4MElLaKaudwI1WXXo50knOaX_t9tfXxkZBrZYaWjE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
