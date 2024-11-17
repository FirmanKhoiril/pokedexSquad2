import { useGlobalContext } from '../../context/useContext'

const ApplyAndReset = () => {
  const {setOptionSelectGeneration, setOptionSelectType, setOptionSelectWeakness} = useGlobalContext()

  const handleResetOptionValue = () => {
    setOptionSelectGeneration({
      id: "",
      generation: "Generation",
    })
    setOptionSelectWeakness("Weakness")
    setOptionSelectType({
      id: "",
      type: "Type",
    })
  }

  return (
    <div className="flex w-full">
    <button type="button" onClick={handleResetOptionValue} className="bg-secondary text-sm rounded-md hover:bg-yellow-500 text-primary px-7 py-3">
      Reset
    </button>
  </div>
  )
}

export default ApplyAndReset