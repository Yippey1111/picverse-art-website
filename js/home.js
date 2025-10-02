const heroImages = [
    {
        src: 'images/ladss/borrowed promises.webp',
        artist: "Artist: 126446244",
        slogan: "Borrowed Promises",
    },
    {
        src: 'images/genshin impact/Ver 1.1 by genshin impact.webp',
        artist: "Artist: Genshin Impact",
        slogan: "Ver 1.1"
    }
];

const trendingTags = ['#LaDS', '#Genshin Impact', '#Alien Stage', '#Wuthering Waves', '#Honkai Impact 3rd', '#ZZZ'];

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

let currentSlide = 0;

function showSlide(index) {
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.innerHTML = '';
    const img = document.createElement('img');
    img.src = heroImages[index].src;
    img.alt = heroImages[index].artist;
    img.classList.add('hero-slide-image');
    slideshowContainer.appendChild(img);

    // Update slogan and artist name
    document.getElementById('hero-slogan').textContent = heroImages[index].slogan;
    document.getElementById('hero-artist').textContent = heroImages[index].artist;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroImages.length;
    showSlide(currentSlide);
}


function populateFeaturedArtworks() {
    const artworksContainer = document.querySelector('.artworks-container');
    artworksContainer.innerHTML = '';
    featuredArtworks.forEach(artwork => {
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

        artworksContainer.appendChild(artDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    populateFeaturedArtworks();
    setInterval(nextSlide, 5000);
});
