import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

export default function Countres() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(true)
  let [color, setColor] = useState("#21397d");


  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      if (response.status == 200) {
        setCountries(response.data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(inputValue)

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputValue.toLowerCase()) &&
    country.region.toLowerCase().includes(region.toLowerCase())
  );

  const handleFilterByRegion = (e) => {
    setRegion(e.target.value);
  }

  if (loading) {
    return (
      <div className="flex justify-center h-[88vh] items-center ">
        <BeatLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }


  return (
    <div className='container  h-full  min-h-[85vh] py-4  mt-2'>

      <div className='flex justify-between items-center mb-6'>
        <div className='w-96 h-[56px] shadow-sm px-4 py-2  flex items-center gap-2 bg-white  shadow-sky-200  rounded-md  dark:bg-slate-700'>
          <IoSearchSharp className='text-xl  dark:bg-slate-700' />

          <input onChange={({ target }) => setInputValue(target.value)} className='w-full focus-within:outline-none   dark:bg-slate-700 '  type="text" />
        </div>

        <div>
          <select onChange={handleFilterByRegion} className=' shadow-sm shadow-sky-400 focus-within:outline-none w-[200px] h-[56px] pl-3  rounded-md  dark:bg-slate-700 dark:text-white'>
            <option value="">Filtered by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className='grid sm-grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center md:justify-between gap-[56px]  '>
        {filteredCountries.map((country, index) => {
          return (
            <Link key={index} to={`/country/${country.name.common}`} className="card rounded-lg col-span-1 hover:scale[1.02] transition--all duration-300 hover:cursor-pointer bg-white shadow-md min-w-[264px] h-[336px] max-h-[336px]  dark:bg-slate-700 dark:text-white ">
              <div className='h-[160px]'>
                <img className='w-full h-full rounded-t-lg' src={country.flags.png} alt="234234" />
              </div>
              <div className='content  p-5 mt-3 flex flex-col gap-2'>
                <h1 className="font-bold text-xl">{country.name.common}</h1>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">Population:   <span className="font-normal">{country.population}</span></h2>
                  <p className="font-semibold"> Region:  <span className="font-normal">{country.region}</span> </p>
                  <p className="font-semibold"> Capital:  <span className="font-normal">{country.capital}</span> </p>
                </div>
              </div>

            </Link >

          )
        })}

      </div>

    </div>
  )
}
