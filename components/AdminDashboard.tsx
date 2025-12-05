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
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-6xl mx-auto relative overflow-hidden">
       {/* Ambient Blue Glow for Admin Theme */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
            <UserIcon className="h-8 w-8" />
          </div>
          <div className="ml-5">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">User Management</h1>
            <p className="text-slate-400 text-sm mt-1">Manage permissions and accounts.</p>
          </div>
        </div>
        <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300 group"
            aria-label="Back to Home"
        >
            <HomeIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm hidden md:block">Home</span>
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-700/50 shadow-inner bg-slate-900/30">
        <table className="min-w-full divide-y divide-slate-800">
          <thead>
            <tr className="bg-slate-900/80">
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                User Identity
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                Access Role
              </th>
              <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">
                Manage
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {users.map((user) => (
              <tr key={user.email} className="group hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 font-serif font-bold text-lg">
                        {user.email.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors">{user.email}</div>
                      <div className="text-xs text-slate-500">Registered Account</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                   <button 
                    onClick={() => handleToggleRole(user.email)}
                    className={`
                        px-4 py-1.5 inline-flex text-xs leading-5 font-bold uppercase tracking-wide rounded-full cursor-pointer transition-all hover:shadow-lg transform hover:scale-105 active:scale-95 border
                        ${user.role === 'admin' 
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20' 
                            : 'bg-slate-700/30 text-slate-400 border-slate-600/30 hover:bg-slate-700/50 hover:text-slate-200'
                        }
                    `}
                    title="Click to switch role"
                   >
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 my-auto ${user.role === 'admin' ? 'bg-blue-400' : 'bg-slate-500'}`}></span>
                    {user.role}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleDeleteUser(user.email)}
                    className="text-slate-500 hover:text-red-400 bg-transparent hover:bg-red-900/10 p-2 rounded-lg transition-all border border-transparent hover:border-red-900/30"
                    title="Delete User Account"
                  >
                    <div className="flex items-center space-x-1">
                         <span className="text-xs font-semibold hidden group-hover:inline">Remove</span>
                         <XIcon className="h-4 w-4" />
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex items-start space-x-3 p-4 bg-blue-900/10 border border-blue-900/30 rounded-xl text-sm text-blue-200/70">
          <div className="mt-0.5 text-blue-400">ℹ️</div>
          <p>Admin privileges grant full access to this dashboard. Be careful when managing roles. Deleting a user is irreversible.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;