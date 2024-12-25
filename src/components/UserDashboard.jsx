export default function UserDashboard() {
  return (
    <div className="w-full h-screen bg-[#0f1728] flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-white flex flex-col justify-between overflow-auto">
        {/* Top Section */}
        <div className="pt-8 px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-[#497bff] text-white text-2xl font-bold rounded-lg">
              X
            </div>
            <div className="text-[#141414] text-2xl font-bold">Xertis</div>
          </div>
          {/* Menu Items */}
          <div className="mt-12 flex flex-col gap-3">
            <div className="p-3 bg-[#497bff] text-white rounded-md">Overview</div>
            <div className="p-3 text-[#424242] rounded-md hover:bg-gray-100">
              Certificates
            </div>
            <div className="p-3 text-[#424242] rounded-md hover:bg-gray-100">
              Students
            </div>
            <div className="p-3 text-[#424242] rounded-md hover:bg-gray-100">
              Create
            </div>
            <div className="p-3 text-[#424242] rounded-md hover:bg-gray-100">
              Settings
            </div>
          </div>
        </div>
        {/* Logout */}
        <div className="px-6 py-4">
          <div className="p-3 text-[#111111] rounded-md hover:bg-gray-100">
            Logout
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white flex flex-col p-8 overflow-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold text-[#0f1728]">Overview</div>
        </div>

        {/* Beardless Modal */}
        <div className="absolute top-4 right-8 flex items-center gap-3 bg-neutral-50 p-2 rounded-lg border border-neutral-100 shadow-md hover:bg-gray-100 transition w-[200px] cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center bg-[#497bff]/20 text-[#497bff] rounded-full">
            B
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-[#0f1728]">Beardless</div>
            <div className="text-xs text-[#667084]">Owner</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between items-center mt-[30]">
          <div className="text-2xl font-medium text-[#0f1728]">All Projects</div>
          <button className="flex items-center gap-2 bg-[#497bff] text-white px-4 py-2 rounded w-[200px]">
            Add Certificate
          </button>
        </div>
        <img className="w-64 h-64 mt-6" src="https://via.placeholder.com/256x256" alt="Placeholder" />
      </div>
    </div>
  );
}
