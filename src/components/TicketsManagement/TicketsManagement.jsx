import { use, useState } from "react";
import CountBox from "../CountBox/CountBox";
import Card from "../Card/Card";
import ProgressCard from "../Card/ProgressCard";
import Container from "../Container/Container";

const TicketsManagement = ({ fetchPromise }) => {
  const fetchData = use(fetchPromise);
 

  const [data, setData] = useState(fetchData);

 
  return (
    <Container>
      <div>
        <CountBox data={data} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className=" col-span-2">
            <h3 className="text-3xl font-semibold mb-5 text-center md:text-left">
              Customer Tickets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {data.length == 0 ? (
                <h1 className="font-bold  text-lg">No Data</h1>
              ) : (
                data.map((issue) => {
                  if (
                    issue.status == "In-Progress" ||
                    issue.status == "Pending"
                  ) {
                    return (
                      <Card
                        key={issue.ticketId}
                        data={data}
                        setData={setData}
                        issue={issue}
                      />
                    );
                  }
                })
              )}
            </div>
          </div>
          <div className="col-span-1  flex flex-col gap-8">
            <div className=" w-full ">
              <h2 className="text-3xl font-semibold">Task Status</h2>
              {data.map((element) => {
                if (element.status == "In-Progress") {
                  return (
                    <ProgressCard key={element.ticketId}
                      element={element}
                      data={data}
                      setData={setData}
                    />
                  );
                }
              })}
            </div>
            <div className=" w-full">
              <h2 className="text-3xl font-semibold">Resolved Tasks</h2>
              {data.map((element) => {
                if (element.status == "Resolved") {
                  return (
                    <div key={element.ticketId} className="flex flex-col mb-1.5 shadow-xl  p-3  bg-green-100 text-center">
                      <h1 className="text-xl font-semibold ">
                        {element.subject}
                      </h1>
                      <p className=" text-green-500 font-bold text-xl">
                        Resolved
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TicketsManagement;
