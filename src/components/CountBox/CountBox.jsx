import Container from "../Container/Container";

const CountBox = ({data}) => {

  
  
  const inProgress = data.filter(element=>element.status=='In-Progress')
  const resolved = data.filter(element=>element.status==="Resolved")

  // console.log(resolved);
  
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
        <div className="rounded-md p-7 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] h-40 md:h-64 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">In-Progress</h2>
          <p className="text-5xl">{inProgress.length}</p>
        </div>

        <div className="rounded-md p-7 text-white bg-linear-to-r from-[#54CF68] to-[#00827A]  h-40 md:h-64 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Resolved</h2>
          <p className="text-5xl">{resolved.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
