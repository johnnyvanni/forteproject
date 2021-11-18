"use strict";


/* SOME CONSTANTS */
let endpoint01 = "https://misdemo.temple.edu/auth";
let endpoint02 = "https://mis3502-vanni.com/8211";



const CLIENT_ID = 'eb98720d363f45759837d6cbb1061a4c'
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize'
const REDIRECT_URL_AFTER_LOGIN = 'https://mis3502-vanni.com/forte/'
const SPACE_DELIMITER = "%20";
const SCOPES = ['playlist-read-collaborative', 'playlist-modify-public', 'user-read-email', 'playlist-read-private',
 'playlist-modify-private', 'ugc-image-upload', 'streaming'];
 const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER)




const getReturnedParamsFromSpotifyAuth = (Hash) => {
	const stringAfterHashtag = Hash.substring(1);
	const paramsInUrl = stringAfterHashtag.split("&");
	const paramsSplitUp = paramsInUrl.reduce((accumulator,currentValue) => {
		console.log (currentValue);
		const [key, value] = currentValue.split('=');
		accumulator[key] = value;
		return accumulator;
	}, {});

	return paramsSplitUp;
}

var useEffect = () => {
	if (window.location.hash) {
		const object = getReturnedParamsFromSpotifyAuth(window.location.hassh);
		console.log({ object });
	}
};   


var handleLogin = () => {
		window.location = 'https://accounts.spotify.com/authorize?client_id='+ CLIENT_ID + '&redirect_uri=' + REDIRECT_URL_AFTER_LOGIN + '&scope=' + SCOPES_URL_PARAM + '&response_type=token&show_dialog=true';


};

