import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaComments } from 'react-icons/fa'

const Support = () => {
  return (
    <section className="bg-primary-lighter-bg border border-border rounded-[12px] p-6 max-w-4xl mx-auto w-full">
      <h2 className="text-[18px] font-semibold text-primary-text mb-6">Support</h2>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-highlight-blue text-md" />
          <div>
            <h3 className="text-sm text-primary-text font-semibold">Phone</h3>
            <p className="text-secondary-text text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-highlight-blue text-md" />
          <div>
            <h3 className="text-sm text-primary-text font-semibold">Email</h3>
            <p className="text-secondary-text text-sm">support@example.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaComments className="text-highlight-blue text-md" />
          <div>
            <h3 className="text-sm text-primary-text font-semibold">Live Chat</h3>
            <p className="text-secondary-text text-sm">Available 9:00 AM – 6:00 PM (Mon-Fri)</p>
          </div>
        </div>

        <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-secondary-text text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              className="text-sm w-full rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text text-sm focus:outline-none focus:ring-2 focus:ring-highlight-blue"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-secondary-text text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              className="text-sm w-full rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text text-sm focus:outline-none focus:ring-2 focus:ring-highlight-blue"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-secondary-text text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="How can we help you?"
              required
              className="text-sm w-full rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text text-sm focus:outline-none focus:ring-2 focus:ring-highlight-blue resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-highlight-blue text-sm transition-colors duration-200 text-white font-semibold rounded-[8px] py-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Support
