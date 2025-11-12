import React from 'react';
import type { User, Page } from '../types';
import UserIcon from './icons/UserIcon';
import HomeIcon from './icons/HomeIcon';

interface AdminDashboardProps {
  users: User[];
  setCurrentPage: (page: Page) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ users, setCurrentPage }) => {
  return (
    <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="text-amber-400"><UserIcon className="h-10 w-10" /></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white ml-4 tracking-tight">User Management</h1>
        </div>
        <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
            aria-label="Back to Home"
        >
            <HomeIcon className="h-5 w-5" />
            <span className="font-semibold text-sm hidden md:block">Home</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-slate-700 sm:rounded-lg">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-amber-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-amber-300 uppercase tracking-wider">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-800/50 divide-y divide-slate-700">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin' ? 'bg-green-900/70 text-green-300' : 'bg-blue-900/70 text-blue-300'}`}>
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;