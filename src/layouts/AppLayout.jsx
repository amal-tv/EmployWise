import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-[#fef6e4] text-gray-800">
      <main className="min-h-screen container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
