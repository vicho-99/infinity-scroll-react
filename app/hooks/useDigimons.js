import { GET } from '@/app/services/fetch';

export async function useDigimons({ params }) {

    const digimons = await GET({ name: '/digimon', params });;

    const mappedDigimons = digimons?.map(digimon => ({
        id: digimon.id,
        name: digimon.name,
        releaseDate: digimon.releaseDate,
        image: digimon.images[0]?.href,
        page: digimon.page,
    }));


    return { digimons: mappedDigimons }

}