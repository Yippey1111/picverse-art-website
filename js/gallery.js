const featuredArtworks = [
    {
        thumbnail: 'images/ladss/his eyes by 126446244.jpg',
        title: 'His Eyes',
        artist: '126446244',
        likes: '19.8K'
    },
    {
        thumbnail: 'images/zzz/Bangboo on the road by ZZZ.webp',
        title: 'Bangboo on the Road',
        artist: 'ZZZ',
        likes: '19.8K'
    },
    {
        thumbnail: 'images/ladss/Summer Memories by 126982759.jpg',
        title: 'Summer Memories',
        artist: '126982759',
        likes: '19.8K'
    },
    {
        thumbnail: 'images/ladss/that memories by 130588369.jpg',
        title: 'That Memories',
        artist: '130588369',
        likes: '19.8K'
    },
    {
        thumbnail: 'images/zzz/Gentle House intro by ZZZ.webp',
        title: 'Gentle House Intro',
        artist: 'ZZZ',
        likes: '19.8K'
    }
];

function populateFeaturedArtworks() {
    const artworksContainers = document.querySelectorAll('.artworks-container');
    // Clear all containers
    artworksContainers.forEach(container => container.innerHTML = '');

    // Distribute artworks evenly across containers
    featuredArtworks.forEach((artwork, index) => {
        const artDiv = document.createElement('div');
        artDiv.classList.add('artwork');

        const thumb = document.createElement('img');
        thumb.src = artwork.thumbnail;
        thumb.alt = artwork.title;
        thumb.classList.add('artwork-thumbnail');

        const title = document.createElement('h3');
        title.textContent = artwork.title;

        const artist = document.createElement('p');
        artist.textContent = artwork.artist;

        const likes = document.createElement('p');
        likes.textContent = artwork.likes;

        artDiv.appendChild(thumb);
        artDiv.appendChild(title);
        artDiv.appendChild(artist);
        artDiv.appendChild(likes);

        // Append to container in round-robin fashion
        const containerIndex = index % artworksContainers.length;
        artworksContainers[containerIndex].appendChild(artDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateFeaturedArtworks();
});