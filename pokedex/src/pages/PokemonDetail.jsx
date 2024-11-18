import { useParams } from "react-router-dom";
import PrevNextPokemonDetail from "../components/detail/PrevNextPokemonDetail";
import Loading from "../components/Loading";
import useGetDetailPokemon from "../hooks/useGetDetailPokemon";
import { useGetSpeciesDetail } from "../hooks/useGetSpeciesPokemonDetail";
import { IoFemale, IoMale } from "react-icons/io5";
import { typeColors, typeWeaknesses } from "../services/DataDummy";
import NotFound from "../components/NotFound";
import { combinedDescription } from "../utils";
import EvolutionChain from "../components/detail/EvolutionChain";

const PokemonDetail = () => {
  const { id } = useParams();

  const {
    data: pokemonData,
    isFetching: isFetchingPokemon,
    isLoading: isLoadingPokemon,
  } = useGetDetailPokemon(id);
  const {
    data: speciesData,
    isFetching: isFetchingSpecies,
    isLoading: isLoadingSpecies,
  } = useGetSpeciesDetail(id);

  if (
    isFetchingPokemon ||
    isLoadingPokemon ||
    isFetchingSpecies ||
    isLoadingSpecies
  ) {
    return <Loading height="min-h-[80dvh]" />;
  }

  const category =
    speciesData?.genera.find((g) => g.language.name === "en")?.genus ||
    "Unknown";

    if (pokemonData === null || speciesData === null || id > 1025)
      return <NotFound />;

  return (
    speciesData &&
    pokemonData && (
      <section className="container w-full flex flex-col h-auto md:px-4 px-2 mx-auto">
        <PrevNextPokemonDetail id={id} />
        <div className="flex justify-between md:flex-row flex-col gap-12">
          <div className="w-full flex max-w-full  md:max-w-[400px] lg:min-w-[380px]  flex-col space-y-2 min-h-32 md:min-h-screen">
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt={pokemonData.name}
              className="w-full drop-shadow-lg"
            />
            <p className="font-bold md:hidden block capitalize text-3xl pb-4">
              {pokemonData.name} ({speciesData.genera[0].genus})
            </p>
            <p className="md:hidden block leading-6 text-sm md:leading-8 text-wrap pb-4">
              {combinedDescription(speciesData.flavor_text_entries)}
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <p className="font-semibold lg:text-base text-sm ">
                Category:{" "}
                <span className="font-normal text-slate-500">
                  {category.replace(/\s*Pokémon$/, "")}
                </span>
              </p>
              <p className="font-semibold lg:text-base text-sm ">
                Generation:{" "}
                <span className="font-normal text-slate-500">
                  {speciesData.generation.name
                    .replace("generation-", "")
                    .toUpperCase()}
                </span>
              </p>
              <p className="font-semibold lg:text-base text-sm ">
                Height:{" "}
                <span className="font-normal text-slate-500">
                  {`${Math.floor(pokemonData.height * 0.328084)}'${Math.round(
                    (pokemonData.height * 0.328084 -
                      Math.floor(pokemonData.height * 0.328084)) *
                      12
                  )}"`}{" "}
                  | {(pokemonData.height / 10).toFixed(1)} m
                </span>
              </p>
              <p className="font-semibold lg:text-base text-sm ">
                Weight:{" "}
                <span className="font-normal text-slate-500">
                  {`${(pokemonData.weight * 0.220462).toFixed(1)} lbs`} |{" "}
                  {(pokemonData.weight / 10).toFixed(1)} kg
                </span>
              </p>
              <div className="flex items-center gap-2">
                <p className="font-semibold lg:text-base text-sm ">Gender:</p>
                <IoFemale
                  size="24"
                  className={`${
                    speciesData.gender_rate > 4 ? "text-pink-400" : "text-black"
                  }`}
                />
                <IoMale
                  size="24"
                  className={`${
                    speciesData.gender_rate <= 4
                      ? "text-blue-400"
                      : "text-black"
                  }`}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 lg:text-base text-sm py-1.5 md:py-3">
              <p className="font-semibold">Abilities:</p>
              <div className="flex items-center gap-2">
                {pokemonData.abilities.map((ability, i) => (
                  <p
                    className="capitalize text-slate-500"
                    key={ability.ability.name}
                  >
                    {ability.ability.name}
                    {i < pokemonData.abilities.length - 1 ? ", " : ". "}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-1.5 md:pb-3">
              <p className="font-semibold lg:text-base text-sm">Type:</p>
              <div className="flex flex-wrap gap-2">
                {pokemonData.types.map((type, i) => (
                  <span
                    key={type.type.name}
                    className={`px-4 py-1.5 capitalize rounded-full text-sm text-white ${
                      typeColors[type.type.name]
                    }`}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-1.5 md:pb-3">
              <p className="font-semibold lg:text-base text-sm">Weakness:</p>
              <div className="flex flex-wrap gap-2">
                {pokemonData.types.map((type, i) => {
                  const weaknesses = typeWeaknesses[type.type.name] || [];
                  return weaknesses.map((weakness) => (
                    <span
                      key={weakness}
                      className={`px-5 py-1.5 capitalize rounded-full text-sm text-white ${typeColors[weakness]}`}
                    >
                      {weakness}
                    </span>
                  ));
                })}
              </div>
            </div>
            <div className="pb-4">
              <p className="font-semibold capitalize text-lg mb-4">
                {pokemonData.name}'s Stats
              </p>

              <div className="flex flex-col w-full gap-2">
                {pokemonData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <p className="capitalize w-[160px] whitespace-nowrap font-semibold">
                      {stat.stat.name}
                    </p>

                    <div className="w-full bg-gray-300 rounded-full h-2.5 relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/90 rounded-full"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      ></div>
                    </div>

                    <p className="">{stat.base_stat}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:hidden block">
              <EvolutionChain speciesData={speciesData} />
            </div>
          </div>
          <div className="w-full max-w-full md:max-w-[70%] hidden md:flex flex-col md:mt-10 space-y-2 min-h-32">
            <p className="font-extrabold text-primary block capitalize text-2xl lg:text-3xl xl:text-4xl py-4">
              {pokemonData.name} ({speciesData.genera[0].genus})
            </p>
            <div className="flex w-full justify-between items-center">
              <p className="text-lg font-bold">
                #{String(id).padStart(4, "0")}
              </p>
              <button type="button" className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75v14.25L12 16.5l-5.25 4.5V6.75c0-.621.504-1.125 1.125-1.125h10.25c.621 0 1.125.504 1.125 1.125z"
                  />
                </svg>
              </button>
            </div>

            <p className="leading-8 text-wrap pb-4">
              {combinedDescription(speciesData.flavor_text_entries)}
            </p>
            <hr className="border border-primary" />
            <EvolutionChain speciesData={speciesData} />
          </div>
        </div>
      </section>
    )
  );
};

export default PokemonDetail;
