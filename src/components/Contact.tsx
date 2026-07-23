import { Mail, Send, Check, MessageSquare, Copy, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter a message";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    // Form submission simulation / Mailto construct
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);

      const mailtoUrl = `mailto:obraimssteve@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry from " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSendSuccess(false), 5000);
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("obraimssteve@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
            <Mail className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Let's Build Something Together
          </h2>
          <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base">
            Have a project in mind, a software engineering opportunity, or a financial IT consultation? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 bg-stone-50 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700/80 rounded-2xl space-y-6">
              <h3 className="text-lg font-display font-bold text-stone-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3 text-stone-700 dark:text-slate-300">
                  <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-stone-500 dark:text-slate-400 block uppercase">
                      Email Address
                    </span>
                    <a href="mailto:obraimssteve@gmail.com" className="font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      obraimssteve@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-stone-700 dark:text-slate-300">
                  <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-stone-500 dark:text-slate-400 block uppercase">
                      WhatsApp Direct
                    </span>
                    <a href="https://wa.me/254743717285" target="_blank" rel="noreferrer" className="font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      +254 743 717 285
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-stone-700 dark:text-slate-300">
                  <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-stone-500 dark:text-slate-400 block uppercase">
                      Location
                    </span>
                    <span className="font-semibold">
                      Kenya
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/80 dark:border-slate-700/80">
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 hover:bg-stone-100 dark:hover:bg-slate-800 text-stone-800 dark:text-slate-200 text-xs font-mono font-medium rounded-xl transition cursor-pointer"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  <span>{copiedEmail ? "Email Address Copied!" : "Copy obraimssteve@gmail.com"}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-stone-50/60 dark:bg-slate-800/60 border border-stone-200/80 dark:border-slate-700/80 rounded-2xl p-6 md:p-8 shadow-xs">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2.5 bg-white dark:bg-slate-900 border rounded-xl text-stone-900 dark:text-white text-sm outline-none transition ${
                      formErrors.name ? "border-rose-500" : "border-stone-200 dark:border-slate-700 focus:border-indigo-500"
                    }`}
                  />
                  {formErrors.name && <span className="text-[11px] text-rose-500 mt-1 block">{formErrors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2.5 bg-white dark:bg-slate-900 border rounded-xl text-stone-900 dark:text-white text-sm outline-none transition ${
                      formErrors.email ? "border-rose-500" : "border-stone-200 dark:border-slate-700 focus:border-indigo-500"
                    }`}
                  />
                  {formErrors.email && <span className="text-[11px] text-rose-500 mt-1 block">{formErrors.email}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Project Inquiry"
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 rounded-xl text-stone-900 dark:text-white text-sm outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className={`w-full px-4 py-2.5 bg-white dark:bg-slate-900 border rounded-xl text-stone-900 dark:text-white text-sm outline-none transition resize-none ${
                    formErrors.message ? "border-rose-500" : "border-stone-200 dark:border-slate-700 focus:border-indigo-500"
                  }`}
                />
                {formErrors.message && <span className="text-[11px] text-rose-500 mt-1 block">{formErrors.message}</span>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition shadow-md shadow-indigo-500/20 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Preparing Message...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Direct Email</span>
                    </>
                  )}
                </button>
              </div>

              {sendSuccess && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-700 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Opening your mail client to dispatch message to obraimssteve@gmail.com</span>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
