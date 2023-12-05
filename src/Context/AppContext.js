
import { baseUrl } from '../baseUrl';
import { useState, createContext} from 'react';


export const AppContext = createContext();

export default function AppContextProvider({children}) {
  const [loading, setLoading]=useState(false);
  const [posts, setPost]=useState([]);
  const [page, setPages]=useState(1);
  const[totalpages, setTotalPages]=useState(null);

  async function fetchapi(page = 1){
    setLoading(true);
    let url=`${baseUrl}?page=${page}`;
    try{
      const output=await fetch(url);
      const data=await output.json();
      console.log(data);
      setPages(data?.page);
      setPost(data?.posts);
      setTotalPages(data?.totalPages);
    }
    catch(error){
      console.log('Something went wrong');
      setPages(1);
      setPost([]);
      setTotalPages(null);
    }
    setLoading(false);
    
  }

  function pageHandler(page){
    setPages(page);
    fetchapi(page);}

  const value={
    loading,
    setLoading,
    posts,
    setPost,
    page,
    setPages,
    totalpages,
    setTotalPages, 
  fetchapi,
pageHandler};

    
   

    
    
    return <AppContext.Provider value={value}>
      {children}
      </AppContext.Provider>


  
}

