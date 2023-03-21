export default [
    {
      id: 0,
      identifier: "knee-mri",
      name: 'Knee MRI',
      summary: "Magnetic resonance imaging (MRI) uses a magnetic field and computer-generated radio waves to create images of organs and tissues. In this case, a knee MRI will take images of the knee joint, muscles and tissues.",
      category: "0",
      prices: [
        { date: "10/11/2021", price: 1260, hospital: "Grady Memorial" },
        { date: "03/28/2018", price: 1130, hospital: "Grady Memorial" },
        { date: "01/30/2017", price: 1020, hospital: "Piedmont Atlanta" },
        { date: "05/08/2012", price: 800, hospital: "Kaiser Permenante Los Angeles" }

      ],
      userPrices: [
        { date: "10/11/2021", price: 1290, hospital: "Grady Memorial"},
        { date: "03/28/2018", price: 1110, hospital: "Grady Memorial" },
        { date: "01/30/2017", price: 1000, hospital: "Piedmont Atlanta" },
        { date: "05/08/2012", price: 950, hospital: "Kaiser Permenante Los Angeles" }
      ]
    },
    {
      id: 1,
      identifier: "ankle-mri",
      name: 'Ankle MRI',
      summary:"Magnetic resonance imaging (MRI) uses a magnetic field and computer-generated radio waves to create images of organs and tissues. In this case, a knee MRI will take images of the ankle joint, muscles and tissues.",
      category: "3",
      prices: [
        { date: "09/15/2022", price: 400, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 450, hospital: "Kaiser Permenante Los Angeles" },
        { date: "01/11/2017", price: 600, hospital: "Kaiser Permenante Anaheim" },
        { date: "08/18/2010", price: 700, hospital: "Emory Decatur" }

      ],
      userPrices: [
        { date: "09/15/2022", price: 500, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 450, hospital: "Kaiser Permenante Los Angeles" },
        { date: "01/11/2017", price: 650, hospital: "Kaiser Permenante Anaheim" },
        { date: "08/18/2010", price: 650, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 2,
      identifier: "knee-exam",
      name: 'Knee Exam',
      summary:"A knee examination is conducted to intake and observe patient knee conditions to determine next course of actions (i.e. radiological, blood tests, suergery ,etc)",
      category: "0", 
      prices: [
        { date: "09/15/2022", price: 400, hospital: "Northridge Medical" },
        { date: "07/18/2019", price: 450, hospital: "Piedmont Augusta" },
        { date: "01/11/2017", price: 600, hospital: "Kaiser Permenante El Camino" },
        { date: "08/18/2010", price: 700, hospital: "Emory Decatur" }

      ],
      userPrices: [
        { date: "09/15/2022", price: 500, hospital: "Northrigde Medical" },
        { date: "07/18/2019", price: 450, hospital: "Piedmont Augusta" },
        { date: "01/11/2017", price: 650, hospital: "Kaiser Permenante El Camino" },
        { date: "08/18/2010", price: 650, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 3,
      identifier: "meniscus-surgery",
      name: 'Meniscus Surgery',
      summary: "A surgery performed to repair a torn meniscus. ",
      category: "0",
      prices: [
        { date: "05/15/2022", price: 1300, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 1450, hospital: "Kaiser Permenante Anaheim" },
        { date: "12/11/2017", price: 1300, hospital: "Kaiser Permenante Anaheim" },
        { date: "12/18/2010", price: 1300, hospital: "Emory Decatur" }

      ],
      userPrices: [
        { date: "05/15/2022", price: 1300, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 1300, hospital: "Kaiser Permenante Anaheim" },
        { date: "12/11/2017", price: 1500, hospital: "Kaiser Permenante Anaheim" },
        { date: "12/18/2010", price: 1750, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 4,
      identifier: "acl-surgery",
      name: 'ACL Surgery',
      summary: "A surgery performed to repair the ACL ligament in the knee.",
      category: "0",
      prices: [
        { date: "11/03/2022", price: 400, hospital: "Emory Johns Creek" },
        { date: "11/23/2019", price: 450, hospital: "Emory Hillandale" },
        { date: "03/09/2017", price: 600, hospital: "Emory Decatur" },
        { date: "04/20/2010", price: 700, hospital: "Emory Decatur" }

      ],
      userPrices: [
        { date: "09/03/2022", price: 500, hospital: "Emory Johns Creek" },
        { date: "07/23/2019", price: 450, hospital: "Emory Hillandale" },
        { date: "01/09/2017", price: 650, hospital: "Emory Decatur" },
        { date: "08/20/2010", price: 650, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 5,
      identifier: "ankle-CT",
      name: "Ankle CT",
      summary:"A computerized tomography that combines different x-ray images from different angles to examine bones, blood vessels and soft tissue. In this case the bones, soft tissues and joints near the ankle will be examined.",
      category: "3",
      prices: [
        { date: "09/15/2022", price: 400, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 450, hospital: "Kaiser Permenante Los Angeles" },
        { date: "01/11/2017", price: 600, hospital: "Kaiser Permenante Anaheim" },
        { date: "08/18/2010", price: 700, hospital: "Emory Decatur" }

      ],
      userPrices: [
        { date: "09/15/2022", price: 500, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 450, hospital: "Kaiser Permenante Los Angeles" },
        { date: "01/11/2017", price: 650, hospital: "Kaiser Permenante Anaheim" },
        { date: "08/18/2010", price: 650, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 6,
      identifier: "toe-deformity",
      name: "Toe Deformity Surgery",
      summary: "A surgery performed to repair a hammertoe or mallet toe.",
      category: "3",
      prices: [
        { date: "09/22/2020", price: 1800, hospital: "Kaiser Permenante El Camino" },
        { date: "07/09/2011", price: 1800, hospital: "Kaiser Permenante El Camino" },
      ],
      userPrices: [
        { date: "09/22/2020", price: 1700, hospital: "Kaiser Permenante El Camino" },
        { date: "07/09/2011", price: 1800, hospital: "Kaiser Permenante El Camino" },
      ]
    },
    {
      id: 7,
      identifier: "achilles-tendon",
      name: "Achlles Tendon Surgery",
      summary:"A surgery performed to repaire a ruptured Achilles Tendon.",
      category: "3",
      prices: [
        { date: "09/15/2022", price: 400, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 450, hospital: "Kaiser Permenante Los Angeles" },
        { date: "01/11/2017", price: 600, hospital: "Kaiser Permenante Anaheim" },
        { date: "08/18/2010", price: 700, hospital: "Emory Decatur" },
        { date: "09/03/2022", price: 500, hospital: "Emory Johns Creek" },
        { date: "07/23/2019", price: 450, hospital: "Emory Hillandale" },
        { date: "01/09/2017", price: 650, hospital: "Emory Decatur" },
        { date: "08/20/2010", price: 650, hospital: "Emory Decatur"}

      ],
      userPrices: [
        { date: "09/15/2022", price: 500, hospital: "Kaiser Permenante El Camino" },
        { date: "07/18/2019", price: 450, hospital: "Kaiser Permenante Los Angeles" },
        { date: "01/11/2017", price: 650, hospital: "Kaiser Permenante Anaheim" },
        { date: "08/18/2010", price: 650, hospital: "Emory Decatur"},
        { date: "09/03/2022", price: 500, hospital: "Emory Johns Creek" },
        { date: "07/23/2019", price: 450, hospital: "Emory Hillandale" },
        { date: "01/09/2017", price: 650, hospital: "Emory Decatur" },
        { date: "08/20/2010", price: 650, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 8,
      identifier: "angioplasty",
      name: "Angioplasty Procedure",
      summary:"A procedure performed to open clogged heart arteries.",
      category: "2",
      prices: [
        { date: "09/15/2022", price: 2200, hospital: "Kaiser Permenante El Camino" },
        { date: "08/18/2010", price: 2700, hospital: "Emory Decatur" },
        { date: "09/03/2022", price: 2240, hospital: "Emory Johns Creek" },
        { date: "01/09/2017", price: 2650, hospital: "Emory Decatur" },
        { date: "08/20/2010", price: 2600, hospital: "Emory Decatur"}

      ],
      userPrices: [
        { date: "09/15/2022", price: 2300, hospital: "Kaiser Permenante El Camino" },
        { date: "08/18/2010", price: 2500, hospital: "Emory Decatur"},
        { date: "09/03/2022", price: 2500, hospital: "Emory Johns Creek" },
        { date: "01/09/2017", price: 2600, hospital: "Emory Decatur" },
        { date: "08/20/2010", price: 2800, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 9,
      identifier: "bypass",
      name: "Bypass Surgery",
      summary:"This surgery is performed to create a new path for blood to flow around a blcoked artery in the heart.",
      category: "2",
      prices: [
        { date: "02/02/2013", price: 2700, hospital: "Emory Decatur" },
        { date: "11/03/2015", price: 2240, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2650, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2600, hospital: "Emory Decatur"}

      ],
      userPrices: [
        { date: "02/02/2013", price: 2500, hospital: "Emory Decatur"},
        { date: "11/03/2015", price: 2500, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2600, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2800, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 10,
      identifier: "ecg",
      name: "ECG",
      summary:"An electrocardiogram test which recrods electric signals in the heart to detect any heart problems and monitor heart health.",
      category: "2",
      prices: [
        { date: "02/02/2013", price: 2700, hospital: "Emory Decatur" },
        { date: "11/03/2015", price: 2240, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2650, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2600, hospital: "Emory Decatur"}

      ],
      userPrices: [
        { date: "02/02/2013", price: 2500, hospital: "Emory Decatur"},
        { date: "11/03/2015", price: 2500, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2600, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2800, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 11,
      identifier: "carpal-tunnel",
      name: "Carpal Tunnel Release Surgery",
      summary:"A surgery that cuts through the carpal ligament to relieve pressure on the median nerve.",
      category: "1",
      prices: [
        { date: "03/11/2010", price: 1200, hospital: "Kaiser Permenante El Camino" },
        { date: "11/03/2015", price: 1400, hospital: "Kaiser Permenante Anaheim" },
        { date: "11/09/2013", price: 1200, hospital: "Kaiser Permenante El Camino" }

      ],
      userPrices: [
        { date: "02/02/2013", price: 1200, hospital: "Kaiser Permenante El Camino"},
        { date: "11/03/2015", price: 1300, hospital: "Kaiser Permenante Anaheim" },
        { date: "11/09/2013", price: 1300, hospital: "Kaiser Permenante El Camino" },
      ]
    },
    {
      id: 12,
      identifier: "finger-joint-replacement",
      name: "Artificial Finger Joint Replacement",
      summary: "A surgery that replaces the damaged finger joint with an artificial finger joint.",
      category: "1",
      prices: [
        { date: "02/02/2013", price: 2000, hospital: "Emory Decatur" },
        { date: "11/03/2015", price: 2150, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2150, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2600, hospital: "Emory Decatur"}

      ],
      userPrices: [
        { date: "02/02/2013", price: 2000, hospital: "Emory Decatur"},
        { date: "11/03/2015", price: 2200, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2000, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2700, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 13,
      identifier: "abdmonial-ct",
      name: "Abdominal CT",
      summary: "A computerized tomography that combines different x-ray images from different angles to examine bones, blood vessels and soft tissue. In this case the bones, soft tissues and joints near the abdomen will be examined.",
      category: "4",
      prices: [
        { date: "02/02/2013", price: 2000, hospital: "Emory Decatur" },
        { date: "11/03/2015", price: 2150, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2150, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2600, hospital: "Emory Decatur"}

      ],
      userPrices: [
        { date: "02/02/2013", price: 2000, hospital: "Emory Decatur"},
        { date: "11/03/2015", price: 2200, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2000, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2700, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 14,
      identifier: "ultrasound",
      name: "Ultrasound",
      summary:"An imaging procedure that uses sound waves to see inside the abdomen area.",
      category: "4",
      prices: [
        { date: "02/02/2013", price: 2000, hospital: "Emory Decatur" },
        { date: "11/03/2015", price: 2150, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2150, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2600, hospital: "Emory Decatur"}

      ],
      userPrices: [
        { date: "02/02/2013", price: 2000, hospital: "Emory Decatur"},
        { date: "11/03/2015", price: 2200, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 2000, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 2700, hospital: "Emory Decatur"}
      ]
    },
    {
      id: 15,
      identifier: "elbow-replacement",
      name: "Total Elbow Replacement",
      summary:"This surgery replaes damanged areas of the elbow with implants made of metal and plastic.",
      category: "5",
      prices: [
        { date: "02/02/2013", price: 1100, hospital: "Emory Decatur" },
        { date: "11/03/2015", price: 1200, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 1400, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 1200, hospital: "Emory Decatur"},
        

      ],
      userPrices: [
        { date: "02/02/2013", price: 1100, hospital: "Emory Decatur"},
        { date: "11/03/2015", price: 1200, hospital: "Emory Johns Creek" },
        { date: "11/09/2013", price: 1400, hospital: "Emory Decatur" },
        { date: "12/20/2010", price: 1200, hospital: "Emory Decatur"},
      ]
    },

    {id: 16,
    identifier: "synovectomy",
    name: "Synovectomy",
    summary:"A surgical procedure used to treat synovitis. In this case, synovitis is being treated at the eblow joint.",
    category: "5",
    prices: [
      { date: "02/02/2013", price: 1100, hospital: "Emory Decatur" },
      { date: "11/03/2015", price: 1500, hospital: "Kaiser Permenante El Camino" },
      
    ],
    userPrices: [
      { date: "02/02/2013", price: 1100, hospital: "Emory Decatur"},
      { date: "11/03/2015", price: 1600, hospital: "Kaiser Permenante El Camino" },
    ]
  }

]
