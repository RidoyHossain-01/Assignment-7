import { toast } from "react-toastify";

const Card = ({ issue, data, setData }) => {
  const handleClick = () => {
    const currentData = data.find((elm) => elm.ticketId === issue.ticketId);
    if (currentData.status == "Pending") {
      currentData.status = "In-Progress";
      toast.success("In-Progress");
      const resData = data.filter((elm) => elm.ticketId != issue.ticketId);
      setData([currentData, ...resData]);
    }

    
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm space-y-3 w-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-semibold text-gray-900 text-sm md:text-base">
          {issue?.subject}
        </h2>

        <span
          className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-100 ${
            issue?.status === "Pending"
              ? "text-red-500 bg-red-100"
              : issue?.status === "In-Progress"
              ? "text-yellow-500 bg-yellow-100"
              : "text-green-500 bg-green-100"
          }`}
        >
          <span
            className={`w-2 h-2  rounded-full ${
              issue?.status === "Pending"
                ? " bg-red-500"
                : issue?.status === "In-Progress"
                ? "bg-yellow-500"
                : " bg-green-500"
            }`}
          ></span>
          {issue?.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {issue?.description}
      </p>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between text-xs pt-2 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-gray-400">{issue?.ticketId}</span>
          <span
            className={`font-medium p-1 rounded-md ${
              issue?.priority === "High"
                ? "text-red-500 bg-red-100"
                : issue?.priority === "Medium"
                ? "text-yellow-500 bg-yellow-100"
                : "text-green-500 bg-green-100"
            }`}
          >
            {issue?.priority}
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <span>{issue?.requestedBy}</span>
          <span className="flex items-center gap-1">{issue?.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
