import { GET } from '@/app/src/services/fetch';

import InfinityScroll from '@/app/src/components/InfinityScroll';
import mappedDigimons from '@/app/src/mapped/mappedDigimons';

export default async function Page() {

  let digimons = await GET(
    {
      name: '/digimon',
      params: {
        page: 1
      }
    }
  );;

  digimons = await mappedDigimons({ digimons });


  return (
    <main className="flex justify-center bg-black min-h-screen">
      <div className='container max-w-lg px-4 py-12' >
        <div className='flex text-center flex-col gap-2.5 pb-12' >
          <h1 className='text-5xl text-white font-extrabold' >Digimons</h1>
          <p className='text-3xl text-white font-extrabold'>infinity scroll </p>
        </div>
        <div className="flex flex-col gap-12" >
          <InfinityScroll props={digimons} name="digimon" />
        </div>
      </div>
    </main>
  )
}
