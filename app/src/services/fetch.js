export async function GET({
    params,
    name
}) {
    let url = "http://localhost:3000/api/v1" + name;
    if (params)
        url = url + "?" + new URLSearchParams(params)
    else
        url = url + "?page=1";
    const response = await fetch(url);
    let data = await response.json()
    return data;
}

