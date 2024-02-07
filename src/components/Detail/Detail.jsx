import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Detail = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(false);
  const [episode, setEpisode] = useState(false);
  const fetchCharacterDetail = async () => {
    try {
      const info = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const character = info.data;
      console.log(character);
      setPersonaje(character);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const infoEpisodes = async () => {
    if (!episode && personaje.episode) {
      try {
        const episodes = await Promise.all(
          personaje.episode.map((episodio) => axios.get(episodio))
        );
        console.log(episodes);
        setEpisode(episodes.map((ep) => ep.data));
      } catch (error) {
        console.log(error);
        return error;
      }
    } else {
      console.log("no hay episodio");
    }
  };

  useEffect(() => {
    fetchCharacterDetail();
  }, [id]);

  useEffect(() => {
    infoEpisodes();
  }, [personaje]);

  const colorGender = (gender) => {
    switch (gender) {
      case "Male":
        return "text-blue-600";
      case "Female":
        return "text-pink-600";
      case "Genderless":
        return "text-yellow-600";
      default:
        return "text-slate-500";
    }
  };

  const colorState = (state) => {
    switch (state) {
      case "Alive":
        return "bg-green-500";

      case "Dead":
        return "bg-red-500";

      default:
        return "bg-slate-500";
    }
  };

  return (
    <div>
      <span className="font-bold text-white">Detalle del Personaje</span>
      {!personaje ? (
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
        <div className="flex flex-col">
          <div className="relative flex sm:flex-row flex-col items-center justify-around w-full h-[90vh] mt-20 bg-slate-400">
            <div className="absolute flex flex-row items-center w-8 top-20 left-4 text-white">
              <Link to="/characters">
                <ArrowLeftIcon className="w-8"></ArrowLeftIcon>
              </Link>
            </div>
            <img
              className="sm:w-1/3 w-5/6 rounded-md sm:border-white border-black border-[1px] sm:border-[2px]"
              src={personaje.image}
            ></img>
            <div className="sm:flex absolute left-12 top-4 flex-col rounded-md justify-around sm:w-1/2 w-full h-full items-center sm:mt-12 z-10">
              <div className="flex flex-row">
                <div className="bg-yellow-400 z-10 w-16 h-16 flex items-center justify-center font-bold  rounded-full text-3xl border-[1px] border-black">
                  {personaje.id}
                </div>
                <div className=" flex items-center">
                  <h3 className="font-bold pl-14 -ml-12 bg-slate-600 text-white text-3xl rounded-r-full p-2 pr-6 ">
                    {personaje.name}
                  </h3>
                </div>
              </div>
              {/*               <div className="font-medium text-white flex flex-row items-center w-1/2 bg-slate-400 rounded-full justify-around border-black border-[2px]">
                State:{" "}
                <div className="flex flex-row-reverse items-center">
                  <div
                    className={`${colorState(
                      personaje.status
                    )} w-6 border-white border-[1px] h-6 rounded-full m-2 items-center`}
                  ></div>
                  <span>{personaje.status}</span>
                </div>
              </div>
              <div className="bg-slate-400 flex flex-row rounded-full border-black border-[2px] w-1/2 items-center justify-around h-12 text-white font-bold">
                <span>Gender: </span>
                <span className={colorGender(personaje.gender)}>
                  {personaje.gender}
                </span>
              </div>
              <div className="flex flex-row items-center justify-around bg-slate-400 w-1/2 text-white border-black border-[2px] px-2 rounded-full">
                <GlobeAltIcon className="fill-white w-8 justify-start flex items-start" />
                <span className="font-medium flex flex-row">Location:</span>
                <span>{personaje.location.name}</span>
              </div>
              <div className="bg-slate-400 rounded-full w-1/2 items-center flex flex-row justify-around text-white font-bold border-black border-[2px] h-12">
                <span className="text-white">Species: </span>
                <span>{personaje.species}</span>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <span className="text-white">Episodios en los que aparece</span>
            </div>
            <div className=" w-full flex flex-col items-center overflow-y-scroll h-44">
              {!episode ? (
                <div>cargando</div>
              ) : (
                episode.map((episodio) => (
                  <div className="bg-slate-400 my-2 rounded-md w-1/4 h-16 flex flex-row items-center justify-between">
                    <div className="bg-blue-600 w-1/6 h-full text-white flex items-center justify-center font-bold rounded-l-md">
                      <span>{episodio.id}</span>
                    </div>
                    <div className="flex flex-col items-center w-5/6 justify-around">
                      <span>Episodio: {episodio.episode}</span>
                      <span>{episodio.name}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
