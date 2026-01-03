import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Settings
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your account preferences and application settings
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Profile Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 rounded-lg border
                       bg-white dark:bg-gray-800
                       border-gray-300 dark:border-gray-700
                       text-gray-800 dark:text-gray-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 rounded-lg border
                       bg-white dark:bg-gray-800
                       border-gray-300 dark:border-gray-700
                       text-gray-800 dark:text-gray-200"
          />
        </div>

        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Save Profile
        </button>
      </div>

      {/* Preferences */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Preferences
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">
            Enable Dark Mode
          </span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-5 h-5 accent-blue-600"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">
            Email Notifications
          </span>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif(!emailNotif)}
            className="w-5 h-5 accent-blue-600"
          />
        </div>
      </div>

      {/* Security */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Security
        </h2>

        <button className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                           text-gray-700 dark:text-gray-300
                           hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Change Password
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 dark:bg-red-950 rounded-xl border border-red-200 dark:border-red-800 p-6 space-y-3">
        <h2 className="text-lg font-semibold text-red-700 dark:text-red-400">
          Danger Zone
        </h2>
        <p className="text-sm text-red-600 dark:text-red-400">
          Deleting your account is irreversible.
        </p>
        <button className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
