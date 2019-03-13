//const path = require('path');

module.exports = {
    name:"Sagie",
    siteTitle: "Sagie Gelbhauer, Full stack developer", // Site title.
    siteLogo: `${__dirname}/src/static/images/mahipat.jpg`,
    siteUrl: "https://www.sagieg.com", // Domain of your website without pathPrefix.
    siteKeyword:"Sagie Gelbhauer, full stack developer in usa, freelancer in usa, javascript developer in usa, reactjs developer, Angular, nodejs developer, graphql, jquery, lodash, typescript, software engineer, web developer, front-end developer, responsive web design",
    siteDescription: "I'm Sagie Gelbhauer, Full stack developer, I'm working with clients to build reliable, fast, engaging & responsive websites using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby", // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: "UA-115817837-3", // GA tracking ID.
    userName: "Mahipat Jadav", // Username to display in the author segment.
    userTwitter: "sagg227", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "USA", // User location to display in the author segment.
    userAvatar: "../static/images/mahipat.jpg", // User avatar to display in the author segment.
    favicon32:`../static/images/mahipat32.jpg`,
    favicon16:`../static/images/mahipat16.jpg`,
    ogImage: `../static/images/mahipat250.jpg`,
    userDescription: "I'm Sagie Gelbhauer, Full stack developer, I'm working with clients from India and USA to build reliable, fast, engaging & responsive websites using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby, Angular, Typescript",
    userPhone:"732-551-7509",
    userEmail:"sgelb2@gmail.com",
    skills:[
        {
            name:"Javascript",
            rating: "8"
        },
        {
            name:"HTML",
            rating: "8"
        },
        {
            name:"ReactJs",
            rating: "6"
        },
        {
            name:"GraphQL",
            rating: "5"
        },
        {
            name:"NodeJs",
            rating: "8"
        }
    ],
    langauges:[
        {
            name: "Hebrew",
            rating: 9
        },
        {
            name: "English",
            rating: 10
        }
    ],
    experience:[
        {
            position:"Software Enginer",
            company: "Company Pvt. Ltd.",
            current:true,
            startDate: "March 2017",
            endDate: "current",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer ",
            company: "Company 2 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
        
    ],
    education:[
        {
            college:"Lambda School",
            degree:"Compouter Science And Engineering",
            startDate:"May 2018",
            endDate: "December 2018",
            current: true,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 2",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
        
        
    ],
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/Sgoal2",
        iconClassName: "fa fa-github"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/sagg227",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "Email",
        url: "mailto:sgelb2@gmail.com",
        iconClassName: "fa fa-envelope"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sagie-g/",
        iconClassName: "fa fa-linkedin"
      }
    ],
    copyright: "Copyright © 2018. @sagie", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#5a76b9", // Used for setting manifest and progress theme colors.
    backgroundColor: "#fff" // Used for setting manifest background color.
  };