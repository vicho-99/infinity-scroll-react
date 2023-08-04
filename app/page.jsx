import { useDigimons } from '@/app/hooks/useDigimons'
import InfinityScroll from '@/app/components/InfinityScroll';

export default async function Home() {

  const { digimons } = await useDigimons({});

  return (

    <main className="flex justify-center bg-black min-h-screen">

      <div className='container max-w-lg px-4 py-12' >

        <div className='flex text-center flex-col gap-2.5 pb-12' >
          <h1 className='text-5xl text-white font-extrabold' >Digimons</h1>
          <h1 className='text-5xl text-white font-extrabold'>infinite scroll </h1>
        </div>

        <div className="flex flex-col gap-12" >
          <InfinityScroll props={digimons} name="digimon" />
        </div>

      </div>

    </main>

  )
}
