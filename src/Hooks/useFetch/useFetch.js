import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch=(type,url) =>{
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData[type]);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, data, error};
}

export default useFetch;
