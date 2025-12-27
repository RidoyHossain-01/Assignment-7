import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TicketsManagement from "./components/TicketsManagement/TicketsManagement";
import { ToastContainer } from "react-toastify";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();

  return (
    <div className="px-2 md:px-5">
      <Navbar />
      <Suspense fallback={"loading"}>
        <TicketsManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
