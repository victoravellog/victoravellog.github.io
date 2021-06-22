import Mock from "../mock";

const getAge = (dateString = '1989-02-13') => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
  {
      age--;
  }
  return age;
};

const database = {
  information: {
    name: 'Victor Manuel Avello Guerrero',
    aboutContent: "I am a fullstack web developer and project manager. I can provide clean code using the best practices in the industry.",
    age: getAge(),
    phone: '',
    nationality: 'Chilean',
    language: 'English, Spanish',
    email: '',
    address: 'San Ignacio 166, Padre Hurtado, Chile',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/victor-avello-guerrero-a5292254/',
      dribbble: '',
      github: 'https://github.com/victoravellog'
    },
    brandImage: '/images/VictorAvelloBrand.png',
    aboutImage: '/images/VictorAvelloFace.png',
    aboutImageLg: '/images/VictorAvelloFace.png',
    cvfile: '/files/CV Víctor Avello - ENG.pdf'
  },
  services: [
    {
      title: "Web Development",
      icon: 'code',
      details: "Senior level on PHP (Laravel), Ruby (Rails), JS (Node, JQuery, React, Angular) and hopefull to learn any other language that I feel I'm goint to entertain with."
    },
    {
      title: "Project Managment",
      icon: 'handshake',
      details: "Project manager for over 5 years, helping different teams to explote his potential and look for the best way to accomplish any challenge that the industry put in front of us, always, as a Team."
    },
    {
      title: "Agile and/or Structured",
      icon: 'grow',
      details: "Any work methodology or culture on IT can bring good results if we are compromissed with the goal and the process. Both Agile and Structured methodologies can apply for different project and I'm not closed to anyone."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Victor is a person who brings a strategic look to the IT area, leading important projects of the organization, with a great capacity for listening, empathy and collaboration, essential in the adaptive challenges associated with the world of Technology.",
      author: {
        name: 'Anita Marambio Reynes',
        designation: 'General Manager, Workmate S.A'
      }
    },
    {
      id: 2,
      content: "You are an incredible leader, I highlight your willingness to share the knowledge you have. Your technical and social skills will allow you to function in the best way and with the best results anywhere.",
      author: {
        name: 'Yordano Escaff',
        designation: 'Sr Scrum Master, Banco de Chile'
      }
    },
    {
      id: 3,
      content: "It gave me the opportunity to be part of a great team, giving me confidence and freedom to express our opinions in each meeting horizontally, great ability to resolve conflicts and, above all, he helped me a lot to grow professionally and as a person.",
      author: {
        name: 'Héctor Cifuentes',
        designation: 'Sr Engineer, Workmate S.A'
      }
    },
    {
      id: 4,
      content: "It is a pleasure to work with Víctor, a good professional, always interested in continuing to advance and grow as such.",
      author: {
        name: 'Kevin Vergara',
        designation: 'DevOps Engineer, TacTech SPA'
      }
    },
    {
      id: 5,
      content: "After being in Víctor's team, I can say that he was an excellent area manager. An inspiring leader. He is always ready to empower and support his team. Generous with his knowledge, clear in his organization schemes and also extremely human, empathetic and encouraging.",
      author: {
        name: 'Sylvia Alvarez',
        designation: 'Project Manager, Workmate S.A'
      }
    },
    {
      id: 6,
      content: "Excellent professional with high capacity for conflict resolution, of great human value, with great technical experience in different fields, always in search of acquiring and applying new knowledge.",
      author: {
        name: 'Mario Ossandón',
        designation: 'Tech Leader, Zenta Group'
      }
    },
    {
      id: 7,
      content: "Victor is a comprehensive, versatile and highly competitive professional. He possesses excellent technical skills that allow him to meet the goals and objectives of each project. In terms of social skills, he has a good development of empathy and integration and belonged to work teams. He has a high degree of commitment and responsibility to the success of the projects. Highly recommended.",
      author: {
        name: 'Jorge Aravena',
        designation: 'CEO, BinaryBag Technologies'
      }
    },
    {
      id: 8,
      content: "I worked with Victor on a complex project where I could appreciate his excellent willingness to learn new skills and technologies from his peers.",
      author: {
        name: 'Jong Bor Lee',
        designation: 'R&D Engineer, BinaryBag Technologies'
      }
    },
    {
      id: 9,
      content: "Victor is a very talented professional capable of solving quickly and in a timely manner all the challenges that come his way. He noted for his outstanding professional and human qualities. He is without a doubt a contribution in any team that he integrates.",
      author: {
        name: 'Gonzalo Vitta',
        designation: 'Project Manager, BinaryBag Technologies'
      }
    },
    {
      id: 10,
      content: "Victor is committed to his work and to the company, being a very good collaborator in every way. As a developer he learns quickly and applies his own solutions without great complications, he has a good technical base that facilitates learning and adaptation to the technological needs of the moment.",
      author: {
        name: 'Joaquín Vera',
        designation: 'Project coordinator, SUSESO'
      }
    }
  ],
  skills: [
    {
      title: "Docker",
      value: 85
    },
    {
      title: "AWS",
      value: 85
    },    
    {
      title: "Javascript",
      value: 80
    },
    {
      title: "jQuery",
      value: 90
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "PHP",
      value: 95
    },
    {
      title: "Laravel",
      value: 95
    },
    {
      title: "Group Managment",
      value: 95
    },
    {
      title: "Ruby",
      value: 85
    },
    {
      title: "Rails",
      value: 90
    },
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 80
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - Present",
        position: "Project Manager",
        company: "Imed S.A",
        details: "Document and Signatures team Project Manager, responsible for Rails, NodeJS and Laravel projects."
      },
      {
        id: 2,
        year: "2019 - 2021",
        position: "Deparment Chief",
        company: "Workmate S.A",
        details: "Responsible for the entire IT department, Development team, Help desk team on every project of the company. Laravel, NodeJS, Angular project."
      },
      {
        id: 3,
        year: "2016 - 2019",
        position: "Project Manager",
        company: "Workmate S.A",
        details: "Responsible for CODELCO's Acreditation and Credentials project for the entire company. Laravel project."
      },
      {
        id: 4,
        year: "2014 - 2016",
        position: "Software Engineer",
        company: "Workmate S.A",
        details: "Full-Stack software developer. Laravel projects."
      },
      {
        id: 5,
        year: "2012 - 2014",
        position: "Software Engineer",
        company: "BinaryBag Technologies",
        details: "Full-Stack software developer. Rails and Kohana projects."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2007 - 2012",
        graduation: "Bachelor on Computer Science",
        university: "Universidad de Santiago de Chile",
        details: "Computer Science degree."
      },
      {
        id: 2,
        year: "2003 - 2006",
        graduation: "High School Licence",
        university: "Instituto Nacional José Miguel Carrera"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+56-9-67228986'],
    emailAddress: ['victoravellog@gmail.com'],
    address: "San Ignacio 166, Padre Hurtado, Santiago, Chile"
  }
}

