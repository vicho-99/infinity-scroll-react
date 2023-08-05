import { GET } from '@/app/src/services/fetch';
import mappedDigimons from '@/app/src/mapped/mappedDigimons';

const useDigimons = async ({ params }) => {

    const digimons = await GET(
        {
            name: '/digimon',
            params
        }
    );;


    return {
        digimons: await mappedDigimons({ digimons })
    }

}

export default useDigimons;