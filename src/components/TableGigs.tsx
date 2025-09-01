import HeaderTable from "./HeaderTable";

interface Gig {
  id: number;
  station: string;
  description: string;
  photo: string;
  comments: string;
  assignedTo: string;
  status: string;
  inspector: string;
  inspectionDate: string;  
}

interface Worker {
  id: number;
  nameWorker: string;
}

interface Props {
    gigs: Gig[];
    setGigs: React.Dispatch<React.SetStateAction<Gig[]>>;
    workers: Worker[];
    setWorkers: React.Dispatch<React.SetStateAction<Worker[]>>
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

const TableGigs = ({gigs, setGigs, workers, handleFileChange} : Props) => {

  
  // 🔹 Cambiar comments
  const handleComments = (id: number, comment: string) => {
    setGigs(gigs.map(gig => gig.id === id ? { ...gig, comments: comment } : gig));
  };
  // 🔹 Cambiar asignado
  const handleAssign = (id: number, assignedTo: string) => {
    // setWorkers(workers.map(worker => worker.id === id ? { ...worker, nameWorker } : worker));
     setGigs(gigs.map(gig => gig.id === id ? { ...gig, assignedTo } : gig));
  };

  // 🔹 Cambiar estado
  const handleStatusChange = (id : number, status:string) => {
    setGigs(gigs.map(gig => gig.id === id ? { ...gig, status } : gig));
  };

  return (
    <>
        <h2>List Gigs</h2>

        <table className="border-collapse border border-gray-400 w-full">
       <HeaderTable gigs={gigs}/>
        <tbody>
          {gigs.map((gig, i) => (
            <tr key={gig.id}>
              <td className="border p-2">{gig.station}</td>
              <td className="border p-2">{gig.description}</td>

        <td className="border px-2 py-1 text-center tdPhoto">
                <input className="file"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={(e) => handleFileChange(e, i)}
                />
                {gig.photo && (
                  <img
                      src={gig.photo}
                      alt="preview"
                      className="w-16 h-16 object-cover border rounded"
                      width={50} height={50} 
                      
                    />
                )}

                
              </td>

              <td className="border p-2">
                <input
                  type="text"
                  value={gig.comments}
                  onChange={(e) => handleComments(gig.id, e.target.value)}
                  placeholder="Comments"
                  className="border p-1 rounded-md w-full"
                />
              </td>

              <td className="border p-2">
                <select
                  value={gig.assignedTo}
                  onChange={(e) => handleAssign(gig.id, e.target.value)}
                  className="border p-1 rounded-md"
                >
                  <option value="">-- Assigned to --</option>
                    {gig.station === "2" ? workers.map((worker) => (
                  <option key={worker.id} value={worker.nameWorker}>
                        {worker.nameWorker}
                  </option>
        ) ): <option></option>}
                </select>
              </td>

              {/* status */}
              <td className="border p-2">
                <select
                  value={gig.status}
                  onChange={(e) => handleStatusChange(gig.id, e.target.value)}
                  className="border p-1 rounded-md"
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Progreso">En Progreso</option>
                  <option value="Completado">Completado</option>
                </select>
              </td>
            

              <td className="border p-2">{gig.inspector}</td>
              <td className="border p-2">{gig.inspectionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default TableGigs