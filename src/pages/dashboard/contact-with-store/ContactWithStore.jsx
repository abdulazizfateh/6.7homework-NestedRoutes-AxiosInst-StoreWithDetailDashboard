import React from 'react';

const ContactWithStore = () => {
  return (
    <section className="bg-primary-lighter-bg border border-border rounded-[12px] p-6 max-w-4xl mx-auto w-full">
      <h2 className="text-[18px] font-semibold text-primary-text mb-6">Contact Us</h2>
      
      <div className="space-y-6">
        <p className="text-secondary-text text-sm mb-2">
          If you have any questions, feedback, or inquiries, feel free to reach out to us. We’re here to help!
        </p>

        <div>
          <h3 className="text-sm text-primary-text font-semibold mb-1">Address</h3>
          <p className="text-secondary-text text-sm">123 Learning St., Tashkent, Uzbekistan</p>
        </div>

        <div>
          <h3 className="text-sm text-primary-text font-semibold mb-1">Email</h3>
          <p className="text-secondary-text text-sm">contact@example.com</p>
        </div>

        <div>
          <h3 className="text-sm text-primary-text font-semibold mb-1">Phone</h3>
          <p className="text-secondary-text text-sm">+998 90 123 45 67</p>
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
              className="w-full text-sm rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-highlight-blue"
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
              className="w-full text-sm rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-highlight-blue"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-secondary-text text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              required
              className="w-full text-sm rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-highlight-blue resize-none"
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
  );
};

export default ContactWithStore;
