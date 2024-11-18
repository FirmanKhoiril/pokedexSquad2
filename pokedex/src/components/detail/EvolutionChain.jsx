import Loading from "../Loading";
import NotFound from "../NotFound";
import { TbArrowNarrowRight } from "react-icons/tb";
import useGetAllEvolutionChain from "../../hooks/useGetAllEvolutionChain";

const EvolutionChain = ({ speciesData }) => {
  const evolutionChainUrl = speciesData?.evolution_chain?.url;

const {evolutionChain, isError, isLoading} = useGetAllEvolutionChain({evolutionChainUrl});

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <NotFound />
  }

  return (
    <div className="pt-4 pb-8">
      <h1 className="text-2xl font-bold pb-4">Evolutionary Line</h1>
      {evolutionChain && evolutionChain.length > 0 && (
        <div className="flex items-center gap-4 pt-2 w-full">
          {evolutionChain.map((pokemon, index) => (
            <div key={pokemon.name} className="flex items-center gap-2">
              <div className="flex gap-2 items-center 2 flex-wrap w-full">
                <img src={pokemon.image} alt={pokemon.name} loading="lazy" className="w-full nax-w-[300px] md:w-[100px]" />
                <div className="">
                <h1 className="capitalize text-primary font-bold">{pokemon.name}</h1>
                <p className="font-semibold">#{String(pokemon.id).padStart(4, '0')}</p>
                </div>
              </div>
              {index < evolutionChain.length - 1 && (
                <TbArrowNarrowRight size={20} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EvolutionChain;
