'use client';

import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
      <div className="space-y-8">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-purple-600 focus:outline-none transition-colors peer placeholder-transparent text-lg"
            placeholder="Name"
          />
          <label 
            htmlFor="name"
            className="absolute left-0 -top-4 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-600"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-purple-600 focus:outline-none transition-colors peer placeholder-transparent text-lg"
            placeholder="Email"
          />
          <label 
            htmlFor="email"
            className="absolute left-0 -top-4 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-600"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-purple-600 focus:outline-none transition-colors peer placeholder-transparent text-lg resize-none"
            placeholder="Message"
          />
          <label 
            htmlFor="message"
            className="absolute left-0 -top-4 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-600"
          >
            Message
          </label>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-12 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300 font-medium tracking-wider"
        >
          {status === 'sending' ? (
            <div className="flex items-center space-x-2">
              <motion.div
                className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>SENDING...</span>
            </div>
          ) : (
            'SUBMIT'
          )}
        </button>
      </div>

      {status === 'success' && (
        <div className="text-purple-600 text-center font-medium">
          <Typewriter
            words={['Message sent successfully!']}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </div>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center font-medium">Failed to send message. Please try again.</p>
      )}
    </form>
  );
} 