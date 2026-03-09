import React, { useState } from 'react';

const improvementOptions = [
  { id: 'ban', label: 'WhatsApp Number BAN Issue' },
  { id: 'crm', label: 'Clients/Customer data management' },
  { id: 'seg', label: 'Customer Segmentation' },
  { id: 'bot', label: 'Automatic ChatBot' },
  { id: 'agent', label: 'AI Agent' },
  { id: 'marketing', label: 'WhatsApp Marketing/ Broadcasting' },
  { id: 'webdev', label: 'Web development (Website Build / WebApps Build)' },
  { id: 'facebook', label: 'Facebook Marketing' },
  { id: 'meta', label: 'Meta Ecosystem Setup (Pixel & Funnel)' },
  { id: 'other', label: 'Other (please specify)' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+880');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [improvements, setImprovements] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');
  const [showModal, setShowModal] = useState(false);

  function toggleOption(id: string) {
    setImprovements(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Basic validation: require name and at least one contact method
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and contact number.');
      return;
    }

    setShowModal(true);
    // Here you could POST to an API endpoint or send to analytics
    // For now we just show the modal and clear the form after a short delay
    setTimeout(() => {
      setName('');
      setCountryCode('+880');
      setPhone('');
      setCompany('');
      setImprovements([]);
      setOtherText('');
    }, 300);
  }

  // Replace with your sales WhatsApp number in international format (no + or dashes)
  const salesPhone = '919999999999';
  const waMessage = encodeURIComponent(`Hi, I'm ${name || 'interested in your services'}.`);
  const waLink = `https://wa.me/${salesPhone}?text=${waMessage}`;

  return (
    <section className="max-w-4xl mx-auto p-6 md:p-12">
      <div className="bg-gradient-to-r from-[#0f172a] via-[#082032] to-[#04263a] rounded-2xl shadow-2xl p-6 md:p-10 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Let's Improve Your Business</h2>
        <p className="text-sm text-slate-300 mb-6">Fill the form and our sales team will get back to you — or connect instantly via WhatsApp.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-slate-200 mb-2">Your Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-slate-200 mb-2">Contact Number</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                aria-label="Country code"
                className="w-full sm:w-36 px-3 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none"
              >
                <option value="+880">+880 (BD)</option>
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US/CA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (AU)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+49">+49 (DE)</option>
                <option value="+33">+33 (FR)</option>
                <option value="+81">+81 (JP)</option>
                <option value="+86">+86 (CN)</option>
                <option value="+234">+234 (NG)</option>
                <option value="other">Other</option>
              </select>

              <input
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="123 456 7890"
                aria-label="Phone number"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div className="text-xs text-slate-400 mt-1">Select country code and enter the rest of your number. Mobile-friendly layout.</div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-slate-200 mb-2">Company Name</label>
            <input
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-slate-200 mb-3">Which Part of your business want to Improve?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {improvementOptions.map(opt => (
                <label key={opt.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-700 hover:bg-slate-900/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={improvements.includes(opt.id)}
                    onChange={() => toggleOption(opt.id)}
                    className="mt-1 h-4 w-4 text-teal-400 bg-slate-800 border-slate-600 rounded"
                  />
                  <div>
                    <div className="text-sm font-semibold">{opt.label}</div>
                    <div className="text-xs text-slate-400">Select one or more</div>
                  </div>
                </label>
              ))}
            </div>

            {improvements.includes('other') && (
              <div className="mt-3">
                <label className="block text-sm font-medium text-slate-200 mb-2">Please specify</label>
                <input
                  value={otherText}
                  onChange={e => setOtherText(e.target.value)}
                  placeholder="Briefly describe what you'd like"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            )}
          </div>

          <div className="col-span-1 md:col-span-2 text-right mt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 font-semibold rounded-full shadow-lg hover:scale-[1.02] transition-transform"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 text-slate-900">
            <h3 className="text-2xl font-bold mb-2">Thank you — we received your request</h3>
            <p className="text-sm text-slate-600 mb-4">Our sales team will contact you soon.</p>
            <p className="text-sm text-slate-600 mb-4">You can press the WhatsApp button to connect immediately with our Sales Team.</p>

            <div className="flex gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.09 1.6 5.84L0 24l6.38-1.67A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.17-3.48-8.52zM12 21.5c-1.66 0-3.26-.45-4.66-1.3l-.33-.2-3.8.99.99-3.7-.21-.34A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5z" />
                </svg>
                Connect on WhatsApp
              </a>

              <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-slate-200 rounded-lg">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
