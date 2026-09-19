'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import {
  LogOut, Search, ExternalLink,
  MessageCircle, Mail, X,
  Loader2, Eye,
} from 'lucide-react';
import { leadStatuses } from '@/config/site';
import { formatDate, formatDateTime } from '@/lib/utils';
import type { Lead } from '@/types';

const statusColors: Record<string, string> = {
  'New': 'bg-blue-100 text-blue-700',
  'Contacted': 'bg-yellow-100 text-yellow-700',
  'Follow-up': 'bg-orange-100 text-orange-700',
  'Proposal Sent': 'bg-purple-100 text-purple-700',
  'Won': 'bg-green-100 text-green-700',
  'Lost': 'bg-red-100 text-red-700',
};

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [packageFilter, setPackageFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [noteText, setNoteText] = useState('');
  const [saving, setSaving] = useState(false);

  const supabase = createClient();

  const fetchLeads = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/admin/login');
      return;
    }

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching leads:', error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  }, [supabase, router]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    setSaving(true);
    const { error } = await supabase
      .from('leads')
      .update({ status: newStatus })
      .eq('id', leadId);

    if (!error) {
      setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
      if (selectedLead?.id === leadId) {
        setSelectedLead(prev => prev ? { ...prev, status: newStatus } : null);
      }
    }
    setSaving(false);
  };

  const addNote = async (leadId: string) => {
    if (!noteText.trim()) return;
    setSaving(true);

    const lead = leads.find(l => l.id === leadId);
    const existingNotes = lead?.internal_notes || '';
    const timestamp = new Date().toLocaleString('en-IN');
    const newNotes = existingNotes
      ? `${existingNotes}\n\n[${timestamp}]\n${noteText}`
      : `[${timestamp}]\n${noteText}`;

    const { error } = await supabase
      .from('leads')
      .update({ internal_notes: newNotes })
      .eq('id', leadId);

    if (!error) {
      setLeads(prev => prev.map(l => l.id === leadId ? { ...l, internal_notes: newNotes } : l));
      if (selectedLead?.id === leadId) {
        setSelectedLead(prev => prev ? { ...prev, internal_notes: newNotes } : null);
      }
      setNoteText('');
    }
    setSaving(false);
  };

  // Filtering
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = searchQuery === '' ||
      lead.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === '' || lead.status === statusFilter;
    const matchesPackage = packageFilter === '' || lead.selected_package === packageFilter;
    const matchesIndustry = industryFilter === '' || lead.industry === industryFilter;
    return matchesSearch && matchesStatus && matchesPackage && matchesIndustry;
  });

  // Stats
  const statCounts = leadStatuses.reduce((acc, status) => {
    acc[status] = leads.filter(l => l.status === status).length;
    return acc;
  }, {} as Record<string, number>);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-electric" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Admin Header */}
      <header className="bg-white border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo/wexelo-logo-dark.png"
              alt="WEXELO"
              width={120}
              height={33}
              className="h-7 w-auto"
            />
            <span className="text-xs font-medium text-secondary-text bg-light-bg px-2 py-1 rounded">Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-secondary-text hover:text-primary-text transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {leadStatuses.map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(statusFilter === status ? '' : status)}
              className={`p-4 rounded-xl border text-center transition-all ${
                statusFilter === status
                  ? 'border-electric bg-electric/5'
                  : 'border-border bg-white hover:border-electric/30'
              }`}
            >
              <p className="text-2xl font-heading font-bold text-primary-text">{statCounts[status]}</p>
              <p className="text-xs text-secondary-text mt-1">{status}</p>
            </button>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text" />
            <input
              type="text"
              placeholder="Search by name, business, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-electric/30"
            />
          </div>
          <select
            value={packageFilter}
            onChange={(e) => setPackageFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-border bg-white text-sm"
          >
            <option value="">All Packages</option>
            <option value="starter">Starter</option>
            <option value="grow">Grow</option>
            <option value="scale">Scale</option>
            <option value="not-sure">Not Sure</option>
          </select>
          <select
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-border bg-white text-sm"
          >
            <option value="">All Industries</option>
            <option value="Salon & Beauty">Salon & Beauty</option>
            <option value="Café / Restaurant">Café / Restaurant</option>
            <option value="Hotel / Hospitality">Hotel / Hospitality</option>
            <option value="Creator / Influencer">Creator / Influencer</option>
            <option value="Real Estate / Construction">Real Estate / Construction</option>
            <option value="Local / Service Business">Local / Service Business</option>
          </select>
        </div>

        {/* Lead Table */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-light-bg">
                  <th className="px-4 py-3 text-left font-medium text-secondary-text">Client</th>
                  <th className="px-4 py-3 text-left font-medium text-secondary-text">Business</th>
                  <th className="px-4 py-3 text-left font-medium text-secondary-text">Package</th>
                  <th className="px-4 py-3 text-left font-medium text-secondary-text">Industry</th>
                  <th className="px-4 py-3 text-left font-medium text-secondary-text">WhatsApp</th>
                  <th className="px-4 py-3 text-left font-medium text-secondary-text">Date</th>
                  <th className="px-4 py-3 text-left font-medium text-secondary-text">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-secondary-text"></th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center text-secondary-text">
                      {leads.length === 0 ? 'No leads yet. New project requests will appear here.' : 'No leads match your filters.'}
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-light-bg/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-primary-text">{lead.full_name}</td>
                      <td className="px-4 py-3 text-secondary-text">{lead.business_name}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-medium capitalize bg-electric/10 text-electric px-2 py-0.5 rounded">
                          {lead.selected_package}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-secondary-text text-xs">{lead.industry}</td>
                      <td className="px-4 py-3">
                        <a href={`https://wa.me/${lead.whatsapp_number.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-xs">
                          {lead.whatsapp_number}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-secondary-text text-xs">{formatDate(lead.created_at)}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${statusColors[lead.status] || 'bg-gray-100 text-gray-700'}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => { setSelectedLead(lead); setNoteText(''); }}
                          className="text-electric hover:text-electric/80 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-20 px-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl border border-border shadow-xl mb-8">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading font-bold text-xl text-primary-text">{selectedLead.full_name}</h2>
              <button onClick={() => setSelectedLead(null)} className="text-secondary-text hover:text-primary-text">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-secondary-text">Business:</span> <span className="font-medium">{selectedLead.business_name}</span></div>
                <div><span className="text-secondary-text">Industry:</span> <span className="font-medium">{selectedLead.industry}</span></div>
                <div><span className="text-secondary-text">Package:</span> <span className="font-medium capitalize">{selectedLead.selected_package}</span></div>
                <div><span className="text-secondary-text">Website Type:</span> <span className="font-medium">{selectedLead.website_type}</span></div>
                <div><span className="text-secondary-text">Email:</span> <a href={`mailto:${selectedLead.email}`} className="text-electric hover:underline">{selectedLead.email}</a></div>
                <div><span className="text-secondary-text">WhatsApp:</span> <span className="font-medium">{selectedLead.whatsapp_number}</span></div>
                <div><span className="text-secondary-text">Timeline:</span> <span className="font-medium">{selectedLead.launch_timeline}</span></div>
                <div><span className="text-secondary-text">Submitted:</span> <span className="font-medium">{formatDateTime(selectedLead.created_at)}</span></div>
                {selectedLead.has_existing_website && selectedLead.existing_website_url && (
                  <div className="col-span-2"><span className="text-secondary-text">Existing URL:</span> <a href={selectedLead.existing_website_url} target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">{selectedLead.existing_website_url}</a></div>
                )}
              </div>

              <div>
                <p className="text-sm text-secondary-text mb-1">Project Requirement:</p>
                {selectedLead.project_requirement ? (
                  <p className="text-sm bg-light-bg rounded-lg p-3 whitespace-pre-wrap font-body">{selectedLead.project_requirement}</p>
                ) : (
                  <p className="text-sm text-secondary-text/70 italic bg-light-bg/50 rounded-lg p-3">No project requirement provided.</p>
                )}
              </div>

              {/* Status */}
              <div>
                <p className="text-sm text-secondary-text mb-2">Status:</p>
                <div className="flex flex-wrap gap-2">
                  {leadStatuses.map(status => (
                    <button
                      key={status}
                      onClick={() => updateLeadStatus(selectedLead.id, status)}
                      disabled={saving}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedLead.status === status
                          ? 'btn-gradient text-white'
                          : 'border border-border hover:border-electric/30 text-secondary-text hover:text-primary-text'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${selectedLead.whatsapp_number.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white text-xs font-medium hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-medium text-primary-text hover:border-electric/30 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </a>
              </div>

              {/* Notes */}
              <div>
                <p className="text-sm text-secondary-text mb-2">Internal Notes:</p>
                {selectedLead.internal_notes && (
                  <pre className="text-xs bg-light-bg rounded-lg p-3 mb-3 whitespace-pre-wrap font-body">{selectedLead.internal_notes}</pre>
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note..."
                    className="flex-1 px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-electric/30"
                    onKeyDown={(e) => e.key === 'Enter' && addNote(selectedLead.id)}
                  />
                  <button
                    onClick={() => addNote(selectedLead.id)}
                    disabled={saving || !noteText.trim()}
                    className="btn-gradient px-4 py-2 rounded-lg text-xs font-medium text-white disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}