'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface FormData {
  full_name: string;
  business_name: string;
  industry: string;
  selected_package: string;
  website_type: string;
  has_existing_website: string;
  existing_website_url: string;
  whatsapp_number: string;
  email: string;
  launch_timeline: string;
  project_requirement: string;
}

const industries = [
  'Salon & Beauty',
  'Café / Restaurant',
  'Hotel / Hospitality',
  'Creator / Influencer',
  'Real Estate / Construction',
  'Local / Service Business',
  'Other',
];

const packageOptions = [
  { value: 'starter', label: 'Starter — ₹2,499' },
  { value: 'grow', label: 'Grow — ₹4,999' },
  { value: 'scale', label: 'Scale — ₹6,999' },
  { value: 'not-sure', label: 'Not Sure Yet' },
];

const websiteTypes = [
  'Business Website',
  'Landing Page',
  'E-commerce Website',
  'Booking Website',
  'Website Redesign',
  'Website Care',
  'Not Sure',
];

const timelines = [
  'As soon as possible',
  'Within 1–2 weeks',
  'Within 1 month',
  'Flexible / Not Sure',
];

const industryMap: Record<string, string> = {
  salon: 'Salon & Beauty',
  cafe: 'Café / Restaurant',
  hotel: 'Hotel / Hospitality',
  creator: 'Creator / Influencer',
  realestate: 'Real Estate / Construction',
  local: 'Local / Service Business',
};

function StartProjectFormInner() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    business_name: '',
    industry: '',
    selected_package: '',
    website_type: '',
    has_existing_website: 'no',
    existing_website_url: '',
    whatsapp_number: '',
    email: '',
    launch_timeline: '',
    project_requirement: '',
  });

  // Pre-fill from URL params
  useEffect(() => {
    const pkg = searchParams.get('package');
    const ind = searchParams.get('industry');

    if (pkg && ['starter', 'grow', 'scale'].includes(pkg)) {
      setFormData(prev => ({ ...prev, selected_package: pkg }));
    }
    if (ind && industryMap[ind]) {
      setFormData(prev => ({ ...prev, industry: industryMap[ind] }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          has_existing_website: formData.has_existing_website === 'yes',
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setFormState('success');
    } catch (err) {
      setFormState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (formState === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 lg:p-12 border border-border text-center">
        <CheckCircle2 className="w-16 h-16 text-teal mx-auto mb-6" />
        <h2 className="font-heading font-bold text-2xl text-primary-text mb-3">
          Thank you!
        </h2>
        <p className="text-secondary-text mb-8 max-w-md mx-auto">
          Your project request has been received. We'll review the details and contact you shortly.
        </p>
        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Chat with us on WhatsApp
        </a>
      </div>
    );
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-border bg-white text-primary-text text-sm focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-colors';
  const labelClass = 'block text-sm font-medium text-primary-text mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-border shadow-sm">
      <div className="space-y-5">
        <div>
          <label htmlFor="full_name" className={labelClass}>Full Name *</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={formData.full_name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="business_name" className={labelClass}>Business Name *</label>
          <input
            id="business_name"
            name="business_name"
            type="text"
            required
            value={formData.business_name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your business name"
          />
        </div>

        <div>
          <label htmlFor="industry" className={labelClass}>Industry *</label>
          <select
            id="industry"
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select your industry</option>
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="selected_package" className={labelClass}>Selected Package *</label>
          <select
            id="selected_package"
            name="selected_package"
            required
            value={formData.selected_package}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Choose a package</option>
            {packageOptions.map(pkg => (
              <option key={pkg.value} value={pkg.value}>{pkg.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="website_type" className={labelClass}>Website Type *</label>
          <select
            id="website_type"
            name="website_type"
            required
            value={formData.website_type}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select website type</option>
            {websiteTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Do you already have a website? *</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="has_existing_website"
                value="yes"
                checked={formData.has_existing_website === 'yes'}
                onChange={handleChange}
                className="w-4 h-4 text-electric"
              />
              <span className="text-sm text-primary-text">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="has_existing_website"
                value="no"
                checked={formData.has_existing_website === 'no'}
                onChange={handleChange}
                className="w-4 h-4 text-electric"
              />
              <span className="text-sm text-primary-text">No</span>
            </label>
          </div>
        </div>

        {formData.has_existing_website === 'yes' && (
          <div>
            <label htmlFor="existing_website_url" className={labelClass}>Existing Website URL</label>
            <input
              id="existing_website_url"
              name="existing_website_url"
              type="url"
              value={formData.existing_website_url}
              onChange={handleChange}
              className={inputClass}
              placeholder="https://your-website.com"
            />
          </div>
        )}

        <div>
          <label htmlFor="whatsapp_number" className={labelClass}>WhatsApp Number *</label>
          <input
            id="whatsapp_number"
            name="whatsapp_number"
            type="tel"
            required
            value={formData.whatsapp_number}
            onChange={handleChange}
            className={inputClass}
            placeholder="+91 99999 99999"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@business.com"
          />
        </div>

        <div>
          <label htmlFor="launch_timeline" className={labelClass}>Launch Timeline *</label>
          <select
            id="launch_timeline"
            name="launch_timeline"
            required
            value={formData.launch_timeline}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">When do you want to launch?</option>
            {timelines.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="project_requirement" className={labelClass}>Project Requirement</label>
          <textarea
            id="project_requirement"
            name="project_requirement"
            value={formData.project_requirement}
            onChange={handleChange}
            rows={4}
            className={inputClass}
            placeholder="What do you want your website to achieve?"
          />
        </div>

        {formState === 'error' && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Project Request →'
          )}
        </button>
      </div>
    </form>
  );
}

export function StartProjectForm() {
  return (
    <Suspense fallback={<div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-border shadow-sm min-h-[600px] flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-electric" /></div>}>
      <StartProjectFormInner />
    </Suspense>
  )
}