interface Gig {
  id: number;
  station: string;
  description: string;
 
  comments: string;
  assignedTo: string;
  status: string;
  inspector: string;
  inspectionDate: string;
}

interface Props {
  handleSubmit : (e: React.FormEvent) => void;
  handleChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
  newGig: Omit<Gig, "id">;
  setNewGig: React.Dispatch<React.SetStateAction<Omit<Gig, "id">>>
  formExample: React.RefObject<null>;
  
}

const CreateGigs = ({handleSubmit, handleChange, newGig, setNewGig, /* getTodayDate,  inputRef */ formExample }: Props) => {

  // console.log(inputRef.current?.value)
  return (
    <>
        <h2>Add Gigs</h2>

        <form onSubmit={handleSubmit} ref={formExample} className="mb-4">
        {/* <input
          ref={inputRef}
          type="text"
          name="station"
          placeholder="Station"
          value={newGig.station}
          onChange={handleChange}
          className="border p-1 mr-2"
        /> */}

        <select name="station" value={newGig.station} onChange={(e) =>
    setNewGig({ ...newGig, station: e.target.value })
  } >
          <option value="" disabled >Choose Station</option>
          <option value= "1">Station 1</option>
          <option value= "2">Station 2</option>
          <option value= "3">Station 3</option>
          <option value= "4">Station 4</option>
          <option value= "5">Station 5</option>
          <option value= "6">Station 6</option>
          <option value= "7">Station 7</option>
          <option value= "8">Station 8</option>
          <option value= "9">Station 9</option>
          <option value= "CS">Station Cab Shop</option>
          <option value= "BS">Station Body Shop</option>
          <option value= "PT">Station Paint Shop</option>
          <option value= "Prep">Station Prep</option>
          <option value= "H">Station Harnes</option>
        </select>
        <input
        
          type="text"
          name="description"
          placeholder="Description"
          value={newGig.description}
          onChange={handleChange}
          className="border p-1 mr-2"
        />
{/*   
        <input
          type="text"
          name="inspector"
          placeholder="Inspector"
          value={newGig.inspector}
          onChange={handleChange}
          className="border p-1 mr-2"
        /> */}
  
        {/* <input
          disabled
          type="text"
          name="inspectionDate"
          value={newGig.inspectionDate = getTodayDate()}
          className="border p-1 mr-2"
        /> */}
        
        <button type="submit" className="btn btn-info">
          Add Gig
        </button>
      </form>

    
        
    </>
  )
}
export default CreateGigs