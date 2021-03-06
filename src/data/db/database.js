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
    cvfile: '/files/CVVictorAvelloENG.pdf'
  },
  services: [
    {
      title: "Web Development",
      icon: 'code',
      details: "Senior level on PHP (Laravel), Ruby (Rails), JS (Node, JQuery, React, Angular) and hopeful to learn any other language that I feel I'm going to entertain with."
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
        name: 'H??ctor Cifuentes',
        designation: 'Sr Engineer, Workmate S.A'
      }
    },
    {
      id: 4,
      content: "It is a pleasure to work with V??ctor, a good professional, always interested in continuing to advance and grow as such.",
      author: {
        name: 'Kevin Vergara',
        designation: 'DevOps Engineer, TacTech SPA'
      }
    },
    {
      id: 5,
      content: "After being in V??ctor's team, I can say that he was an excellent area manager. An inspiring leader. He is always ready to empower and support his team. Generous with his knowledge, clear in his organization schemes and also extremely human, empathetic and encouraging.",
      author: {
        name: 'Sylvia Alvarez',
        designation: 'Project Manager, Workmate S.A'
      }
    },
    {
      id: 6,
      content: "Excellent professional with high capacity for conflict resolution, of great human value, with great technical experience in different fields, always in search of acquiring and applying new knowledge.",
      author: {
        name: 'Mario Ossand??n',
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
        name: 'Joaqu??n Vera',
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
        details: "Responsible for CODELCO's Accreditation and Credentials project for the entire company. Laravel project."
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
        university: "Instituto Nacional Jos?? Miguel Carrera"
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
    aboutContent: "Soy un desarrollador fullstack y director de proyectos. Puedo proporcionar c??digo limpio utilizando las mejores pr??cticas de la industria.",
    age: getAge(),
    phone: '',
    nationality: 'Chileno',
    language: 'Ingl??s, Espa??ol',
    email: '',
    address: 'San Ignacio 166, Padre Hurtado, Chile',
    freelanceStatus: 'Disponible',
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
    cvfile: '/files/CVVictorAvelloESP.pdf'
  },
  services: [
    {
      title: "Desarrollo Web",
      icon: 'code',
      details: "Nivel senior en PHP (Laravel), Ruby (Rails), JS (Node, JQuery, React, Angular) y con la esperanza de aprender cualquier otro idioma con el que sienta que me voy a entretener."
    },
    {
      title: "Gesti??n de Proyectos",
      icon: 'handshake',
      details: "Jefe de proyectos por m??s de 5 a??os, ayudando a diferentes equipos a explotar su potencial y buscar la mejor manera de cumplir con cualquier desaf??o que la industria nos ponga por delante, siempre, como Equipo."
    },
    {
      title: "Agil y/o Estructurado",
      icon: 'grow',
      details: "Cualquier metodolog??a de trabajo o cultura en TI puede traer buenos resultados si nos comprometemos con el objetivo y el proceso. Tanto las metodolog??as ??giles como las estructuradas se pueden aplicar para diferentes proyectos y no estoy cerrado a ninguna."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Victor es una persona que aporta una mirada estrat??gica al ??rea de TI, liderando importantes proyectos de la organizaci??n, con una gran capacidad de escucha, empat??a y colaboraci??n, indispensables en los desaf??os adaptativos asociados al mundo de la Tecnolog??a.",
      author: {
        name: 'Anita Marambio Reynes',
        designation: 'Gerente General, Workmate S.A'
      }
    },
    {
      id: 2,
      content: "Eres un l??der incre??ble, debo reconocer que aprend?? muchas cosas gracias a ti durante este tiempo y destaco tu disposici??n al momento de compartir los conocimientos que posees. Tus skills t??cnicas y sociales te permitir??n desenvolverte de la mejor forma y con los mejores resultados en cualquier parte.",
      author: {
        name: 'Yordano Escaff',
        designation: 'Sr Scrum Master, Banco de Chile'
      }
    },
    {
      id: 3,
      content: "Me dio la oportunidad de formar parte de un gran equipo, dando confianza y libertad de expresar nuestras opiniones en cada reuni??n de forma horizontal, agradezco mucho su capacidad de resoluci??n de conflictos y por sobre todo el gran apoyo que me dio en los buenos y malos momentos, me ayudo mucho a crecer profesionalmente y como persona.",
      author: {
        name: 'H??ctor Cifuentes',
        designation: 'Backend Engineer, MACH'
      }
    },
    {
      id: 4,
      content: "Un agrado trabajar con V??ctor, buen profesional, siempre interesado en seguir avanzando y creciendo como tal.",
      author: {
        name: 'Kevin Vergara',
        designation: 'DevOps Engineer, TacTech SPA'
      }
    },
    {
      id: 5,
      content: "Luego de estar en el equipo de V??ctor, puedo decir que fue un excelente jefe de ??rea. Un l??der inspirador. Siempre presto a potenciar y apoyar a su equipo. Generoso con sus conocimientos, claro en sus esquemas de organizaci??n y adem??s sumamente humano, emp??tico y alentador.",
      author: {
        name: 'Sylvia Alvarez',
        designation: 'Jefe de Proyectos, Workmate S.A'
      }
    },
    {
      id: 6,
      content: "Excelente profesional con alta capacidad de resoluci??n de conflictos, de gran valor humano, con gran experiencia t??cnica en distintos ??mbitos, siempre en la b??squeda de adquirir y aplicar nuevos conocimiento.",
      author: {
        name: 'Mario Ossand??n',
        designation: 'Tech Leader, Zenta Group'
      }
    },
    {
      id: 7,
      content: "Victor es un profesional integral, versatil y altamente competitivo. Posee excelentes habilidades tecnicas que le permiten cumplir con las metas y objetivos de cada proyecto. En terminos de habilidades sociales, posee un buen desarrollo de la empatia y, de integracion y pertenecia a los equipos de trabajo. Tiene un alto grado de compromiso y responsabilidad con el exito de los proyectos. Muy recomendable.",
      author: {
        name: 'Jorge Aravena',
        designation: 'CEO, BinaryBag Technologies'
      }
    },
    {
      id: 8,
      content: "Trabaj?? con V??ctor en un proyecto complejo donde pude apreciar su excelente disposici??n a aprender nuevas destrezas y tecnolog??as de sus pares.",
      author: {
        name: 'Jong Bor Lee',
        designation: 'R&D Engineer, BinaryBag Technologies'
      }
    },
    {
      id: 9,
      content: "Victor es un profesional muy talentoso capaz de solucionar de manera r??pida y oportuna todos los desaf??os que se le presentan. Destacado por sus sobresalientes cualidades tanto profesionales como humanas. Es sin duda un aporte en cualquier equipo que integre.",
      author: {
        name: 'Gonzalo Vitta',
        designation: 'Jefe de Proyectos, BinaryBag Technologies'
      }
    },
    {
      id: 10,
      content: "V??ctor se compromete con su trabajo y con la empresa, siendo un muy buen colaborador en todo sentido. Como desarrollador aprende r??pido y aplica soluciones propias sin grandes complicaciones, tiene una buena base t??cnica que le facilita el aprendizaje y adaptaci??n a las necesidades tecnol??gicas del momento.",
      author: {
        name: 'Joaqu??n Vera',
        designation: 'Coordinador de proyectos, SUSESO'
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
      title: "Manejo de grupos",
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
        position: "Jefe de proyectos",
        company: "Imed S.A",
        details: "Jefe de proyecto del equipo de Documentaci??n y Firmas, responsable de proyectos Rails, NodeJS y Laravel."
      },
      {
        id: 2,
        year: "2019 - 2021",
        position: "Jefe de ??rea",
        company: "Workmate S.A",
        details: "Responsable de todo el departamento de TI, equipo de desarrollo, equipo de mesa de ayuda en cada proyecto de la empresa. Laravel, NodeJS, proyecto Angular."
      },
      {
        id: 3,
        year: "2016 - 2019",
        position: "Jefe de proyectos",
        company: "Workmate S.A",
        details: "Responsable del proyecto de Acreditaci??n y Credenciales CODELCO para toda la empresa. Proyecto Laravel."
      },
      {
        id: 4,
        year: "2014 - 2016",
        position: "Analista desarrollador de software",
        company: "Workmate S.A",
        details: "Desarrollador Full-Stack. Proyectos Laravel."
      },
      {
        id: 5,
        year: "2012 - 2014",
        position: "Analista desarrollador de software",
        company: "BinaryBag Technologies",
        details: "Desarrollador Full-Stack. Proyectos Rails and Kohana."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2007 - 2012",
        graduation: "Analista en Computaci??n Cient??fica",
        university: "Universidad de Santiago de Chile",
        details: "Licenciado en Ciencias de la Computaci??n."
      },
      {
        id: 2,
        year: "2003 - 2006",
        graduation: "Licencia Ense??anza Media",
        university: "Instituto Nacional Jos?? Miguel Carrera"
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

Mock.onGet("/api/servicesESP").reply(config => {
  const response = databaseESP.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/reviewsESP").reply(config => {
  const response = databaseESP.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/skillsESP").reply(config => {
  const response = databaseESP.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/portfoliosESP").reply(config => {
  const response = databaseESP.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/experienceESP").reply(config => {
  const response = databaseESP.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/blogESP").reply(config => {
  const response = databaseESP.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});

Mock.onGet("/api/contactinfoESP").reply(config => {
  const response = databaseESP.contactInfo;
  return [200, response];
});