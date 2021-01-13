'use strict'
const _url = 'https://jsonplaceholder.typicode.com/posts';

const postData = async body => {
    const resp = await fetch(_url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!resp.ok) throw new Error(`Could not fetch ${_url}, status: ${resp.status}`);

    return await resp.json();
};

export { postData };