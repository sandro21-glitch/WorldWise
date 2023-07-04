import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
const AppLayout = () => {
  return (
    <main className="section">
      <div className="flex h-full flex-col md:flex-row">
        <Sidebar />
        <Map />
      </div>
    </main>
  );
};

export default AppLayout;
