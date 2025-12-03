
import React from 'react';
import type { User, Page, UserRole } from '../types';
import UserIcon from './icons/UserIcon';
import HomeIcon from './icons/HomeIcon';
import XIcon from './icons/XIcon';

interface AdminDashboardProps {
  users: User[];
  setUsers: (users: User[]) => void;
  setCurrentPage: (page: Page) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ users, setUsers, setCurrentPage }) => {
  
  const handleDeleteUser = (email: string) => {
    if (window.confirm(`Are you sure you want to delete user ${email}?`)) {
      const updatedUsers = users.filter(u => u.email !== email);
      setUsers(updatedUsers);
    }
  };

  const handleToggleRole = (email: string) => {
    const updatedUsers = users.map(u => {
      if (u.email === email) {
        // Prevent removing the last admin
        if (u.role === 'admin' && users.filter(user => user.role === 'admin').length <= 1) {
             alert("Cannot remove the last administrator.");
             return u;
        }
        const newRole: UserRole = u.role === 'admin' ? 'user' : 'admin';
        return { ...u, role: newRole };
      }
      return u;
    });
    setUsers(updatedUsers);
  };

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
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-800/50 divide-y divide-slate-700">
                {users.map((user) => (
                  <tr key={user.email} className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                       <button 
                        onClick={() => handleToggleRole(user.email)}
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer transition-transform hover:scale-105 ${user.role === 'admin' ? 'bg-green-900/70 text-green-300 border border-green-700/50' : 'bg-blue-900/70 text-blue-300 border border-blue-700/50'}`}
                        title="Click to toggle role"
                       >
                        {user.role}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => handleDeleteUser(user.email)}
                        className="text-red-400 hover:text-red-200 bg-red-900/20 hover:bg-red-900/50 p-2 rounded-full transition-all"
                        title="Delete User"
                      >
                        <XIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-sm mt-4 text-center">
        Click on a role badge to toggle between Admin and User.
      </p>
    </div>
  );
};

export default AdminDashboard;
