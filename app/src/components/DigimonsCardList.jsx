export default function DigimonsCardList({
    digimons
}) {

    return (

        digimons?.map((digimon, index) =>
            <div key={digimon.id + index} className=" flex items-center flex-col gap-3 py-12 rounded shadow border-white border mt-6" >
                <p className="text-white text-2xl font-extrabold text-white" >{digimon?.name}  </p>
                <picture className="p-2.5" >
                    <img className="h-60 w-60 rounded-xl shadow " src={digimon?.image} alt="" />
                </picture>
                <p className="text-white text-lg font-extrabold text-white" >Year: {digimon?.releaseDate}</p>
            </div >
        )
    )
}