import { use } from "react";
import CountBox from "../CountBox/CountBox";

const TicketsManagement = ({ fetchPromise }) => {
  const fetchData = use(fetchPromise);
  console.log(fetchData);

  return (
    <div>
      <CountBox />
    </div>
  );
};

export default TicketsManagement;
