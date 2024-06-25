/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object 
containing these two pieces of information. Use the function to make three dictionaries 
representing different albums. Print each return value to show that Objects are storing the 
album information correctly. Add an optional parameter to make_album() that allows you to store 
the number of tracks on an album. If the calling line includes a value for the number of tracks, 
add that value to the album’s Object. Make at least one new function call that includes the 
number of tracks on an album.*/

interface Album {
    artistName: string,
    albumTitle: string,
    tracks?: number
}
function make_album(artistName: string, albumTitle: string, tracks?: number){
    const tempAlbum: Album = {
        artistName: artistName,
        albumTitle: albumTitle
    }
    if(tracks){
        tempAlbum.tracks = tracks
    }
    return tempAlbum
}

const album1 = make_album("Shahmeer", "Islamic Talks")
const album2 = make_album("Rahim", "Motivational Talks")
const album3 = make_album("Abdullah", "Business Talks")
console.log("Album1: ")
console.log(album1)
console.log("Album2: "+ JSON.stringify(album2, null, 2))
console.log("Album3: "+ JSON.stringify(album3, null, 2))
const album4 = make_album("Akram", "Funny Talks", 12)
console.log("Album4: ")
console.log(album4)