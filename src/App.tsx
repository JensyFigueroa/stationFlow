import "./App.css"
import CreateGigs from "./components/QC/CreateGigs";
import React, { useRef, useState } from "react";
import TableGigs from "./components/TableGigs";


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

const App = () => {

  const [workers, setWorkers] = useState<Worker[]>([
    { id: 1, nameWorker: "Luis Negron" },
    { id: 2, nameWorker: "Francisco" },
    { id: 3, nameWorker: "Alexander" },
    { id: 4, nameWorker: "Diego" },
    { id: 5, nameWorker: "Angel" },
    
  ]);

  const [gigs, setGigs] = useState<Gig[]>([]);

  //  const inputRef = useRef<HTMLInputElement>(null) // 1er method
   const formExample = useRef(null)

  // Estado para el formulario
  
  const [newGig, setNewGig] = useState<Omit<Gig, "id">>({
    station: "",
    description: "",
    photo: "", 
    comments:"",
    assignedTo: "",
    status: "",
    inspector: "",
    inspectionDate: "",
  });

  // Función para manejar el cambio en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewGig({ ...newGig, [name]: value });
  };

  // Función para agregar el nuevo gig
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


  //   if (!formExample.current) return
  //  const formData = new FormData(formExample.current)

  //  const station = formData.get("station")
  //  const description = formData.get("description")
  //  const inspectionDate = formData.get("inspectionDate")

  //  console.log(station, description, inspectionDate)


    const nextId = gigs.length ? gigs[gigs.length - 1].id + 1 : 1;
    setGigs([...gigs, { ...newGig, id: nextId, inspectionDate:getTodayDate()}]);
    setNewGig({
      station: "",
      description: "",
      photo:"",
      comments:"",
      assignedTo: "",
      status: "",
      inspector: "",
      inspectionDate: "",
    });
      
  };

  const getTodayDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Mes inicia en 0
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
 
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  if (!e.target.files || e.target.files.length === 0) return;
  const file = e.target.files?.[0];

  // console.log(file)
  if (file) {
    const imageUrl = URL.createObjectURL(file); // esto devuelve string ✅
    setGigs((prevGigs) => {
      const newGigs = [...prevGigs];
      newGigs[index].photo = imageUrl; // siempre string
      return newGigs;
    });
  }
  
};
  
  return (
    <>
      <CreateGigs handleSubmit= {handleSubmit} newGig={newGig} setNewGig={setNewGig}  handleChange={handleChange} formExample={formExample}/>
      <TableGigs gigs={gigs} setGigs={setGigs} workers={workers} setWorkers={setWorkers} handleFileChange={handleFileChange}/>

    </>
  )
}
export default App