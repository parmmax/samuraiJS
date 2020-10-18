let initialState = {
   nav: [
      {
         id: '1',
         title: 'Home',
         href: '/',
      },
      {
         id: '2',
         title: 'Profile',
         href: '/profile',
      },
      {
         id: '3',
         title: 'Users',
         href: '/users',
      },
      {
         id: '4',
         title: 'Messages',
         href: '/users',
      },
      {
         id: '5',
         title: 'Samurai Dimych',
         href: 'profile/2',
      },
      {
         id: '6',
         title: 'Dimych IT-Kamasutra',
         href: 'profile/1049',
      },
   ],
   info: [
      {
         id: '7',
         title: 'Social Network API',
         href: 'https://social-network.samuraijs.com/',
      },
      {
         id: '8',
         title: 'Social Network API doc',
         href: 'https://social-network.samuraijs.com/docs',
      },
      {
         id: '9',
         title: 'React Training',
         href: 'https://reacttraining.com/',
      },
      {
         id: '10',
         title: 'React-Bootstrap',
         href: 'href="https://react-bootstrap.github.io/components/alerts"',
      },
      {
         id: '11',
         title: 'Bootstrap Cheatsheet',
         href: 'https://bootstrap-4.ru/articles/cheatsheet/',
      },
      {
         id: '12',
         title: 'YouTube Channel It-Kamasutra',
         href: 'https://www.youtube.com/watch?v=gb7gMluAeao&ab_channel=IT-KAMASUTRA',
      },
      {
         id: '13',
         title: 'GitHub - Way of Samurai',
         href: 'https://github.com/it-kamasutra/react-way-of-samurai',
      },
   ],
}

const linksReducer = (state = initialState) => {
   return state
}

export default linksReducer