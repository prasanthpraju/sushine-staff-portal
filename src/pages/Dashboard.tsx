import { useNavigate } from "react-router-dom";
import {
  ImagePlus,
  CheckCircle,
  Clock,
  XCircle,
  FileText,
  LogOut,
  UserRound,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

// Import your actual logo (adjust path if needed)
import logo from "../assets/logo.webp";

function Dashboard() {
  const { staff, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const stats = [
    {
      title: "Total Posts",
      value: "24",
      icon: FileText,
      color: "bg-blue-50 text-[#153b70]",
    },
    {
      title: "Approved Posts",
      value: "18",
      icon: CheckCircle,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pending Approval",
      value: "04",
      icon: Clock,
      color: "bg-amber-50 text-[#f5a623]",
    },
    {
      title: "Rejected Posts",
      value: "02",
      icon: XCircle,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] font-sans selection:bg-[#153b70] selection:text-white">
      
      {/* HEADER - Sticky with Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Sunshine School" 
              className="h-10 sm:h-12 object-contain"
            />
            <div className="hidden sm:block border-l-2 border-gray-200 pl-4 ml-2">
              <p className="text-[#a6192e] text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                Staff Portal
              </p>
            </div>
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-[#0f253e]">
                {staff?.name || "Staff Member"}
              </p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                {staff?.staffId || "Staff ID: N/A"}
              </p>
            </div>

            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 shadow-inner">
              <UserRound className="text-[#153b70]" size={20} />
            </div>

            <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* WELCOME SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block px-3 py-1 bg-[#153b70]/10 text-[#153b70] text-xs font-bold tracking-widest uppercase rounded-full mb-3">
              Overview
            </span>
            <h2 className="text-3xl font-bold text-[#0f253e] tracking-tight">
              Welcome back, {staff?.name?.split(' ')[0] || "Staff"}!
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Manage your institutional media, photos, videos, and daily school activities here.
            </p>
          </div>

          <button
            onClick={() => navigate("/create-post")}
            className="flex items-center justify-center gap-2 bg-[#153b70] hover:bg-[#0f253e] text-white px-6 py-3.5 rounded-xl font-semibold shadow-md shadow-[#153b70]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Plus size={20} strokeWidth={2.5} />
            Create New Post
          </button>
        </div>

        {/* STATISTICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <ArrowUpRight size={20} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                </div>
                
                <p className="text-gray-500 text-sm font-medium">
                  {item.title}
                </p>
                
                <h3 className="text-3xl font-bold text-[#0f253e] mt-1 tracking-tight">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>

        {/* RECENT POSTS TABLE/EMPTY STATE */}
        <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Section Header */}
          <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white">
            <div>
              <h3 className="text-xl font-bold text-[#0f253e] tracking-tight">
                Recent Posts
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Track the status of your latest media submissions.
              </p>
            </div>
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
              <FileText className="text-gray-400" size={20} />
            </div>
          </div>

          {/* Empty State */}
          <div className="p-16 text-center bg-gray-50/30">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
              <ImagePlus className="text-[#153b70]" size={32} strokeWidth={1.5} />
            </div>

            <h4 className="text-lg font-bold text-[#0f253e]">
              No recent posts available
            </h4>
            <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
              Your submitted photos and videos will appear here once you create your first post.
            </p>

            <button
              onClick={() => navigate("/create-post")}
              className="inline-flex items-center gap-2 text-[#153b70] font-semibold text-sm mt-6 hover:text-[#0f253e] hover:underline cursor-pointer transition-colors"
            >
              <Plus size={16} />
              Create your first post
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;