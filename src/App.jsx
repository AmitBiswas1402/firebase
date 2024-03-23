import "./App.css";
import NavBar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import {collection, getDocs} from 'firebase/firestore'
import { db } from "./config/firebase";
import {useState, useEffect} from 'react' 
import {HiOutlineUserCircle} from 'react-icons/hi'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    
    const getContacts = async () => {
      try {

        const contactsRef = collection(db, "contacts")
        const contactSnapshot = await getDocs(contactsRef)
        const contactLists = contactSnapshot.docs.map((doc) =>  {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setContacts(contactLists)
      } catch (error) {
        console.log(error);
      }

    }

  }, [])
  

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <NavBar />
      <div className="flex relative items-center gap-2">
        <FiSearch className="absolute ml-1 text-3xl text-white" />
        <input
          type="text"
          className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
        />
        <div>
          <FaCirclePlus className="cursor-pointer text-5xl text-white" />
        </div>
      </div>
      <div>{
        contacts.map((contact)=>(

          <div key={contact.id}>
            <HiOutlineUserCircle />
            <div className="text-white">
              <h2 className="">{contact.name}</h2>
              <p className="">{contact.email}</p>
            </div>
          </div>

        ))
        }

      </div>
    </div>
  );
}

export default App;
