import React, { useEffect, useState } from "react";
import Card from "./Cards/Card";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import Card2 from "./Cards/Card2";

const Characters = () => {
  const [todos, setTodos] = useState();
  const [data, setData] = useState([]);
  //establece el parámetro de búsqueda a una cadena de texto vacía.
  const [q, setQ] = useState("");
  //     set search parameters establece parámetros de búsqueda
  //     solo queremos buscar países por capital y nombre
  //     esta lista puede ser más larga si quieres
  //     hasta puedes buscar países por su número de población
  // 	  solo tienes que agregarlo al arreglo.
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [genderFilter, setGenderFilter] = useState(["All"])

  const infoApi = async () => {
    try {
      const info = await axios.get("https://rickandmortyapi.com/api/character");
      /*      data.push(...info.data.results); */
      const pages = await info.data.info.pages;
      let allResults = [];
      for (var i = 1; pages >= i; i++) {
        var info2 = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${i}`
        );
        console.log("primerconsoleloggg", info2.data.results);
        allResults = [...allResults, ...info2.data.results];
        /* data.push(...info2.data.results); */
        /* setData(info2.data.results) */
        console.log(allResults, "itineracion", i);
      }
      console.log(data, "fin de funcion");
      setData(allResults);
      setTodos(data);
    } catch (error) {
      console.log(error);
      return error;
    }
    /* setTodos(info.data.results) */
  };

  useEffect(() => {
    infoApi();
  }, []);

  function search(items) {
    /* return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    }); */
    return items.filter((item) => {
      /*
    // aquí vamos a chequear si nuestra región es igual a nuestro estado c
    // si es igual, entonces deberá retornar solo los elementos que cumplan con el criterio de búsqueda
    // caso contrario, deberá retornar todos los países.
    */
      if (item.status == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  console.log(todos);
  return (
    <div className="pt-24">
      <div className="w-full flex flex-row-reverse items-center px-4">
        <div className="flex flex-row items-center float-right">
          <span className="text-white">Search:</span>
          <label htmlFor="Search by name">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input p-2 rounded-md ml-2"
              placeholder="Search by name"
              value={q}
              /*
              // establece el valor de nuestro parametro q del useState
              //  cada vez que el usuario tipea en el campo de búsqueda
              */
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <span className="text-white">Status:</span>
          <select
            className="p-2 mx-2 rounded-md"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="">
          <span className="text-white">Gender:</span>
          <select
            className="p-2 mx-2 rounded-md"
            onChange={(e) => {
              setGenderFilter(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center  w-[100%]">
        {!todos ? (
          ///LOADER
          <div class="text-center sm:mt-[15%] mt-[50%]">
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600 "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            <h3 class="text-white font-semibold m-2">Cargando..</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-5 grid-flow-row gap-2 gap-x-2 mx-2 my-8 text-center">
            {search(data).map((character) => (
              <Card character={character}></Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;
