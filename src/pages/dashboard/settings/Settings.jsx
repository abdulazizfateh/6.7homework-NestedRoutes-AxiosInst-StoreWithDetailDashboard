import React from 'react';

const Settings = () => {
  return (
    <section className="bg-primary-lighter-bg border border-border rounded-[12px] p-6 max-w-4xl mx-auto w-full">
      <h2 className="text-[18px] font-semibold text-primary-text mb-6">Settings</h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username" className="block text-secondary-text font-semibold text-sm mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="user123"
            className="text-sm w-full rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-highlight-blue"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-secondary-text font-semibold text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="user@example.com"
            className="text-sm w-full rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-highlight-blue"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-secondary-text font-semibold text-sm mb-1">
            New Password
          </label>
          <input
            type="password"
            id="password"
            placeholder=""
            className="text-sm w-full rounded-[8px] bg-primary-dark-bg border border-border p-3 text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-highlight-blue"
          />
        </div>

       

        <button
          type="submit"
          className="w-full text-sm bg-highlight-blue transition-colors duration-200 text-white font-semibold rounded-[8px] py-3"
        >
          Save Settings
        </button>
      </form>
    </section>
  );
};

export default Settings;
