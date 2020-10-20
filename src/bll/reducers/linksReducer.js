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
   api: [
      {
         id: '7',
         title: 'Social Network API',
         href: 'https://social-network.samuraijs.com/',
      },
      {
         id: '8',
         title: 'Social Network API docs',
         href: 'https://social-network.samuraijs.com/docs',
      },
      {
         id: '9',
         title: 'Social Network API docs.google',
         href: 'https://docs.google.com/document/d/1ZSXmTzkgq_Kj1VbWuq8fTv_DPD95GFDvPZgqFeIYGoM/edit#'
      }
   ],
   info: [
      {
         id: '10',
         title: 'React Training',
         href: 'https://reacttraining.com/',
      },
      {
         id: '11',
         title: 'React-Bootstrap',
         href: 'https://react-bootstrap.github.io/components/alerts',
      },
      {
         id: '12',
         title: 'Bootstrap Cheatsheet',
         href: 'https://bootstrap-4.ru/articles/cheatsheet/',
      },
      {
         id: '13',
         title: 'YouTube Channel It-Kamasutra',
         href: 'https://www.youtube.com/watch?v=gb7gMluAeao&ab_channel=IT-KAMASUTRA',
      },
      {
         id: '14',
         title: 'GitHub - Way of Samurai',
         href: 'https://github.com/it-kamasutra/react-way-of-samurai',
      },
      {
         id: '15',
         title: 'Babel REPL',
         href: 'https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.3&externalPlugins=',
      },
   ],
}

const linksReducer = (state = initialState) => {
   return state
}

export default linksReducer