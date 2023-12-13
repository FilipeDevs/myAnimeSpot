
# MyAnimeSpot

MyAnimeSpot is a minimalist web application inspired by anime platforms like [MyAnimeList](https://myanimelist.net/) and [Anilist](https://anilist.co/search/anime). It provides users with a straightforward way to track and explore anime titles, powered by the GraphQL  [AniList API](https://anilist.gitbook.io/anilist-apiv2-docs/).


## Tech Stack

**Client:** React, ReactQuery, ApolloClient, TailwindCSS, Flowbite, Toastify 

**Server:** Laravel

**DB:** MySQL


## Features

- User authentication
- Anime list management
    - Personalized user dashboard for managing anime entries, updating progress, and changing status.
- Browse capabilities
    - Filter options for refining searches based on genre, season, release year, and sorting by popularity or trending.
    - Dynamic search bar for on-the-fly refinement of searches.

- Responsive design
- Dark mode toggle
- Integrated toasts for feedback.
- Optimistic Updates:
    - Utilizes ReactQuery for optimistic updates to provide a smoother user experience by updating the UI optimistically before receiving confirmation from the server.


## Screenshots

![Home View](https://i.imgur.com/WLiNPrP.png)

![Browse View](https://i.imgur.com/vkUoZOv.png)

![Detail View](https://i.imgur.com/PSex4eR.png)

![Dashboard View](https://i.imgur.com/qNFprIP.png)

![Mobile View 1](https://i.imgur.com/5SdzI7q.png)

![Mobile View 2](https://i.imgur.com/fsSH9So.png)

## Usage (Local)

1. Clone the project
2. Copy `.env.example` into `.env` and configure database credentials
3. Navigate to the project's root directory using terminal
4. Run `composer install`
5. Set the encryption key by executing `php artisan key:generate --ansi`
6. Run migrations `php artisan migrate`
7. Start local server by executing `php artisan serve`
8. Open a new terminal and navigate to the `react/` folder
9. Copy `.env.example` into `.env` and adjust the `VITE_API_BASE_URL` parameter
10. Run `npm install`
11. Run `npm run dev` to start a vite server for React
12. Access the application via [http://localhost:3000/](http://localhost:3000/)


