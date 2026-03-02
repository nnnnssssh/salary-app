"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-6">Salary App</h2>

        <ul className="space-y-3 text-sm">
          <li>
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/dashboard/divisi" className="hover:text-gray-300">
              Divisi
            </Link>
          </li>

          <li>
            <Link href="/dashboard/jabatan" className="hover:text-gray-300">
              Jabatan
            </Link>
          </li>
        </ul>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-500 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}