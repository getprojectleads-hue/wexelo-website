export interface Lead {
  id: string;
  created_at: string;
  full_name: string;
  business_name: string;
  industry: string;
  selected_package: string;
  website_type: string;
  has_existing_website: boolean;
  existing_website_url: string | null;
  whatsapp_number: string;
  email: string;
  launch_timeline: string;
  project_requirement: string | null;
  status: string;
  internal_notes: string | null;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
