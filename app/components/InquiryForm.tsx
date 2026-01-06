import React, { useState } from 'react';

// Condensed for brevity, but you can paste your full 200+ list here
const COUNTRIES = [
  "Thailand", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", 
  "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", 
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
  "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", 
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
  "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", 
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Egypt", "Finland", 
  "France", "Germany", "Greece", "Hong Kong", "India", "Indonesia", "Japan", 
  "Malaysia", "Singapore", "United Kingdom", "United States", "Vietnam"
];

interface InquiryFormProps {
  className?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    country: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const inputStyle = `w-full bg-white/5 rounded-lg px-4 py-3 text-white 
                      placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                      transition-all backdrop-blur-xl border border-white/10`;

  const labelStyle = `block text-slate-400 text-sm font-medium mb-2 ml-1`;

  return (
    <div className={` p-8 relative overflow-hidden ${className}`}>
      <div className="relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Inquiry Type */}
            <div>
              <label className={labelStyle}>Inquiry Type</label>
              <select 
                required
                className={inputStyle}
                value={formData.inquiryType}
                onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
              >
                <option value="" className="bg-slate-900">Please select inquiry type</option>
                <option value="sales" className="bg-slate-900">Sales & Product Inquiry</option>
                <option value="technical" className="bg-slate-900">Technical Support</option>
                <option value="partnership" className="bg-slate-900">Partnership</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label className={labelStyle}>Country</label>
              <select 
                required
                className={inputStyle}
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
              >
                <option value="" className="bg-slate-900">Please select your country</option>
                {COUNTRIES.map(c => (
                  <option key={c} value={c} className="bg-slate-900">{c}</option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label className={labelStyle}>Name</label>
              <input 
                type="text" 
                required
                placeholder="Full Name"
                className={inputStyle}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Company */}
            <div>
              <label className={labelStyle}>Company</label>
              <input 
                type="text" 
                placeholder="Organization Name"
                className={inputStyle}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>

            {/* Phone */}
            <div>
              <label className={labelStyle}>Phone</label>
              <input 
                type="tel" 
                placeholder="+66 00-000-0000"
                className={inputStyle}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelStyle}>Email</label>
              <input 
                type="email" 
                required
                placeholder="email@company.com"
                className={inputStyle}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={labelStyle}>Message</label>
            <textarea 
              rows={4}
              placeholder="How can we help your organization?"
              className={`${inputStyle} resize-none`}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="bg-white w-full text-center flex items-center justify-center
                       rounded-full duration-200 text-slate-900 font-bold
                       text-xl gap-3 hover:shadow-xl hover:shadow-white/10 
                       transition-all active:scale-95 py-4"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;