import React, { createContext, useCallback, useState } from "react";
import api from '../services/api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: []
});


const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        hasUser: false, 
        loading: false, 
        user: {
            id: undefined, 
            avatar: undefined, 
            login: undefined, 
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: []
    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));

        api
        .get(`users/${username}`)
        .then(({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos
                },
            }));
        })
        .catch((err) => {
            if (err.response.status === 404) {
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: false,
                    user: {},
                    repositories: []
                }));
            }
        })
        .finally(() => {
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        });
    };

    const getUserRepos = (username) => {
        api
        .get(`users/${username}/repos`)
        .then(({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data
            }));
        })
        .catch((err) => {
            if (err.response.status === 404) {
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: false,
                    user: {},
                    repositories: []
                }));
            }
        });
    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), [])
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;