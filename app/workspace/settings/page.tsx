"use client";

import { signOut } from "next-auth/react";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Cài đặt</h1>
      <div className="max-w-md space-y-4">
        <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
          <h3 className="font-semibold mb-2">Bảo mật</h3>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}
