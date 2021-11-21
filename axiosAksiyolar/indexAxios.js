const axios = require("axios");

const fetchGithubInfo = async (url) => {
    console.log(`Fetching ${url}`); //template string, template lateral

    const githubInfo = await axios(url);

    return {
        name: githubInfo.data.name,
        bio: githubInfo.data.bio,
        repos: githubInfo.data.repos,
    };
};

const fetchUserInfo = async (names) => {
    const rquests = names.map((name) => {
        const url =`https://api.github.com/users/${name}`;
        return fetchGithubInfo(url).then((response) => {
            return response;
        });
    });

    return Promise.all(rquests);
};

fetchUserInfo(['sindresorhus', 'yyx990803', 'gaearon']).then((response) => {
    console.log(response);
});
