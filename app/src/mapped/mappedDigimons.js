export default function mappedDigimons({
    digimons
}) {

    const mappedDigimons = digimons?.map(digimon => ({
        id: digimon.id,
        name: digimon.name,
        releaseDate: digimon.releaseDate,
        image: digimon.images[0]?.href,
        page: digimon.page,
    }));

    return mappedDigimons

}