const databaseESP = {
  information: {
    name: 'Victor Manuel Avello Guerrero',
    aboutContent: "Soy un desarrollador web completo y director de proyectos. Puedo proporcionar código limpio utilizando las mejores prácticas de la industria.",
    age: getAge(),
    phone: '',
    nationality: 'Chilean',
    language: 'English, Spanish',
    email: '',
    address: 'San Ignacio 166, Padre Hurtado, Chile',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/victor-avello-guerrero-a5292254/',
      dribbble: '',
      github: 'https://github.com/victoravellog'
    },
    brandImage: '/images/VictorAvelloBrand.png',
    aboutImage: '/images/VictorAvelloFace.png',
    aboutImageLg: '/images/VictorAvelloFace.png',
    cvfile: '/files/CV Víctor Avello - ENG.pdf'
  },
  services: [
    {
      title: "Web Development",
      icon: 'code',
      details: "Senior level on PHP (Laravel), Ruby (Rails), JS (Node, JQuery, React, Angular) and hopefull to learn any other language that I feel I'm goint to entertain with."
    },
    {
      title: "Project Managment",
      icon: 'handshake',
      details: "Project manager for over 5 years, helping different teams to explote his potential and look for the best way to accomplish any challenge that the industry put in front of us, always, as a Team."
    },
    {
      title: "Agile and/or Structured",
      icon: 'grow',
      details: "Any work methodology or culture on IT can bring good results if we are compromissed with the goal and the process. Both Agile and Structured methodologies can apply for different project and I'm not closed to anyone."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Victor is a person who brings a strategic look to the IT area, leading important projects of the organization, with a great capacity for listening, empathy and collaboration, essential in the adaptive challenges associated with the world of Technology.",
      author: {
        name: 'Anita Marambio Reynes',
        designation: 'General Manager, Workmate S.A'
      }
    },
    {
      id: 2,
      content: "You are an incredible leader, I highlight your willingness to share the knowledge you have. Your technical and social skills will allow you to function in the best way and with the best results anywhere.",
      author: {
        name: 'Yordano Escaff',
        designation: 'Sr Scrum Master, Banco de Chile'
      }
    },
    {
      id: 3,
      content: "It gave me the opportunity to be part of a great team, giving me confidence and freedom to express our opinions in each meeting horizontally, great ability to resolve conflicts and, above all, he helped me a lot to grow professionally and as a person.",
      author: {
        name: 'Héctor Cifuentes',
        designation: 'Sr Engineer, Workmate S.A'
      }
    },
    {
      id: 4,
      content: "It is a pleasure to work with Víctor, a good professional, always interested in continuing to advance and grow as such.",
      author: {
        name: 'Kevin Vergara',
        designation: 'DevOps Engineer, TacTech SPA'
      }
    },
    {
      id: 5,
      content: "After being in Víctor's team, I can say that he was an excellent area manager. An inspiring leader. He is always ready to empower and support his team. Generous with his knowledge, clear in his organization schemes and also extremely human, empathetic and encouraging.",
      author: {
        name: 'Sylvia Alvarez',
        designation: 'Project Manager, Workmate S.A'
      }
    },
    {
      id: 6,
      content: "Excellent professional with high capacity for conflict resolution, of great human value, with great technical experience in different fields, always in search of acquiring and applying new knowledge.",
      author: {
        name: 'Mario Ossandón',
        designation: 'Tech Leader, Zenta Group'
      }
    },
    {
      id: 7,
      content: "Victor is a comprehensive, versatile and highly competitive professional. He possesses excellent technical skills that allow him to meet the goals and objectives of each project. In terms of social skills, he has a good development of empathy and integration and belonged to work teams. He has a high degree of commitment and responsibility to the success of the projects. Highly recommended.",
      author: {
        name: 'Jorge Aravena',
        designation: 'CEO, BinaryBag Technologies'
      }
    },
    {
      id: 8,
      content: "I worked with Victor on a complex project where I could appreciate his excellent willingness to learn new skills and technologies from his peers.",
      author: {
        name: 'Jong Bor Lee',
        designation: 'R&D Engineer, BinaryBag Technologies'
      }
    },
    {
      id: 9,
      content: "Victor is a very talented professional capable of solving quickly and in a timely manner all the challenges that come his way. He noted for his outstanding professional and human qualities. He is without a doubt a contribution in any team that he integrates.",
      author: {
        name: 'Gonzalo Vitta',
        designation: 'Project Manager, BinaryBag Technologies'
      }
    },
    {
      id: 10,
      content: "Victor is committed to his work and to the company, being a very good collaborator in every way. As a developer he learns quickly and applies his own solutions without great complications, he has a good technical base that facilitates learning and adaptation to the technological needs of the moment.",
      author: {
        name: 'Joaquín Vera',
        designation: 'Project coordinator, SUSESO'
      }
    }
  ],
  skills: [
    {
      title: "Docker",
      value: 85
    },
    {
      title: "AWS",
      value: 85
    },    
    {
      title: "Javascript",
      value: 80
    },
    {
      title: "jQuery",
      value: 90
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "PHP",
      value: 95
    },
    {
      title: "Laravel",
      value: 95
    },
    {
      title: "Group Managment",
      value: 95
    },
    {
      title: "Ruby",
      value: 85
    },
    {
      title: "Rails",
      value: 90
    },
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 80
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - Present",
        position: "Project Manager",
        company: "Imed S.A",
        details: "Document and Signatures team Project Manager, responsible for Rails, NodeJS and Laravel projects."
      },
      {
        id: 2,
        year: "2019 - 2021",
        position: "Deparment Chief",
        company: "Workmate S.A",
        details: "Responsible for the entire IT department, Development team, Help desk team on every project of the company. Laravel, NodeJS, Angular project."
      },
      {
        id: 3,
        year: "2016 - 2019",
        position: "Project Manager",
        company: "Workmate S.A",
        details: "Responsible for CODELCO's Acreditation and Credentials project for the entire company. Laravel project."
      },
      {
        id: 4,
        year: "2014 - 2016",
        position: "Software Engineer",
        company: "Workmate S.A",
        details: "Full-Stack software developer. Laravel projects."
      },
      {
        id: 5,
        year: "2012 - 2014",
        position: "Software Engineer",
        company: "BinaryBag Technologies",
        details: "Full-Stack software developer. Rails and Kohana projects."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2007 - 2012",
        graduation: "Bachelor on Computer Science",
        university: "Universidad de Santiago de Chile",
        details: "Computer Science degree."
      },
      {
        id: 2,
        year: "2003 - 2006",
        graduation: "High School Licence",
        university: "Instituto Nacional José Miguel Carrera"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+56-9-67228986'],
    emailAddress: ['victoravellog@gmail.com'],
    address: "San Ignacio 166, Padre Hurtado, Santiago, Chile"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/informationESP").reply(config => {
  const response = databaseESP.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});