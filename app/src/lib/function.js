export function addPagination({
    data,
    itemPerPage
}) {

    let actualPage = 1;
    const result = [];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        item.page = actualPage;
        result.push(item);
        if ((i + 1) % itemPerPage === 0)
            actualPage++;
    }
    return result;
}