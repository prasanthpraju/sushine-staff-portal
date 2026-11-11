import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Mail, LockKeyhole, IdCard, ArrowRight } from "lucide-react";

// Import the logo directly from your assets folder based on your project structure
import logo from   "../../assets/logo.webp"; 

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    staffId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-6xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] flex overflow-hidden min-h-[700px]">
        
        {/* LEFT PANEL - WHITE BACKGROUND & BOLD LOGO */}
        <div className="hidden lg:flex lg:w-1/2 bg-white border-r border-gray-100 relative items-center justify-center overflow-hidden">
          
          {/* Subtle background radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01)_0%,transparent_100%)] pointer-events-none"></div>
          
          {/* Centered Bold Logo */}
          <div className="relative z-10 p-12 flex flex-col items-center justify-center transform transition-transform hover:scale-[1.02] duration-500">
            <img 
              src={logo} 
              alt="Sunshine Group of Educational Institutions" 
              className="w-72 md:w-96 object-contain drop-shadow-xl"
            />
          </div>

        </div>

        {/* RIGHT PANEL - FORM */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col relative bg-white overflow-y-auto max-h-[90vh] lg:max-h-none custom-scrollbar">
          
          <div className="flex justify-between items-center mb-10">
            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center gap-2">
              <img src={logo} alt="Sunshine" className="h-8 object-contain" />
            </div>
            
            <div className="hidden lg:block"></div>
            
            <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#153b70] transition-colors cursor-pointer">
              Sign In
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto">
            <h2 className="text-4xl font-bold text-[#0f253e] tracking-tight mb-2">
              Sign Up
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              Register to access the Sunshine Staff Portal.
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <div className="relative group">
                  <User className="absolute left-5 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#153b70] transition-colors duration-300" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-full py-4 pl-14 pr-6 outline-none transition-all duration-300 focus:bg-white focus:border-[#153b70] focus:ring-2 focus:ring-[#153b70]/20 placeholder:text-gray-400 hover:border-gray-300 cursor-text"
                  />
                </div>
              </div>

              <div>
                <div className="relative group">
                  <IdCard className="absolute left-5 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#153b70] transition-colors duration-300" />
                  <input
                    name="staffId"
                    value={formData.staffId}
                    onChange={handleChange}
                    placeholder="Staff ID"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-full py-4 pl-14 pr-6 outline-none transition-all duration-300 focus:bg-white focus:border-[#153b70] focus:ring-2 focus:ring-[#153b70]/20 placeholder:text-gray-400 hover:border-gray-300 cursor-text"
                  />
                </div>
              </div>

              <div>
                <div className="relative group">
                  <Mail className="absolute left-5 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#153b70] transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-full py-4 pl-14 pr-6 outline-none transition-all duration-300 focus:bg-white focus:border-[#153b70] focus:ring-2 focus:ring-[#153b70]/20 placeholder:text-gray-400 hover:border-gray-300 cursor-text"
                  />
                </div>
              </div>

              <div>
                <div className="relative group">
                  <LockKeyhole className="absolute left-5 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#153b70] transition-colors duration-300" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    minLength={8}
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-full py-4 pl-14 pr-12 outline-none transition-all duration-300 focus:bg-white focus:border-[#153b70] focus:ring-2 focus:ring-[#153b70]/20 placeholder:text-gray-400 hover:border-gray-300 cursor-text"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-4 text-gray-400 hover:text-[#153b70] transition-colors duration-200 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <div className="relative group">
                  <LockKeyhole className="absolute left-5 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#153b70] transition-colors duration-300" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    minLength={8}
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-full py-4 pl-14 pr-12 outline-none transition-all duration-300 focus:bg-white focus:border-[#153b70] focus:ring-2 focus:ring-[#153b70]/20 placeholder:text-gray-400 hover:border-gray-300 cursor-text"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-5 top-4 text-gray-400 hover:text-[#153b70] transition-colors duration-200 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-[#153b70] hover:bg-[#0f253e] text-white font-semibold py-4 rounded-full shadow-md transition-all duration-300 mt-6 cursor-pointer"
              >
                Sign Up
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="mt-8 pt-8 flex justify-between items-center text-xs text-gray-400 font-medium">
            <p>Requires admin approval.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-600 cursor-pointer">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;