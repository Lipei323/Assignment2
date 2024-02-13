var config = {
    style: 'mapbox://styles/cheng-lipei/clsb6rvsr00ar01qz9nj45gbo',
    accessToken: 'pk.eyJ1IjoiY2hlbmctbGlwZWkiLCJhIjoiY2xzMTdxOXA5MDh3MTJsbGRiejQwZ29tNyJ9.F5ibg3oZF4b6uuVl3s1ScA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Journey to the School',
    subtitle: 'How did you see me or How can you find me (˘•ω•˘)',


    byline: 'Cheng Lipe A0254032U',


    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to my hometown!',
            image: 'images/1.jpg',
            description: 'Chongqing, abbreviated as "Yu," is also known as the Mountain City, River City, Fog City, and Bridge City. It is situated in the southwestern inland region of China, in the upper reaches of the Yangtze River. I will depart from here and embark on the journey to school.',
            location: {
                center: [106.540122,29.536378],
                zoom: 10.89,
                pitch: 30,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Thank you for flying with me!',
            image: 'images/2.png',
            
            description: 'Here is my home in Singapore, a century-old house where I will spend my study years. Of course, being an old house, there are inevitably some issues. For example, the electricity is not very stable, and the pipes like to sing loudly when I am taking a shower (though it is not a pleasant tune). Nevertheless, I have chosen it without hesitation.',
            location: {
                center: [103.76813, 1.292004],
                zoom: 17.46,
                pitch: 45,
                bearing: 15,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Why you choose such an old house?',
            image: 'images/3.png',
            description: 'The first reason is its proximity to the school, which is very convenient for me. I only need to walk for ten minutes to reach the school. If I do not feel like walking, I can take the bus, which only takes 5 minutes.',
            location: {
                center: [103.770354,1.29669],
                zoom: 18.46,
                pitch: 23.6,
                bearing: 14.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Just because of this?',
            description: 'Of course, there is more to it than just the proximity to school. This place is also very close to nearby supermarkets, making daily life convenient. Additionally, compared to other neighborhoods in the vicinity, renting here is much cheaper. In a city like Singapore with a high cost of living, living near a supermarket often requires paying higher rent. Moreover, areas near the school, being close to the city center, tend to have higher rental rates. Therefore, I believe my current accommodation is the optimal choice',
            location: {
                center: [103.78465, 1.30902],
                zoom: 11,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: 
            [
                {
                    layer: 'resale-01-06-2021-0dcuuy',
                    opacity: 0.5,
                    duration: 300
                },
                {
                    layer: 'supermarkets-828qdt',
                    opacity: 0.5,
                    duration: 300
                }
            ],
            onChapterExit: 
            [
                {
                    layer: 'resale-01-06-2021-0dcuuy',
                    opacity: 0.5,
                    duration: 300
                },
                {
                    layer: 'supermarkets-828qdt',
                    opacity: 0.5,
                    duration: 300
                }
            ]
        }
    ]
};
