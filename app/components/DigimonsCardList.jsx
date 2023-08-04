export default function DigimonsCardList({
    digimons
}) {
    
    return (
        digimons?.map((digimon, index) => {

            return (

                <div key={digimon.id + index} className=" flex items-center flex-col gap-3 py-12 rounded shadow border-white border" >

                    <p className="text-white text-2xl font-extrabold text-white" >{digimon?.name}  </p>

                    <picture className="p-2" >

                        <img className="h-64 w-64 rounded-xl shadow border" src={digimon?.image} alt="" />

                    </picture>

                    <p className="text-white text-lg font-extrabold text-white" >Year: {digimon?.releaseDate}</p>

                </div >
            )
        })

    )
}