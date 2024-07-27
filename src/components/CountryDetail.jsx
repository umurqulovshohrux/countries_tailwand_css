import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
export default function CountryDetail() {
  const [countryDetail, setCountryDetail] = useState([]);

  const { countryName } = useParams();
  const [loading, setLoading] = useState(true)
  let [color, setColor] = useState("#21397d");


  const override  = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        if (response.status === 200) {
          setCountryDetail(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchData();
  }, [countryName]);

  console.log(countryDetail);

  if(loading){
    return (
      <div className="flex justify-center h-[88vh] items-center ">
         <BeatLoader
     
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )
  }

  return (
    <div className="container mt-3 h-[88vh] flex flex-col justify-center items-start">
      <Link to="/" className="shadow-lg bg-slate-100 px-5 py-2 dark:bg-slate-700 dark:text-white rounded-lg mb-3 flex justify-center items-center gap-2">
        <FaArrowLeft /> <span>Back</span>
      </Link>

      {countryDetail.map((item, index) => {
        const nativeName = Object.values(item.name.nativeName || {})[0]?.common || "N/A";
        const currencies = Object.values(item.currencies || {}).map(currency => currency.name).join(", ") || "N/A";
        const languages = Object.values(item.languages || {}).join(", ") || "N/A";

        return (
          <div key={index} className="h-2/3 w-full flex items-center justify-between">
            <div className="w-1/2 h-[380px]">
              <img className="w-full h-full max-w-[540px] rounded-lg" src={item.flags.png} alt="Country flag" />
            </div>

            <div className="w-1/2 flex items-end  dark:text-white ">
              <div className="w-full min-h-[301px] p-3 ">
                <h1 className="font-bold text-2xl">{item.name.common}</h1>

                <div className="mt-5 flex justify-between gap-3 max-h-[300px] flex-wrap">
                  <div className="flex flex-col gap-3  ">
                    <h2 className="font-semibold">
                      Native Name: <span className="font-normal">{nativeName}</span>
                    </h2>
                    <h2 className="font-semibold">
                      Population: <span className="font-normal">{ item.population.toLocaleString() }</span>
                    </h2>
                    <h2 className="font-semibold">
                      Region: <span className="font-normal">{ item.region }</span>
                    </h2>
                    <h2 className="font-semibold">
                      Sub Region: <span className="font-normal">{ item.subregion }</span>
                    </h2>
                    <h2 className="font-semibold">
                      Capital: <span className="font-normal">{ item.capital }</span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-semibold">
                      Top Level Domain: <span className="font-normal">{item.tld.join(", ")}</span>
                    </h2>
                    <h2 className="font-semibold">
                      Currencies: <span className="font-normal">{ currencies }</span>
                    </h2>
                    <h2 className="font-semibold">
                      Languages: <span className="font-normal">{ languages }</span>
                    </h2>
                  </div>
                </div>

                <div className="flex gap-4 items-center flex-wrap mt-5">
                  <h2>Border Countries:</h2>
                  {item.borders ? item.borders.map((border, idx) => (
                    <button key={idx} className="shadow-md px-4 py-1 rounded-md">
                      {border}
                    </button>
                  )) : <span>N/A</span>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
