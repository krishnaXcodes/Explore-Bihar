// Comprehensive district data for all 38 districts of Bihar
// Each district includes factual, verifiable information

export const districts = [
  {
    id: 'patna',
    name: 'Patna',
    slug: 'patna',
    division: 'Patna',
    headquarters: 'Patna',
    area: 3202,
    population: 5838465,
    populationYear: 2011,
    density: 1823,
    literacy: 70.68,
    sexRatio: 897,
    pinCode: '800001',
    stdCode: '0612',
    languages: ['Hindi', 'Magahi', 'Urdu', 'Bhojpuri'],
    coordinates: { lat: 25.6093, lng: 85.1376 },
    color: '#f59e0b',
    mapPosition: { x: 45, y: 48 },

    description: 'Patna, the capital of Bihar, is one of the oldest continuously inhabited cities in the world. Known as Pataliputra in ancient times, it served as the capital of the mighty Maurya and Gupta Empires. Today, it is a bustling metropolitan city blending its rich historical heritage with modern development.',

    history: 'Patna was founded as Pataliputra by Ajatashatru, the king of Magadh, around 490 BCE. It became the capital of the Maurya Empire under Chandragupta Maurya, making it one of the largest and most prosperous cities in the ancient world. The Greek ambassador Megasthenes described it as the grandest city he had ever seen. It continued as a major center of power through the Gupta period.',

    culture: 'Patna has a vibrant cultural scene influenced by its Magahi and Bhojpuri heritage. The city hosts numerous festivals including Chhath Puja, which sees millions gathering at the Ganges ghats. The city is known for its literary traditions, classical music, and art galleries.',

    touristAttractions: [
      { name: 'Golghar', type: 'Monument', description: 'A massive granary built in 1786 by Captain John Garstin, offering panoramic views of the city.' },
      { name: 'Patna Museum', type: 'Museum', description: 'Houses a rich collection of Hindu and Buddhist sculptures, terracotta figures, and a fossil tree over 200 million years old.' },
      { name: 'Kumhrar', type: 'Archaeological', description: 'Excavated remains of the ancient Pataliputra, including the pillared hall dating to the Maurya period.' },
      { name: 'Agam Kuan', type: 'Historical', description: 'An ancient well believed to date back to Emperor Ashoka\'s time, considered one of the oldest structures in Patna.' },
      { name: 'Mahavir Mandir', type: 'Temple', description: 'One of the most revered Hindu temples in Bihar, dedicated to Lord Hanuman.' },
      { name: 'Takht Sri Patna Sahib', type: 'Gurudwara', description: 'The birthplace of Guru Gobind Singh, the tenth Sikh Guru. One of the five Takhts of Sikhism.' },
      { name: 'Gandhi Maidan', type: 'Park', description: 'A vast ground in the heart of Patna where Mahatma Gandhi addressed public meetings.' },
      { name: 'Eco Park', type: 'Nature', description: 'A sprawling urban park with Japanese gardens, musical fountains, and recreational facilities.' },
    ],

    cuisine: ['Litti Chokha', 'Sattu Paratha', 'Malpua', 'Khaja', 'Tilkut', 'Dhuska'],

    festivals: ['Chhath Puja', 'Diwali', 'Holi', 'Eid', 'Guru Purab', 'Sonepur Mela'],

    famousPersonalities: [
      { name: 'Guru Gobind Singh', description: 'Tenth Sikh Guru, born in Patna in 1666' },
      { name: 'Rajendra Prasad', description: 'First President of India' },
      { name: 'Jayaprakash Narayan', description: 'Freedom fighter and social reformer' },
    ],

    economy: 'Patna is the commercial and economic hub of Bihar. Key sectors include trade, agriculture, services, and IT. The city has growing infrastructure with modern malls, flyovers, and the upcoming Patna Metro.',

    transport: 'Jay Prakash Narayan International Airport, Patna Junction railway station, NH-30, NH-31, NH-83. River transport on the Ganges.',

    climate: 'Hot summers (up to 45°C), pleasant winters (5-25°C), monsoon season June-September with average rainfall of 1100mm.',
    bestTimeToVisit: 'October to March',

    rivers: ['Ganga', 'Sone', 'Punpun', 'Gandak'],

    interestingFacts: [
      'Patna is one of the oldest continuously inhabited places in the world.',
      'Megasthenes, the Greek ambassador, described ancient Pataliputra as the grandest city he had seen.',
      'The Sonepur Mela near Patna is Asia\'s largest cattle fair.',
      'Patna has the world\'s longest WiFi zone along a 20km stretch on the Ganges.',
    ],
  },

  {
    id: 'gaya',
    name: 'Gaya',
    slug: 'gaya',
    division: 'Magadh',
    headquarters: 'Gaya',
    area: 4976,
    population: 4391418,
    populationYear: 2011,
    density: 882,
    literacy: 63.67,
    sexRatio: 937,
    pinCode: '823001',
    stdCode: '0631',
    languages: ['Hindi', 'Magahi', 'Urdu'],
    coordinates: { lat: 24.7914, lng: 85.0002 },
    color: '#6366f1',
    mapPosition: { x: 42, y: 68 },

    description: 'Gaya is one of the holiest cities in India for Hindus and Buddhists alike. It is the district where Bodh Gaya is located — the place where Siddhartha Gautama attained enlightenment and became the Buddha. The Mahabodhi Temple at Bodh Gaya is a UNESCO World Heritage Site.',

    history: 'Gaya has been a center of pilgrimage since ancient times. In Hindu tradition, it is associated with the demon Gayasur, who attained salvation here. The city finds mention in the Ramayana and Mahabharata. Bodh Gaya has been a major Buddhist pilgrimage center since 528 BCE when the Buddha attained enlightenment under the Bodhi Tree.',

    culture: 'The culture of Gaya is deeply intertwined with religious practices. Pind Daan, a Hindu ritual for ancestors, draws millions of pilgrims annually. Buddhist monks from across the world visit Bodh Gaya. The district preserves ancient traditions of music, art, and craft.',

    touristAttractions: [
      { name: 'Mahabodhi Temple', type: 'UNESCO Heritage', description: 'A UNESCO World Heritage Site marking the spot where Buddha attained enlightenment. The temple complex includes the Bodhi Tree, Vajrasana, and numerous stupas.' },
      { name: 'Bodhi Tree', type: 'Sacred', description: 'A descendant of the original tree under which Buddha meditated and attained enlightenment.' },
      { name: 'Great Buddha Statue', type: 'Monument', description: 'A 25-meter tall statue of Buddha in meditation pose, one of the tallest Buddha statues in India.' },
      { name: 'Vishnupad Temple', type: 'Temple', description: 'An ancient Hindu temple believed to hold the footprint of Lord Vishnu.' },
      { name: 'Dungeshwari Cave', type: 'Cave', description: 'The cave where Buddha practiced extreme austerities before his enlightenment.' },
      { name: 'Barabar Caves', type: 'Archaeological', description: 'The oldest surviving rock-cut caves in India, dating to the Maurya Empire (3rd century BCE).' },
      { name: 'Thai Monastery', type: 'Monastery', description: 'One of many international monasteries in Bodh Gaya, built in traditional Thai architectural style.' },
      { name: 'Japanese Temple', type: 'Temple', description: 'A beautiful temple built by the International Buddhist Society of Japan with a serene ambiance.' },
    ],

    cuisine: ['Litti Chokha', 'Tilkut', 'Lai', 'Anarsa', 'Pidakiya'],

    festivals: ['Buddha Purnima', 'Pitrapaksha Mela', 'Chhath Puja', 'Diwali', 'Holi'],

    famousPersonalities: [
      { name: 'Siddhartha Gautama (Buddha)', description: 'Attained enlightenment at Bodh Gaya' },
    ],

    economy: 'Tourism is a major economic driver, especially religious tourism. Agriculture includes rice, wheat, and maize production.',

    transport: 'Gaya Junction railway station, Gaya International Airport (with direct flights from Southeast Asia), NH-83, NH-82.',

    climate: 'Hot semi-arid climate with temperatures ranging from 5°C in winter to 45°C in summer.',
    bestTimeToVisit: 'October to March',

    rivers: ['Phalgu', 'Morhar'],

    interestingFacts: [
      'Bodh Gaya is one of the four holiest sites in Buddhism.',
      'The Mahabodhi Temple is a UNESCO World Heritage Site since 2002.',
      'Barabar Caves are the oldest surviving rock-cut caves in India.',
      'Gaya hosts the largest gathering during Pitrapaksha for ancestor rituals.',
    ],
  },

  {
    id: 'nalanda',
    name: 'Nalanda',
    slug: 'nalanda',
    division: 'Patna',
    headquarters: 'Bihar Sharif',
    area: 2355,
    population: 2877653,
    populationYear: 2011,
    density: 1222,
    literacy: 64.43,
    sexRatio: 922,
    pinCode: '803101',
    stdCode: '06112',
    languages: ['Hindi', 'Magahi'],
    coordinates: { lat: 25.1260, lng: 85.4437 },
    color: '#10b981',
    mapPosition: { x: 52, y: 55 },

    description: 'Nalanda is home to the ruins of the ancient Nalanda Mahavihara, one of the world\'s first residential universities and among the greatest centers of learning in the ancient world. The ruins are a UNESCO World Heritage Site.',

    history: 'The ancient university of Nalanda was founded in the 5th century CE during the Gupta dynasty. At its peak, it hosted over 10,000 students and 2,000 teachers from across the Buddhist world. The university was destroyed in 1193 CE by Bakhtiyar Khilji. The ruins were rediscovered in the 19th century by Alexander Cunningham.',

    culture: 'Nalanda has a rich cultural heritage rooted in Buddhist and Hindu traditions. The district is known for its intellectual legacy and hosts several monasteries and temples.',

    touristAttractions: [
      { name: 'Nalanda University Ruins', type: 'UNESCO Heritage', description: 'Remains of the world\'s oldest residential university, covering 14 hectares with monasteries, temples, and lecture halls.' },
      { name: 'Nalanda Archaeological Museum', type: 'Museum', description: 'Houses artifacts recovered from the Nalanda ruins, including bronze and stone sculptures.' },
      { name: 'Xuanzang Memorial Hall', type: 'Memorial', description: 'Dedicated to the Chinese scholar-monk Xuanzang who studied at Nalanda in the 7th century.' },
      { name: 'Rajgir', type: 'Historical', description: 'Ancient capital of Magadh, surrounded by five hills. Sacred to Buddhists, Jains, and Hindus.' },
      { name: 'Griddhakuta (Vulture Peak)', type: 'Sacred', description: 'The hill where Buddha delivered many sermons. A major Buddhist pilgrimage site.' },
      { name: 'Pawapuri', type: 'Jain Pilgrimage', description: 'The place where Lord Mahavira, the founder of Jainism, attained Nirvana.' },
      { name: 'Hot Springs (Brahmakund)', type: 'Nature', description: 'Natural hot springs at Rajgir, believed to have medicinal properties.' },
      { name: 'Nalanda New University', type: 'University', description: 'A modern international university reviving the legacy of ancient Nalanda, reopened in 2014.' },
    ],

    cuisine: ['Litti Chokha', 'Sattu', 'Chura-Dahi', 'Kheer'],

    festivals: ['Buddha Purnima', 'Rajgir Mahotsav', 'Chhath Puja', 'Diwali', 'Mahavir Jayanti'],

    famousPersonalities: [
      { name: 'Shariputra', description: 'One of the chief disciples of Buddha, born near Nalanda' },
    ],

    economy: 'Agriculture-based economy with rice and wheat as major crops. Growing tourism sector.',

    transport: 'Rajgir railway station, nearest airport is Gaya (90 km). Connected by NH-31 and NH-20.',

    climate: 'Humid subtropical climate with hot summers and cool winters.',
    bestTimeToVisit: 'October to March',

    rivers: ['Panchane'],

    interestingFacts: [
      'Nalanda University was operational for about 800 years (5th to 12th century CE).',
      'The university library was so vast it burned for three months when destroyed.',
      'Xuanzang, the Chinese monk, studied here for 12 years.',
      'Nalanda ruins became a UNESCO World Heritage Site in 2016.',
    ],
  },

  {
    id: 'bhagalpur',
    name: 'Bhagalpur',
    slug: 'bhagalpur',
    division: 'Bhagalpur',
    headquarters: 'Bhagalpur',
    area: 2569,
    population: 3037766,
    populationYear: 2011,
    density: 1182,
    literacy: 63.14,
    sexRatio: 880,
    pinCode: '812001',
    stdCode: '0641',
    languages: ['Hindi', 'Angika', 'Urdu'],
    coordinates: { lat: 25.2425, lng: 86.9842 },
    color: '#8b5cf6',
    mapPosition: { x: 78, y: 42 },

    description: 'Bhagalpur, known as the "Silk City" of India, is famous for its Tussar silk (Bhagalpuri silk). Located on the banks of the Ganges, it is one of the oldest cities in Bihar with a rich cultural and industrial heritage.',

    history: 'Bhagalpur has been an important city since the Maurya period. The ancient Vikramashila University, one of the two most important centers of Buddhist learning, was located here. The city was a major center of silk production during the Mughal period.',

    culture: 'Known for its silk weaving tradition, Bhagalpur has a vibrant cultural scene. The Angika language and culture are prominent. The city hosts the famous Shahkund fair and various cultural events.',

    touristAttractions: [
      { name: 'Vikramashila Ruins', type: 'Archaeological', description: 'Remains of the ancient Vikramashila University, one of two premier Buddhist learning centers.' },
      { name: 'Vikramashila Gangetic Dolphin Sanctuary', type: 'Wildlife', description: 'India\'s only sanctuary for the endangered Gangetic river dolphin, spanning 60 km on the Ganges.' },
      { name: 'Mandar Hill', type: 'Sacred', description: 'Believed to be the mountain used for churning the ocean (Samudra Manthan) in Hindu mythology.' },
      { name: 'Kuppa Ghat', type: 'Heritage', description: 'A historic ghat on the Ganges with ancient temples and cultural significance.' },
      { name: 'Tilkamanjhi', type: 'Historical', description: 'A sacred place associated with the legend of Tilka Manjhi, India\'s first freedom fighter.' },
    ],

    cuisine: ['Bhagalpuri Litti', 'Fish Curry', 'Sattu', 'Tilkut', 'Khaja'],

    festivals: ['Chhath Puja', 'Saurath Sabha', 'Diwali', 'Holi', 'Eid'],

    famousPersonalities: [
      { name: 'Tilka Manjhi', description: 'First Indian freedom fighter who fought against British rule in 1784' },
    ],

    economy: 'Silk production (Bhagalpuri/Tussar silk) is the primary industry. Agriculture, fisheries, and trade are significant contributors.',

    transport: 'Bhagalpur Junction railway station, nearest airport Patna (250 km). Connected by NH-80, NH-31.',

    climate: 'Humid subtropical with hot summers and cool winters.',
    bestTimeToVisit: 'October to February',

    rivers: ['Ganga'],

    interestingFacts: [
      'Bhagalpur is called the "Silk City" for its famous Tussar silk.',
      'It hosts India\'s only Gangetic Dolphin Sanctuary.',
      'Vikramashila University was one of the greatest seats of Buddhist learning.',
      'Tilka Manjhi, India\'s first freedom fighter, belonged to this region.',
    ],
  },

  {
    id: 'muzaffarpur',
    name: 'Muzaffarpur',
    slug: 'muzaffarpur',
    division: 'Tirhut',
    headquarters: 'Muzaffarpur',
    area: 3173,
    population: 4801062,
    populationYear: 2011,
    density: 1513,
    literacy: 64.62,
    sexRatio: 900,
    pinCode: '842001',
    stdCode: '0621',
    languages: ['Hindi', 'Bajjika', 'Maithili'],
    coordinates: { lat: 26.1197, lng: 85.3910 },
    color: '#ec4899',
    mapPosition: { x: 45, y: 22 },

    description: 'Muzaffarpur is known as the "Litchi Kingdom" of India, producing approximately 70% of the country\'s total litchi output. The city serves as the divisional headquarters of Tirhut division and is one of the most important cities in northern Bihar.',

    history: 'Named after Muzaffar Khan, a revenue official during the Mughal period. The district played a significant role during the Indian independence movement. The famous Muzaffarpur bomb case of 1908 by Khudiram Bose is a landmark event in India\'s freedom struggle.',

    culture: 'The culture reflects the Tirhut/Mithila heritage. Known for its literary traditions, folk music, and colorful festivals. The district has a strong tradition of education.',

    touristAttractions: [
      { name: 'Litchi Gardens', type: 'Nature', description: 'Vast orchards of the famous Shahi Litchi, best visited during May-June harvest season.' },
      { name: 'Jubilee Museum', type: 'Museum', description: 'Oldest museum in Bihar, established in 1899, housing archaeological artifacts.' },
      { name: 'Ramna Devi Memorial', type: 'Memorial', description: 'Memorial of the first woman martyr of Bihar\'s freedom movement.' },
      { name: 'Khudiram Bose Memorial', type: 'Memorial', description: 'Dedicated to the youngest revolutionary who was executed at age 18 for his role in the independence movement.' },
      { name: 'Baba Garib Nath Temple', type: 'Temple', description: 'An ancient Shiva temple attracting devotees from across the region during Sawan month.' },
    ],

    cuisine: ['Shahi Litchi', 'Litti Chokha', 'Chura-Dahi', 'Makhana', 'Thekua'],

    festivals: ['Chhath Puja', 'Litchi Festival', 'Diwali', 'Holi', 'Ram Navami'],

    famousPersonalities: [
      { name: 'Khudiram Bose', description: 'One of India\'s youngest revolutionaries, executed at age 18' },
    ],

    economy: 'Litchi production is the economic backbone. Also significant in dairy, fisheries, and makhana production.',

    transport: 'Muzaffarpur Junction railway station, nearest airport Patna (71 km). Connected by NH-28, NH-77.',

    climate: 'Humid subtropical with extremely hot summers.',
    bestTimeToVisit: 'October to March, or May-June for litchi season',

    rivers: ['Burhi Gandak', 'Bagmati', 'Lakhandei'],

    interestingFacts: [
      'Muzaffarpur produces about 70% of India\'s litchi.',
      'The GI-tagged Shahi Litchi is unique to this region.',
      'The city has the oldest museum in Bihar (Jubilee Museum, 1899).',
    ],
  },

  {
    id: 'vaishali',
    name: 'Vaishali',
    slug: 'vaishali',
    division: 'Tirhut',
    headquarters: 'Hajipur',
    area: 2036,
    population: 3495021,
    populationYear: 2011,
    density: 1717,
    literacy: 66.6,
    sexRatio: 895,
    pinCode: '844101',
    stdCode: '06224',
    languages: ['Hindi', 'Bajjika', 'Bhojpuri'],
    coordinates: { lat: 25.9970, lng: 85.3238 },
    color: '#14b8a6',
    mapPosition: { x: 42, y: 32 },

    description: 'Vaishali is one of the most historically significant districts in India. It is believed to be the world\'s first republic, established around 600 BCE. It holds sacred significance for both Buddhists and Jains.',

    history: 'Vaishali was the capital of the Lichhavi republic, one of the world\'s first known republics. Lord Mahavira, the founder of Jainism, was born here around 540 BCE. The Buddha visited Vaishali several times, and the Second Buddhist Council was held here.',

    touristAttractions: [
      { name: 'Ashoka Pillar', type: 'Monument', description: 'A well-preserved Ashokan pillar with a lion capital, erected in the 3rd century BCE.' },
      { name: 'Abhishek Pushkarini', type: 'Sacred', description: 'The sacred coronation tank where Lichhavi rulers were anointed.' },
      { name: 'Vishwa Shanti Stupa', type: 'Stupa', description: 'A peace pagoda built by the Nipponzan Myohoji Buddhist order.' },
      { name: 'Kundalpur', type: 'Jain Pilgrimage', description: 'Believed to be the birthplace of Lord Mahavira.' },
      { name: 'Relic Stupa', type: 'Archaeological', description: 'Contains relics of Lord Buddha, one of eight original stupas built after Buddha\'s Mahaparinirvana.' },
    ],

    cuisine: ['Litti Chokha', 'Banana chips (Hajipur)', 'Sattu', 'Chura-Dahi'],

    festivals: ['Chhath Puja', 'Mahavir Jayanti', 'Buddha Purnima', 'Diwali'],

    famousPersonalities: [
      { name: 'Lord Mahavira', description: '24th Tirthankara and founder of Jainism, born in Vaishali' },
      { name: 'Amrapali', description: 'The legendary courtesan-turned-Buddhist disciple of ancient Vaishali' },
    ],

    economy: 'Agriculture-based, known for banana production. Hajipur is a growing industrial area.',

    transport: 'Hajipur Junction railway station, Patna airport (25 km). Connected by NH-19.',

    climate: 'Humid subtropical.',
    bestTimeToVisit: 'October to March',

    rivers: ['Ganga', 'Gandak', 'Harohar'],

    interestingFacts: [
      'Vaishali is considered the world\'s first republic, established around 600 BCE.',
      'Lord Mahavira, the founder of Jainism, was born here.',
      'The Second Buddhist Council was held at Vaishali around 383 BCE.',
    ],
  },

  {
    id: 'rohtas',
    name: 'Rohtas',
    slug: 'rohtas',
    division: 'Patna',
    headquarters: 'Sasaram',
    area: 3847,
    population: 2959918,
    populationYear: 2011,
    density: 770,
    literacy: 73.37,
    sexRatio: 914,
    pinCode: '821115',
    stdCode: '06184',
    languages: ['Hindi', 'Bhojpuri', 'Magahi'],
    coordinates: { lat: 24.9432, lng: 84.0315 },
    color: '#f97316',
    mapPosition: { x: 22, y: 65 },

    description: 'Rohtas is known for its majestic Rohtas Fort (Rohtasgarh), one of the largest and most impressive forts in India, perched atop the Kaimur Hills. The district also contains the tomb of Sher Shah Suri at Sasaram.',

    history: 'The district derives its name from the ancient Rohtas Fort. Sher Shah Suri, who defeated the Mughal Emperor Humayun and established the Sur dynasty, was based here. His tomb at Sasaram is an architectural masterpiece.',

    touristAttractions: [
      { name: 'Rohtasgarh Fort', type: 'Fort', description: 'One of India\'s largest forts, spread over 60 sq km on the Kaimur plateau, built in the 7th century.' },
      { name: 'Sher Shah Suri Tomb', type: 'Monument', description: 'An octagonal tomb rising from an artificial lake at Sasaram, considered a masterpiece of Indo-Islamic architecture.' },
      { name: 'Tutla Bhawani Waterfall', type: 'Nature', description: 'A scenic waterfall near Sasaram in the Kaimur Hills.' },
      { name: 'Gupta Dynasty Caves', type: 'Cave', description: 'Rock-cut caves from the Gupta period with inscriptions and carvings.' },
      { name: 'Tarachandi Temple', type: 'Temple', description: 'Ancient temple dedicated to Goddess Tara, perched on a hill near Sasaram.' },
    ],

    cuisine: ['Litti Chokha', 'Dhuska', 'Pittha', 'Sattu Drinks'],

    festivals: ['Chhath Puja', 'Diwali', 'Holi', 'Shravani Mela'],

    famousPersonalities: [
      { name: 'Sher Shah Suri', description: 'Founder of the Sur dynasty, defeated Humayun, introduced the rupee' },
    ],

    economy: 'Agriculture-based with rice, wheat, and lentils. Sasaram has cement and stone quarrying industries.',

    transport: 'Sasaram railway station (on Grand Trunk route), nearest airport Varanasi (100 km). Connected by NH-2.',

    climate: 'Semi-arid to subtropical, relatively cooler due to the Kaimur Hills.',
    bestTimeToVisit: 'October to March',

    rivers: ['Sone', 'Koel', 'Durgawati'],

    interestingFacts: [
      'Rohtasgarh Fort is one of the largest forts in India, spread over 60 sq km.',
      'Sher Shah Suri introduced the rupee and rebuilt the Grand Trunk Road.',
      'The tomb of Sher Shah Suri is a precursor to the Taj Mahal in architectural style.',
    ],
  },

  {
    id: 'east-champaran',
    name: 'East Champaran',
    slug: 'east-champaran',
    division: 'Tirhut',
    headquarters: 'Motihari',
    area: 3968,
    population: 5099371,
    populationYear: 2011,
    density: 1281,
    literacy: 55.79,
    sexRatio: 902,
    pinCode: '845401',
    stdCode: '06252',
    languages: ['Hindi', 'Bhojpuri', 'Bajjika'],
    coordinates: { lat: 26.6486, lng: 84.9172 },
    color: '#059669',
    mapPosition: { x: 32, y: 10 },

    description: 'East Champaran holds a pivotal place in India\'s freedom movement. It was here that Mahatma Gandhi launched his first Satyagraha (civil disobedience) in 1917 against the exploitative indigo plantation system, marking a turning point in India\'s independence struggle.',

    history: 'The Champaran Satyagraha of 1917 was Mahatma Gandhi\'s first major civil disobedience movement in India. The indigo planters were forcing farmers to grow indigo under exploitative conditions. Gandhi\'s intervention led to the abolition of the Tinkathia system.',

    touristAttractions: [
      { name: 'Gandhi Sangrahalaya', type: 'Museum', description: 'A museum in Motihari dedicated to the Champaran Satyagraha and Mahatma Gandhi.' },
      { name: 'George Orwell Birthplace', type: 'Heritage', description: 'The house where George Orwell (Eric Arthur Blair) was born in 1903.' },
      { name: 'Kesaria Stupa', type: 'Archaeological', description: 'The tallest and largest Buddhist stupa in the world, reaching 104 feet in height.' },
      { name: 'Areraj Temple', type: 'Temple', description: 'Ancient temples at Areraj with archaeological significance.' },
      { name: 'Lal Dih', type: 'Historical', description: 'The site where Gandhi set up his camp during the Champaran movement.' },
    ],

    cuisine: ['Thekua', 'Litti Chokha', 'Chura-Dahi', 'Sattu'],

    festivals: ['Chhath Puja', 'Gandhi Jayanti', 'Diwali', 'Holi'],

    famousPersonalities: [
      { name: 'George Orwell', description: 'Renowned English novelist, born in Motihari in 1903' },
      { name: 'Rajkumar Shukla', description: 'The farmer who convinced Gandhi to visit Champaran' },
    ],

    economy: 'Primarily agricultural. Sugar production is a major industry. The district borders Nepal and has cross-border trade.',

    transport: 'Motihari railway station, nearest airport Patna (170 km). Connected by NH-28.',

    climate: 'Humid subtropical with heavy monsoon rainfall.',
    bestTimeToVisit: 'October to March',

    rivers: ['Gandak', 'Burhi Gandak', 'Sikrahana'],

    interestingFacts: [
      'Mahatma Gandhi\'s first Satyagraha in India was at Champaran in 1917.',
      'George Orwell, author of 1984 and Animal Farm, was born here.',
      'Kesaria Stupa is the tallest Buddhist stupa in the world.',
    ],
  },

  {
    id: 'madhubani',
    name: 'Madhubani',
    slug: 'madhubani',
    division: 'Darbhanga',
    headquarters: 'Madhubani',
    area: 3501,
    population: 4487379,
    populationYear: 2011,
    density: 1279,
    literacy: 58.62,
    sexRatio: 921,
    pinCode: '847211',
    stdCode: '06276',
    languages: ['Hindi', 'Maithili'],
    coordinates: { lat: 26.3490, lng: 86.0716 },
    color: '#e11d48',
    mapPosition: { x: 55, y: 12 },

    description: 'Madhubani is world-famous for Madhubani painting (Mithila painting), a centuries-old art form characterized by intricate patterns, vibrant colors, and themes from mythology and nature. The district is the cultural heart of the Mithila region.',

    history: 'Madhubani has been the center of the ancient Mithila region, known for its rich literary and cultural traditions. The tradition of Madhubani painting dates back to the time of the Ramayana, when King Janaka commissioned paintings for his daughter Sita\'s wedding.',

    culture: 'The district is the cradle of Maithili culture. Madhubani painting, recognized internationally, uses natural dyes and pigments. The tradition has been passed down through generations, primarily by women artists.',

    touristAttractions: [
      { name: 'Madhubani Art Village', type: 'Cultural', description: 'Villages where the ancient art of Madhubani painting thrives. Walls, floors, and even roads are painted.' },
      { name: 'Kapileshwar Sthan', type: 'Temple', description: 'An ancient Shiva temple with beautiful architecture and Madhubani paintings.' },
      { name: 'Uchainth', type: 'Temple', description: 'Temple dedicated to Lord Surya (Sun God), one of Bihar\'s most ancient temples.' },
      { name: 'Rajnagar Palace', type: 'Heritage', description: 'The historic palace of the Darbhanga Raj, showcasing Mithila architecture.' },
    ],

    cuisine: ['Makhana Kheer', 'Fish Curry', 'Dahi-Chura', 'Thekua', 'Bagiya'],

    festivals: ['Chhath Puja', 'Madhushravani', 'Sama-Chakeva', 'Jitiya', 'Holi'],

    famousPersonalities: [
      { name: 'Sita Devi', description: 'Pioneer Madhubani painter who brought the art form to international recognition' },
      { name: 'Vidyapati', description: 'Great Maithili poet and litterateur, considered a bridge between Sanskrit and modern languages' },
    ],

    economy: 'Agriculture and Madhubani painting industry. Makhana (fox nut) production is significant.',

    transport: 'Madhubani railway station, nearest airport Darbhanga (60 km). Connected by NH-57.',

    climate: 'Humid subtropical with heavy monsoon rainfall and flooding.',
    bestTimeToVisit: 'October to March',

    rivers: ['Kamala', 'Bhutahi Balan', 'Kosi'],

    interestingFacts: [
      'Madhubani painting is a GI-tagged art form recognized worldwide.',
      'The tradition dates back to the time of King Janaka and Sita\'s wedding.',
      'The art uses natural dyes made from flowers, plants, and charcoal.',
    ],
  },

  {
    id: 'darbhanga',
    name: 'Darbhanga',
    slug: 'darbhanga',
    division: 'Darbhanga',
    headquarters: 'Darbhanga',
    area: 2279,
    population: 3937385,
    populationYear: 2011,
    density: 1721,
    literacy: 56.56,
    sexRatio: 911,
    pinCode: '846004',
    stdCode: '06272',
    languages: ['Hindi', 'Maithili'],
    coordinates: { lat: 26.1542, lng: 85.8918 },
    color: '#7c3aed',
    mapPosition: { x: 55, y: 20 },

    description: 'Darbhanga was the seat of the Darbhanga Raj (Raj Darbhanga), one of the richest and most influential zamindari estates in British India. Known as the cultural capital of Mithila, it is a center of Maithili language, literature, and music.',

    history: 'Darbhanga was the capital of the Mithila kingdom and later the seat of the Darbhanga Raj family. The Darbhanga Maharajas were great patrons of art, music, and education. They established Lalit Narayan Mithila University and numerous educational institutions.',

    touristAttractions: [
      { name: 'Darbhanga Fort (Qila)', type: 'Fort', description: 'The imposing fort of the Darbhanga Maharajas with European-influenced architecture.' },
      { name: 'Naulakha Palace', type: 'Palace', description: 'A grand palace built by the Darbhanga Raj, now part of Lalit Narayan Mithila University.' },
      { name: 'Chandradhari Museum', type: 'Museum', description: 'Museum housing the collection of the Darbhanga royal family.' },
      { name: 'Shyama Temple', type: 'Temple', description: 'An ancient Kali temple with significant religious importance.' },
    ],

    cuisine: ['Dahi-Chura', 'Makhana', 'Fish Curry', 'Thekua', 'Pidakiya'],

    festivals: ['Chhath Puja', 'Sama-Chakeva', 'Madhushravani', 'Jitiya', 'Durga Puja'],

    famousPersonalities: [
      { name: 'Maharaja Lakshmishwar Singh', description: 'Philanthropic Maharaja of Darbhanga who donated extensively for education and public welfare' },
    ],

    economy: 'Agriculture (rice, wheat, makhana). Growing as an educational hub.',

    transport: 'Darbhanga Junction, Darbhanga Airport (commercial flights resumed). Connected by NH-57.',

    climate: 'Humid subtropical.',
    bestTimeToVisit: 'October to March',

    rivers: ['Bagmati', 'Kamala', 'Kareh'],

    interestingFacts: [
      'Darbhanga Raj was one of the richest zamindari estates in British India.',
      'The city is known as the cultural capital of Mithila.',
      'Maithili, spoken here, is one of the 22 scheduled languages of India.',
    ],
  },

  // Remaining districts with essential data
  {
    id: 'west-champaran', name: 'West Champaran', slug: 'west-champaran', division: 'Tirhut', headquarters: 'Bettiah', area: 5228, population: 3935042, populationYear: 2011, density: 753, literacy: 55.7, sexRatio: 909, languages: ['Hindi', 'Bhojpuri'], coordinates: { lat: 26.8030, lng: 84.2530 }, color: '#0d9488', mapPosition: { x: 20, y: 8 },
    description: 'West Champaran, headquartered at Bettiah, borders Nepal and is known for the Valmiki National Park, Bihar\'s only national park, home to tigers, leopards, and diverse wildlife.',
    touristAttractions: [{ name: 'Valmiki National Park', type: 'Wildlife', description: 'Bihar\'s only national park, spread over 899 sq km, home to Royal Bengal Tigers.' }, { name: 'Valmiki Ashram', type: 'Sacred', description: 'Believed to be the hermitage of Sage Valmiki, author of the Ramayana.' }],
    rivers: ['Gandak'], interestingFacts: ['Home to Bihar\'s only national park.', 'Valmiki National Park has Royal Bengal Tigers.'],
  },
  {
    id: 'sitamarhi', name: 'Sitamarhi', slug: 'sitamarhi', division: 'Tirhut', headquarters: 'Sitamarhi', area: 2294, population: 3423574, populationYear: 2011, density: 1493, literacy: 52.05, sexRatio: 899, languages: ['Hindi', 'Bajjika', 'Maithili'], coordinates: { lat: 26.5941, lng: 85.4903 }, color: '#dc2626', mapPosition: { x: 45, y: 5 },
    description: 'Sitamarhi is believed to be the birthplace of Goddess Sita, the consort of Lord Rama. It is an important Hindu pilgrimage center.',
    touristAttractions: [{ name: 'Janaki Sthan', type: 'Temple', description: 'The temple marking the birthplace of Goddess Sita, attracting devotees from across India.' }],
    rivers: ['Bagmati', 'Lakhandei'], interestingFacts: ['Believed to be the birthplace of Goddess Sita.'],
  },
  {
    id: 'sheohar', name: 'Sheohar', slug: 'sheohar', division: 'Tirhut', headquarters: 'Sheohar', area: 443, population: 656916, populationYear: 2011, density: 1882, literacy: 53.78, sexRatio: 893, languages: ['Hindi', 'Bajjika'], coordinates: { lat: 26.5150, lng: 85.2930 }, color: '#65a30d', mapPosition: { x: 40, y: 10 },
    description: 'Sheohar is the smallest district of Bihar by area, carved out of Sitamarhi district in 1994.',
    touristAttractions: [], rivers: ['Bagmati'], interestingFacts: ['Smallest district of Bihar by area (443 sq km).'],
  },
  {
    id: 'gopalganj', name: 'Gopalganj', slug: 'gopalganj', division: 'Saran', headquarters: 'Gopalganj', area: 2033, population: 2562012, populationYear: 2011, density: 1260, literacy: 65.47, sexRatio: 909, languages: ['Hindi', 'Bhojpuri'], coordinates: { lat: 26.4700, lng: 84.4390 }, color: '#0891b2', mapPosition: { x: 22, y: 18 },
    description: 'Gopalganj is known for its agricultural produce and is an important district in the Saran division bordering Uttar Pradesh.',
    touristAttractions: [{ name: 'Thawai Dham', type: 'Temple', description: 'Ancient temple complex with archaeological significance.' }],
    rivers: ['Gandak', 'Ghaghra'], interestingFacts: ['Major rice-producing district of Bihar.'],
  },
  {
    id: 'siwan', name: 'Siwan', slug: 'siwan', division: 'Saran', headquarters: 'Siwan', area: 2219, population: 3318176, populationYear: 2011, density: 1495, literacy: 69.45, sexRatio: 988, languages: ['Hindi', 'Bhojpuri'], coordinates: { lat: 26.2220, lng: 84.3570 }, color: '#ca8a04', mapPosition: { x: 18, y: 25 },
    description: 'Siwan has one of the highest sex ratios in Bihar and is known for its agricultural economy and cultural heritage.',
    touristAttractions: [{ name: 'Mahendra Nath Temple', type: 'Temple', description: 'Ancient Shiva temple with architectural significance.' }],
    rivers: ['Daha', 'Ghaghra'], interestingFacts: ['Has one of the highest sex ratios in Bihar at 988 females per 1000 males.'],
  },
  {
    id: 'saran', name: 'Saran', slug: 'saran', division: 'Saran', headquarters: 'Chhapra', area: 2641, population: 3951862, populationYear: 2011, density: 1496, literacy: 65.96, sexRatio: 922, languages: ['Hindi', 'Bhojpuri'], coordinates: { lat: 25.7701, lng: 84.7543 }, color: '#e879f9', mapPosition: { x: 28, y: 35 },
    description: 'Saran, headquartered at Chhapra, is located at the confluence of the Ganga, Ghaghra, and Gandak rivers. The famous Sonepur Mela (cattle fair) is held here.',
    touristAttractions: [{ name: 'Sonepur Mela', type: 'Fair', description: 'Asia\'s largest cattle fair, held annually at the confluence of Ganga and Gandak rivers.' }, { name: 'Chirand Archaeological Site', type: 'Archaeological', description: 'Neolithic and Chalcolithic era archaeological site dating back to 2500 BCE.' }],
    rivers: ['Ganga', 'Ghaghra', 'Gandak'], interestingFacts: ['Sonepur Mela is Asia\'s largest cattle fair.', 'Chirand archaeological site dates back to 2500 BCE.'],
  },
  {
    id: 'begusarai', name: 'Begusarai', slug: 'begusarai', division: 'Munger', headquarters: 'Begusarai', area: 1918, population: 2970541, populationYear: 2011, density: 1549, literacy: 63.87, sexRatio: 895, languages: ['Hindi', 'Maithili', 'Angika'], coordinates: { lat: 25.4182, lng: 86.1272 }, color: '#2563eb', mapPosition: { x: 60, y: 35 },
    description: 'Begusarai is known as the "Industrial Capital of Bihar" due to the presence of the Indian Oil Corporation refinery (Barauni Refinery), one of the largest in eastern India.',
    touristAttractions: [{ name: 'Kanwar Lake Bird Sanctuary', type: 'Wildlife', description: 'Asia\'s largest freshwater oxbow lake and a Ramsar wetland site, hosting migratory birds.' }, { name: 'Barauni Refinery', type: 'Industrial', description: 'One of the oldest and largest oil refineries in India.' }],
    rivers: ['Ganga', 'Burhi Gandak', 'Balan'], interestingFacts: ['Called the "Industrial Capital of Bihar".', 'Kanwar Lake is Asia\'s largest freshwater oxbow lake.'],
  },
  {
    id: 'munger', name: 'Munger', slug: 'munger', division: 'Munger', headquarters: 'Munger', area: 1419, population: 1367765, populationYear: 2011, density: 964, literacy: 70.46, sexRatio: 880, languages: ['Hindi', 'Angika', 'Maithili'], coordinates: { lat: 25.3708, lng: 86.4735 }, color: '#d946ef', mapPosition: { x: 67, y: 38 },
    description: 'Munger is known for its historic Munger Fort and the Bihar School of Yoga, one of the world\'s foremost yoga institutions. The city has a strong tradition of arms manufacturing.',
    touristAttractions: [{ name: 'Munger Fort', type: 'Fort', description: 'A massive fort on the banks of the Ganga, with history dating to the Pala dynasty.' }, { name: 'Bihar School of Yoga', type: 'Institution', description: 'World-renowned yoga institution established by Swami Satyananda Saraswati in 1964.' }],
    rivers: ['Ganga'], interestingFacts: ['Home to the Bihar School of Yoga, one of the world\'s foremost yoga institutions.', 'Known for its arms manufacturing tradition.'],
  },
  {
    id: 'samastipur', name: 'Samastipur', slug: 'samastipur', division: 'Darbhanga', headquarters: 'Samastipur', area: 2904, population: 4261566, populationYear: 2011, density: 1468, literacy: 61.86, sexRatio: 911, languages: ['Hindi', 'Maithili', 'Bajjika'], coordinates: { lat: 25.8629, lng: 85.7840 }, color: '#ea580c', mapPosition: { x: 52, y: 28 },
    description: 'Samastipur is an important railway junction and agricultural district known for its production of sugarcane, rice, and makhana.',
    touristAttractions: [{ name: 'Lachhmipur Sthan', type: 'Temple', description: 'Ancient temple with archaeological importance.' }],
    rivers: ['Budhi Gandak', 'Bagmati', 'Baya'], interestingFacts: ['Important railway junction connecting North and South Bihar.'],
  },
  {
    id: 'khagaria', name: 'Khagaria', slug: 'khagaria', division: 'Munger', headquarters: 'Khagaria', area: 1486, population: 1666886, populationYear: 2011, density: 1122, literacy: 57.88, sexRatio: 886, languages: ['Hindi', 'Maithili', 'Angika'], coordinates: { lat: 25.5024, lng: 86.4721 }, color: '#16a34a', mapPosition: { x: 65, y: 30 },
    description: 'Khagaria is located at the confluence of several rivers and is known for its diverse agricultural production.',
    touristAttractions: [], rivers: ['Ganga', 'Kosi', 'Burhi Gandak'], interestingFacts: ['Located at the confluence of multiple rivers.'],
  },
  {
    id: 'bhojpur', name: 'Bhojpur', slug: 'bhojpur', division: 'Patna', headquarters: 'Arrah', area: 2474, population: 2728407, populationYear: 2011, density: 1103, literacy: 70.47, sexRatio: 907, languages: ['Hindi', 'Bhojpuri'], coordinates: { lat: 25.5561, lng: 84.6681 }, color: '#9333ea', mapPosition: { x: 30, y: 50 },
    description: 'Bhojpur, headquartered at Arrah, is the heartland of the Bhojpuri language and culture. The district played a crucial role in the 1857 uprising with the Battle of Arrah.',
    touristAttractions: [{ name: 'Arrah House', type: 'Heritage', description: 'The site where a small group of British soldiers and Sikh policemen held off rebels during the 1857 uprising.' }, { name: 'Shaheed Smarak', type: 'Memorial', description: 'Memorial dedicated to the martyrs of the Indian independence movement.' }],
    rivers: ['Ganga', 'Sone'], interestingFacts: ['Heartland of Bhojpuri language and culture.', 'Site of the famous Battle of Arrah during the 1857 uprising.'],
  },
  {
    id: 'buxar', name: 'Buxar', slug: 'buxar', division: 'Patna', headquarters: 'Buxar', area: 1624, population: 1706352, populationYear: 2011, density: 1051, literacy: 70.14, sexRatio: 922, languages: ['Hindi', 'Bhojpuri'], coordinates: { lat: 25.5640, lng: 83.9780 }, color: '#0e7490', mapPosition: { x: 15, y: 50 },
    description: 'Buxar is historically significant as the site of the Battle of Buxar (1764), which established British supremacy in India. It is also associated with Sage Vishwamitra\'s ashram.',
    touristAttractions: [{ name: 'Battle of Buxar Site', type: 'Historical', description: 'The site of the 1764 battle between the British East India Company and the combined armies of Mughal Emperor, Nawab of Bengal, and Nawab of Awadh.' }, { name: 'Vishwamitra Ashram', type: 'Sacred', description: 'Believed to be the hermitage of Sage Vishwamitra from the Ramayana.' }],
    rivers: ['Ganga', 'Chausa'], interestingFacts: ['Site of the Battle of Buxar (1764) that established British supremacy in India.'],
  },
  {
    id: 'kaimur', name: 'Kaimur', slug: 'kaimur', division: 'Patna', headquarters: 'Bhabua', area: 3362, population: 1626384, populationYear: 2011, density: 488, literacy: 69.34, sexRatio: 920, languages: ['Hindi', 'Bhojpuri'], coordinates: { lat: 25.0399, lng: 83.6079 }, color: '#4d7c0f', mapPosition: { x: 10, y: 62 },
    description: 'Kaimur district is named after the Kaimur Hills, a range of the Vindhya mountains. It has numerous waterfalls, caves, and rock paintings.',
    touristAttractions: [{ name: 'Mundeshwari Temple', type: 'Temple', description: 'Believed to be the oldest functional Hindu temple in India, dating to 625 CE.' }, { name: 'Karkat Waterfall', type: 'Nature', description: 'Scenic waterfall in the Kaimur Hills.' }],
    rivers: ['Karmnasha', 'Durgawati'], interestingFacts: ['Home to Mundeshwari Temple, believed to be India\'s oldest functional Hindu temple.'],
  },
  {
    id: 'jehanabad', name: 'Jehanabad', slug: 'jehanabad', division: 'Magadh', headquarters: 'Jehanabad', area: 1569, population: 1124176, populationYear: 2011, density: 716, literacy: 66.8, sexRatio: 922, languages: ['Hindi', 'Magahi'], coordinates: { lat: 25.2124, lng: 84.9897 }, color: '#b45309', mapPosition: { x: 38, y: 60 },
    description: 'Jehanabad was carved out of Gaya district. It is known for its agricultural produce and religious sites.',
    touristAttractions: [{ name: 'Makhdumpur', type: 'Historical', description: 'Historic town with ancient ruins.' }],
    rivers: ['Phalgu'], interestingFacts: ['Carved out of Gaya district in 1986.'],
  },
  {
    id: 'arwal', name: 'Arwal', slug: 'arwal', division: 'Magadh', headquarters: 'Arwal', area: 638, population: 700843, populationYear: 2011, density: 1099, literacy: 67.44, sexRatio: 907, languages: ['Hindi', 'Magahi'], coordinates: { lat: 25.2440, lng: 84.6600 }, color: '#f43f5e', mapPosition: { x: 33, y: 58 },
    description: 'Arwal is one of the newest and smallest districts of Bihar, carved out of Jehanabad in 2001.',
    touristAttractions: [], rivers: ['Sone'], interestingFacts: ['One of the newest districts, established in 2001.'],
  },
  {
    id: 'nawada', name: 'Nawada', slug: 'nawada', division: 'Magadh', headquarters: 'Nawada', area: 2494, population: 2219146, populationYear: 2011, density: 890, literacy: 59.76, sexRatio: 939, languages: ['Hindi', 'Magahi'], coordinates: { lat: 24.8861, lng: 85.5399 }, color: '#6d28d9', mapPosition: { x: 52, y: 65 },
    description: 'Nawada is known for the Kakolat Waterfall, one of the most scenic waterfalls in Bihar, and the Pragbodhi Cave where Buddha meditated.',
    touristAttractions: [{ name: 'Kakolat Waterfall', type: 'Nature', description: 'A 160-feet waterfall surrounded by dense forest, one of Bihar\'s most scenic spots.' }, { name: 'Pragbodhi Cave', type: 'Sacred', description: 'The cave where Buddha is believed to have meditated before his enlightenment.' }],
    rivers: ['Sakri', 'Dharnai'], interestingFacts: ['Kakolat Waterfall is 160 feet high and one of Bihar\'s most scenic spots.'],
  },
  {
    id: 'aurangabad', name: 'Aurangabad', slug: 'aurangabad', division: 'Magadh', headquarters: 'Aurangabad', area: 3303, population: 2540073, populationYear: 2011, density: 769, literacy: 70.32, sexRatio: 921, languages: ['Hindi', 'Magahi', 'Bhojpuri'], coordinates: { lat: 24.7516, lng: 84.3741 }, color: '#0284c7', mapPosition: { x: 28, y: 70 },
    description: 'Aurangabad in Bihar (not to be confused with Aurangabad in Maharashtra) is named after Mughal Emperor Aurangzeb. It is known for the Dev Kund waterfall and Deo Sun Temple.',
    touristAttractions: [{ name: 'Deo Sun Temple', type: 'Temple', description: 'Ancient Sun temple, one of the few in India, significant during Chhath Puja.' }, { name: 'Dev Kund', type: 'Nature', description: 'A natural pond with religious significance, surrounded by temples.' }],
    rivers: ['Adri', 'Punpun'], interestingFacts: ['Home to one of India\'s rare Sun temples at Deo.'],
  },
  {
    id: 'purnia', name: 'Purnia', slug: 'purnia', division: 'Purnia', headquarters: 'Purnia', area: 3229, population: 3264619, populationYear: 2011, density: 1011, literacy: 51.08, sexRatio: 921, languages: ['Hindi', 'Urdu', 'Surjapuri'], coordinates: { lat: 25.7771, lng: 87.4753 }, color: '#be123c', mapPosition: { x: 85, y: 22 },
    description: 'Purnia is the largest city in the Seemanchal region of Bihar. It serves as the divisional headquarters and is known for its jute and mango production.',
    touristAttractions: [{ name: 'Puran Devi Mandir', type: 'Temple', description: 'Ancient temple believed to give the city its name.' }, { name: 'Devkund', type: 'Nature', description: 'Sacred pond with historical significance.' }],
    rivers: ['Kosi', 'Mahananda', 'Saura'], interestingFacts: ['Purnia is the largest city in the Seemanchal region.'],
  },
  {
    id: 'katihar', name: 'Katihar', slug: 'katihar', division: 'Purnia', headquarters: 'Katihar', area: 3056, population: 3071029, populationYear: 2011, density: 1005, literacy: 52.24, sexRatio: 919, languages: ['Hindi', 'Surjapuri', 'Bengali'], coordinates: { lat: 25.5384, lng: 87.5645 }, color: '#4f46e5', mapPosition: { x: 88, y: 32 },
    description: 'Katihar is an important railway junction connecting Bihar with the northeastern states. The district is known for jute cultivation and mango orchards.',
    touristAttractions: [{ name: 'Goga Lake', type: 'Nature', description: 'A scenic lake popular for birdwatching.' }],
    rivers: ['Ganga', 'Kosi', 'Mahananda'], interestingFacts: ['Major railway junction connecting Bihar to the northeast.'],
  },
  {
    id: 'araria', name: 'Araria', slug: 'araria', division: 'Purnia', headquarters: 'Araria', area: 2830, population: 2811569, populationYear: 2011, density: 993, literacy: 53.53, sexRatio: 921, languages: ['Hindi', 'Surjapuri', 'Bengali'], coordinates: { lat: 26.1497, lng: 87.5145 }, color: '#059669', mapPosition: { x: 88, y: 15 },
    description: 'Araria borders Nepal and is part of the Seemanchal region. Known for its diverse ethnic communities and agricultural produce.',
    touristAttractions: [], rivers: ['Kosi', 'Parman'], interestingFacts: ['Located in the diverse Seemanchal region bordering Nepal.'],
  },
  {
    id: 'kishanganj', name: 'Kishanganj', slug: 'kishanganj', division: 'Purnia', headquarters: 'Kishanganj', area: 1884, population: 1690400, populationYear: 2011, density: 897, literacy: 57.04, sexRatio: 950, languages: ['Hindi', 'Surjapuri', 'Bengali'], coordinates: { lat: 26.0938, lng: 87.9383 }, color: '#7c3aed', mapPosition: { x: 95, y: 12 },
    description: 'Kishanganj is the northeasternmost district of Bihar, known for its tea gardens — the only tea-producing region in Bihar.',
    touristAttractions: [{ name: 'Tea Gardens', type: 'Nature', description: 'Bihar\'s only tea-producing region with scenic plantations.' }],
    rivers: ['Mahananda', 'Kankai'], interestingFacts: ['Only tea-producing district in Bihar.'],
  },
  {
    id: 'saharsa', name: 'Saharsa', slug: 'saharsa', division: 'Kosi', headquarters: 'Saharsa', area: 1702, population: 1900661, populationYear: 2011, density: 1117, literacy: 53.2, sexRatio: 906, languages: ['Hindi', 'Maithili', 'Angika'], coordinates: { lat: 25.8785, lng: 86.5968 }, color: '#0891b2', mapPosition: { x: 72, y: 20 },
    description: 'Saharsa is the divisional headquarters of the Kosi division. The district has been significantly affected by the Kosi River, known as the "Sorrow of Bihar".',
    touristAttractions: [], rivers: ['Kosi'], interestingFacts: ['The Kosi River, known as the "Sorrow of Bihar", flows through this district.'],
  },
  {
    id: 'supaul', name: 'Supaul', slug: 'supaul', division: 'Kosi', headquarters: 'Supaul', area: 2410, population: 2229076, populationYear: 2011, density: 925, literacy: 57.69, sexRatio: 929, languages: ['Hindi', 'Maithili'], coordinates: { lat: 26.1210, lng: 86.6030 }, color: '#ca8a04', mapPosition: { x: 70, y: 10 },
    description: 'Supaul borders Nepal and is part of the Kosi division. It was carved out of Saharsa district.',
    touristAttractions: [], rivers: ['Kosi'], interestingFacts: ['Carved out of Saharsa district in 1991.'],
  },
  {
    id: 'madhepura', name: 'Madhepura', slug: 'madhepura', division: 'Kosi', headquarters: 'Madhepura', area: 1787, population: 2001762, populationYear: 2011, density: 1120, literacy: 52.25, sexRatio: 911, languages: ['Hindi', 'Maithili', 'Angika'], coordinates: { lat: 25.9210, lng: 86.7920 }, color: '#dc2626', mapPosition: { x: 78, y: 18 },
    description: 'Madhepura was devastated by the 2008 Kosi floods. It is part of the Kosi division and is recovering with new infrastructure.',
    touristAttractions: [{ name: 'Singheshwar Sthan', type: 'Temple', description: 'Famous Shiva temple attracting devotees during Sawan month.' }],
    rivers: ['Kosi'], interestingFacts: ['Severely affected by the 2008 Kosi floods.'],
  },
  {
    id: 'banka', name: 'Banka', slug: 'banka', division: 'Bhagalpur', headquarters: 'Banka', area: 3020, population: 2034763, populationYear: 2011, density: 674, literacy: 58.17, sexRatio: 907, languages: ['Hindi', 'Angika'], coordinates: { lat: 24.8852, lng: 86.9217 }, color: '#15803d', mapPosition: { x: 80, y: 52 },
    description: 'Banka was carved out of Bhagalpur district. It is known for its hilly terrain in the Mandar range and religious significance of Mandar Hill.',
    touristAttractions: [{ name: 'Mandar Hill', type: 'Sacred', description: 'Believed to be the mountain used in the Samudra Manthan (churning of the ocean).' }],
    rivers: ['Chandan', 'Banka'], interestingFacts: ['Mandar Hill is associated with the Samudra Manthan legend.'],
  },
  {
    id: 'jamui', name: 'Jamui', slug: 'jamui', division: 'Munger', headquarters: 'Jamui', area: 3122, population: 1760405, populationYear: 2011, density: 564, literacy: 59.79, sexRatio: 922, languages: ['Hindi', 'Magahi', 'Angika'], coordinates: { lat: 24.9261, lng: 86.2250 }, color: '#a21caf', mapPosition: { x: 62, y: 58 },
    description: 'Jamui is known for its lac production and hilly terrain. The district has significant tribal population.',
    touristAttractions: [{ name: 'Naulakha Mandir', type: 'Temple', description: 'An ornate Jain temple with impressive architecture.' }],
    rivers: ['Kiul', 'Ulai'], interestingFacts: ['One of the largest lac-producing districts in India.'],
  },
  {
    id: 'lakhisarai', name: 'Lakhisarai', slug: 'lakhisarai', division: 'Munger', headquarters: 'Lakhisarai', area: 1229, population: 1000717, populationYear: 2011, density: 814, literacy: 62.42, sexRatio: 902, languages: ['Hindi', 'Magahi'], coordinates: { lat: 25.1563, lng: 86.0943 }, color: '#be185d', mapPosition: { x: 58, y: 48 },
    description: 'Lakhisarai is one of the smaller districts of Bihar, named after the ancient Lakhi Sarai (ruins). Known for its Ashok Dham temple.',
    touristAttractions: [{ name: 'Ashok Dham', type: 'Temple', description: 'A prominent Hindu temple complex attracting pilgrims.' }],
    rivers: ['Kiul', 'Harohar'], interestingFacts: ['Named after ancient "Lakhi Sarai" ruins.'],
  },
  {
    id: 'sheikhpura', name: 'Sheikhpura', slug: 'sheikhpura', division: 'Munger', headquarters: 'Sheikhpura', area: 689, population: 636342, populationYear: 2011, density: 923, literacy: 64.65, sexRatio: 926, languages: ['Hindi', 'Magahi'], coordinates: { lat: 25.1397, lng: 85.8434 }, color: '#c2410c', mapPosition: { x: 55, y: 50 },
    description: 'Sheikhpura is one of the smallest districts in Bihar. It is known for the Kabar Taal wetland, an important bird habitat.',
    touristAttractions: [{ name: 'Kabar Taal', type: 'Wetland', description: 'One of the largest freshwater wetlands in Asia, a haven for migratory birds.' }],
    rivers: ['Harohar'], interestingFacts: ['Kabar Taal is one of Asia\'s largest freshwater wetlands.'],
  },
];

// Helper functions for district data
export const getDistrictBySlug = (slug) => districts.find(d => d.slug === slug);
export const getDistrictById = (id) => districts.find(d => d.id === id);
export const getDistrictsByDivision = (division) => districts.filter(d => d.division === division);
export const getAllDivisions = () => [...new Set(districts.map(d => d.division))];
export const getDistrictCount = () => districts.length;

export default districts;
