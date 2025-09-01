import "./HeaderTable.css"
interface Gig {
  id: number;
  station: string;
  description: string;
  photo: string;
  comments : string;
  assignedTo: string;
  status: string;
  inspector: string;
  inspectionDate: string;
}

interface Props {
  gigs: Gig[];
}

const HeaderTable = ({gigs} : Props) => {
   if (!gigs || gigs.length === 0) return null; 

    const namesHeader = Object.keys(gigs[0]).filter(key => key !== "id")
    
  return (
    <thead>
          <tr >
            {namesHeader.map((key) => (
                 <th key={key} className="border p-2">{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</th>
            ))}
            
          </tr>
    </thead>
  )
} 
export default HeaderTable