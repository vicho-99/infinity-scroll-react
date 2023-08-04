import { NextResponse } from 'next/server'
import responseDigimons from '@/app/mocks/digimons.json'
import { addPagination } from '@/app/lib/function'

export async function GET(request) {

    const {
        searchParams
    } = new URL(request.url)

    let page = searchParams.get('page') || 1;

    let data = addPagination({ data: responseDigimons, itemPerPage: 3 }).filter(e => e.page == page);


    return NextResponse.json(data, { status: 200 })
}