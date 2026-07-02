// Rich mock data for the BELONG Teacher Companion prototype

export const mockStudents = [
  {
    id: "stu-1",
    name: "Leo Chen",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo",
    grade: "3rd Grade",
    needs: "ADHD (Combined Type)",
    strengths: ["Creativity", "Visual Thinking", "Curiosity"],
    interests: ["Space Exploration", "Dinosaurs", "Building Lego"],
    learningPreferences: "Visual and Hands-on. Learns best through active building, drawing, and interactive storytelling. Needs frequent short movement breaks.",
    attentionSpan: "5-10 minutes of sustained focus on structured text, up to 35 minutes when engaged in hands-on building or visual stories.",
    participationScore: 78,
    engagementHistory: [
      { week: "Week 1", score: 60 },
      { week: "Week 2", score: 65 },
      { week: "Week 3", score: 75 },
      { week: "Week 4", score: 78 },
      { week: "Week 5", score: 82 }
    ],
    confidenceTimeline: [
      { month: "Jan", level: 40 },
      { month: "Feb", level: 55 },
      { month: "Mar", level: 60 },
      { month: "Apr", level: 78 },
      { month: "May", level: 85 }
    ],
    recentNotes: [
      { id: "note-1-1", date: "2026-06-25", text: "Successfully completed the Solar System lesson. His hands-on rocket build kept him highly focused." },
      { id: "note-1-2", date: "2026-06-28", text: "Needed two movement breaks during reading time, but re-engaged quickly after doing a 'rocket launch' stretch." }
    ],
    currentGoals: [
      { id: "goal-1-1", text: "Raise hand before sharing ideas during circle time", status: "in-progress" },
      { id: "goal-1-2", text: "Complete one independent reading block of 12 minutes", status: "achieved" }
    ],
    achievements: [
      "Solar System Expert Badge",
      "Most Creative Lego Rocket Designer",
      "Helpful Helper during cleanup"
    ]
  },
  {
    id: "stu-2",
    name: "Maya Patel",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Maya",
    grade: "3rd Grade",
    needs: "Autism Spectrum (Level 1), Sensory Sensitive",
    strengths: ["Problem Solving", "Curiosity", "Helping Others"],
    interests: ["Train Systems", "Nature Drawings", "Puzzles"],
    learningPreferences: "Highly structured and detail-oriented. Needs clear visual timetables and step-by-step instructions. Prefers quiet environments.",
    attentionSpan: "25-30 minutes for logical puzzles or pattern matching, but drops under 5 minutes in noisy or unstructured team exercises.",
    participationScore: 64,
    engagementHistory: [
      { week: "Week 1", score: 45 },
      { week: "Week 2", score: 50 },
      { week: "Week 3", score: 58 },
      { week: "Week 4", score: 64 },
      { week: "Week 5", score: 70 }
    ],
    confidenceTimeline: [
      { month: "Jan", level: 30 },
      { month: "Feb", level: 35 },
      { month: "Mar", level: 48 },
      { month: "Apr", level: 55 },
      { month: "May", level: 64 }
    ],
    recentNotes: [
      { id: "note-2-1", date: "2026-06-24", text: "Drew a beautiful botanical chart during botany class. Extremely accurate details." },
      { id: "note-2-2", date: "2026-06-29", text: "Found the fire drill preparation stressful, but used noise-canceling headphones and calmed down by drawing trains." }
    ],
    currentGoals: [
      { id: "goal-2-1", text: "Work with one peer partner for 10 minutes on a science experiment", status: "in-progress" },
      { id: "goal-2-2", text: "Use visual schedule card to transition between subjects independently", status: "achieved" }
    ],
    achievements: [
      "Detail Master of the Week",
      "Super Botanist Illustrator",
      "Quiet Focus Champion"
    ]
  },
  {
    id: "stu-3",
    name: "Sam Higgins",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sam",
    grade: "3rd Grade",
    needs: "Dyslexia",
    strengths: ["Storytelling", "Leadership", "Creativity"],
    interests: ["Soccer", "Forest Animals", "Adventure Stories"],
    learningPreferences: "Auditory and Verbal. Excels in discussions, oral storytelling, and role-play. Benefits from text-to-speech tools and graphic novels.",
    attentionSpan: "15-20 minutes when listening to audio or video, but fatigues quickly during extensive text reading (5-8 minutes).",
    participationScore: 89,
    engagementHistory: [
      { week: "Week 1", score: 80 },
      { week: "Week 2", score: 82 },
      { week: "Week 3", score: 85 },
      { week: "Week 4", score: 89 },
      { week: "Week 5", score: 92 }
    ],
    confidenceTimeline: [
      { month: "Jan", level: 55 },
      { month: "Feb", level: 60 },
      { month: "Mar", level: 72 },
      { month: "Apr", level: 80 },
      { month: "May", level: 89 }
    ],
    recentNotes: [
      { id: "note-3-1", date: "2026-06-23", text: "Led his group project with incredible charisma. Verbally explained photosynthesis perfectly to the class." },
      { id: "note-3-2", date: "2026-06-27", text: "Frustrated during written vocabulary review. Switched him to oral spelling matching, and his confidence immediately recovered." }
    ],
    currentGoals: [
      { id: "goal-3-1", text: "Use text-to-speech reader for three social studies paragraphs", status: "in-progress" },
      { id: "goal-3-2", text: "Write three complete descriptive sentences with spelling aids", status: "in-progress" }
    ],
    achievements: [
      "Inspirational Class Captain",
      "Best Adventure Storyteller",
      "Awesome Soccer Teammate"
    ]
  },
  {
    id: "stu-4",
    name: "Chloe Vance",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Chloe",
    grade: "3rd Grade",
    needs: "Selective Mutism / High Anxiety",
    strengths: ["Helping Others", "Visual Thinking", "Problem Solving"],
    interests: ["Undersea Animals", "Watercolor Painting", "Gardening"],
    learningPreferences: "Quiet, non-verbal indicators, and hands-on projects. Thrives with 1-on-1 interaction, small groups, and watercolor illustrations.",
    attentionSpan: "20-25 minutes in calm settings. Focus drops significantly when put on the spot or asked to speak in front of the whole class.",
    participationScore: 55,
    engagementHistory: [
      { week: "Week 1", score: 35 },
      { week: "Week 2", score: 42 },
      { week: "Week 3", score: 48 },
      { week: "Week 4", score: 55 },
      { week: "Week 5", score: 62 }
    ],
    confidenceTimeline: [
      { month: "Jan", level: 35 },
      { month: "Feb", level: 40 },
      { month: "Mar", level: 45 },
      { month: "Apr", level: 50 },
      { month: "May", level: 58 }
    ],
    recentNotes: [
      { id: "note-4-1", date: "2026-06-22", text: "Quietly helped Leo clean his workspace without being asked. She communicates beautifully through gestures and smiles." },
      { id: "note-4-2", date: "2026-06-30", text: "Answered a math question by showing her written answer whiteboard. This low-stakes participation worked wonderfully!" }
    ],
    currentGoals: [
      { id: "goal-4-1", text: "Show response card (green/red) during group check-ins", status: "achieved" },
      { id: "goal-4-2", text: "Speak in a quiet whisper to her peer buddy Leo during lab work", status: "in-progress" }
    ],
    achievements: [
      "Kindness Award",
      "Incredible Ocean Illustrator",
      "Peer Support Star"
    ]
  }
];

export const mockDashboardStats = {
  activeStudents: 4,
  lessonsGenerated: 24,
  confidenceGrowth: 18, // percent
  participationRate: 72, // percent
  weeklyOverview: [
    { name: "Mon", Participation: 65, Engagement: 70, Confidence: 60 },
    { name: "Tue", Participation: 72, Engagement: 75, Confidence: 65 },
    { name: "Wed", Participation: 68, Engagement: 82, Confidence: 70 },
    { name: "Thu", Participation: 78, Engagement: 80, Confidence: 73 },
    { name: "Fri", Participation: 82, Engagement: 88, Confidence: 78 }
  ]
};

export const mockMissions = [
  { id: "m-1", text: "Pair Chloe with Leo for a hands-on math activity to encourage low-stakes connection.", completed: false, category: "social" },
  { id: "m-2", text: "Give Leo a movement break before starting the science reading block.", completed: true, category: "focus" },
  { id: "m-3", text: "Provide Maya with a visual checklist for the afternoon clean-up routine.", completed: false, category: "structure" }
];

export const mockAISuggestions = [
  { id: "s-1", time: "2 hours ago", student: "Leo Chen", text: "Leo is showing focus fatigue after 10 mins. Try transitioning to the 'Rocket Launch' brain break." },
  { id: "s-2", time: "1 day ago", student: "Maya Patel", text: "Math fractions page has high text density. Offer Maya the 'Block Builder' visual puzzle alternative." },
  { id: "s-3", time: "2 days ago", student: "Chloe Vance", text: "To increase Chloe's participation, use the 'Show-Me' whiteboard method instead of calling on her verbally." }
];

export const mockStrengths = [
  { id: "st-1", name: "Creativity", color: "bg-purple-100 text-purple-700 border-purple-300 shadow-duo-purple", description: "Generates unique ideas, works with artistic mediums, and thinks outside the box.", studentsCount: 3 },
  { id: "st-2", name: "Leadership", color: "bg-blue-100 text-blue-700 border-blue-300 shadow-duo-blue", description: "Organizes groups naturally, expresses clear visions, and motivates teammates.", studentsCount: 1 },
  { id: "st-3", name: "Curiosity", color: "bg-teal-100 text-teal-700 border-teal-300 shadow-duo-teal", description: "Asks deep questions, loves exploring new concepts, and has a strong desire to learn.", studentsCount: 2 },
  { id: "st-4", name: "Helping Others", color: "bg-orange-100 text-orange-700 border-orange-300 shadow-duo-orange", description: "Shows high empathy, assists peers with tasks, and senses others' emotions.", studentsCount: 2 },
  { id: "st-5", name: "Storytelling", color: "bg-purple-100 text-purple-700 border-purple-300 shadow-duo-purple", description: "Expresses ideas vividly through verbal stories, writing, or performance.", studentsCount: 1 },
  { id: "st-6", name: "Problem Solving", color: "bg-blue-100 text-blue-700 border-blue-300 shadow-duo-blue", description: "Enjoys math puzzles, troubleshooting breakdowns, and structuring logical rules.", studentsCount: 2 },
  { id: "st-7", name: "Visual Thinking", color: "bg-teal-100 text-teal-700 border-teal-300 shadow-duo-teal", description: "Understands layouts, maps, timelines, and uses sketches to explain thoughts.", studentsCount: 2 }
];

export const strengthObservations = [
  { id: "o-1", studentName: "Leo Chen", strengthName: "Creativity", date: "2026-06-29", text: "Created an elaborate spaceship drawing that incorporated actual biology concepts to explain alien survival." },
  { id: "o-2", studentName: "Maya Patel", strengthName: "Problem Solving", date: "2026-06-28", text: "Quietly corrected a coding block logic puzzle on the board that had stumped three other students." },
  { id: "o-3", studentName: "Sam Higgins", strengthName: "Storytelling", date: "2026-06-27", text: "Gave a dramatic recitation of a rainforest legend, capturing the class's attention for a full 10 minutes." }
];

// Pre-made lessons that can be generated/displayed
export const mockLessons = {
  history: {
    subject: "Science / Space",
    grade: "3rd Grade",
    topic: "The Solar System & Gravity",
    objectives: "Identify the planets in our solar system, understand gravity as an invisible pulling force, and explore orbital motion.",
    interests: "Space Exploration, Dinosaurs, Building, Drawing",
    style: "Visual & Hands-on",
    span: "10-15 min",
    difficulty: "Medium",
    generated: {
      story: {
        title: "The Gravity Trampoline",
        content: `Once upon a time, in a classroom not too different from ours, a girl named Zara and her friendly dinosaur companion, Rex, found a glowing map of the solar system. Rex was confused. "Zara, why don't the planets just float off into the deep dark space like loose balloons?" 

Zara smiled. "Imagine space is a giant, stretchy trampoline," she explained. "If we place a heavy bowling ball in the middle, what happens?" 

"It sinks down and makes a big pocket!" Rex roared.

"Exactly! That heavy ball is like our Sun. When you roll smaller marbles across the trampoline, they get caught in that dip and roll around the heavy ball instead of flying off. That dip is gravity, Rex! It's space's invisible hug that holds everything together."`,
        illustationPrompt: "A cartoon little girl Zara explaining gravity to a friendly green Tyrannosaurus Rex on a giant trampoline in space, with glowing colorful planets orbiting around them."
      },
      comic: [
        { panel: 1, text: "Zara and Rex find a glowing space map.", desc: "Zara holds a map showing glowing planets. Rex looks curious." },
        { panel: 2, text: "Rex wonders why planets don't float away.", desc: "Rex holds a globe that is floats away, looking confused." },
        { panel: 3, text: "Zara explains gravity using a trampoline.", desc: "Zara puts a heavy bowling ball in the center of a trampoline." },
        { panel: 4, text: "Rex rolls a marble, and it circles the ball!", desc: "Rex rolls a shiny blue marble. It orbits around the heavy ball." }
      ],
      quiz: [
        { q: "What heavy object sits in the center of our solar system and pulls planets in?", options: ["The Moon", "The Sun", "Jupiter", "A black hole"], correct: "The Sun", hint: "It keeps us warm during the day!" },
        { q: "Zara uses what playground item to explain gravity's dip in space?", options: ["A slide", "A swing", "A trampoline", "A sandbox"], correct: "A trampoline", hint: "You can jump high on it!" },
        { q: "Gravity behaves like what?", options: ["An invisible push", "An invisible pull", "A strong wind", "A magnet that only eats rocks"], correct: "An invisible pull", hint: "It holds your feet firmly to the ground." }
      ],
      brainBreak: {
        title: "Astronaut Orbit Stretch",
        instructions: "Let's all stand up and become planets! \n1. Plant your feet firmly in the ground—your feet are locked in by Earth's gravity.\n2. Extend your arms wide.\n3. Slowly spin your torso like a planet rotating in space.\n4. When the teacher calls 'Supernova!', jump once to release your energy, then orbit slowly in a circle back to your seat. (Repeat twice)."
      },
      activities: [
        {
          name: "Clay Trampoline Experiment",
          time: "15 mins",
          materials: "Stretchy fabric or trash bags, rubber bands, bowls, heavy marbles, light beads.",
          desc: "Stretch the fabric over a bowl and secure it with a rubber band. Place a large marble (Sun) in the middle. Roll small beads (planets) from the edge and watch them orbit. Notice how they orbit faster when they get closer to the center!"
        },
        {
          name: "Design-a-Planet Scrapbook",
          time: "20 mins",
          materials: "Colored paper, crayons, Lego bricks, space stickers.",
          desc: "Students build a planet's surface using Lego bricks or draw it on paper. Write 1 fact about its gravity: Is it a high-gravity planet where dinosaurs walk slowly, or low-gravity where astronauts bounce?"
        }
      ],
      teacherTips: [
        { target: "ADHD", tip: "Give Leo the role of 'Sun Monitor'—he is responsible for placing the heavy marble in the center. This hands-on task satisfies physical engagement needs." },
        { target: "Sensory", tip: "For Maya, ensure the clay orbit activity uses non-sticky beads or allow her to use gloves if sensory issues arise." },
        { target: "Anxiety", tip: "Ask Chloe to present her planet design by posting it on the classroom board rather than presenting verbally." }
      ]
    }
  }
};

export const mockSocialData = {
  studentsNeedingEncouragement: [
    { name: "Chloe Vance", reason: "Hasn't spoken in groups this week.", recommendation: "Use non-verbal signaling templates.", score: 55 },
    { name: "Maya Patel", reason: "Avoided group play during recess.", recommendation: "Introduce train builder team game.", score: 64 }
  ],
  suggestedPeerBuddies: [
    { studentA: "Chloe Vance", studentB: "Leo Chen", reason: "Leo's high energy can help spark engagement in hands-on building, and Chloe's calm presence helps Leo stay focused." },
    { studentA: "Maya Patel", studentB: "Sam Higgins", reason: "Sam's leadership and storytelling can verbally articulate the rule systems Maya designs for puzzles." }
  ],
  weeklyRecommendations: [
    "Introduce a 'Co-operative Building Hour' where students work in pairs to assemble Lego spaceships. Great for ADHD + Anxiety pairings.",
    "Implement 'Silent Whiteboard Math' to allow non-verbal students to participate in board games without social pressure.",
    "Schedule structured transitions utilizing visual cards to decrease stress during afternoon cleaning."
  ]
};

export const mockReflectionReports = [
  {
    week: "June 22 - June 26, 2026",
    responses: {
      participation: "Most students participated, but Chloe remained non-verbal. Sam and Leo participated heavily.",
      confidence: "Leo showed major confidence growth during the space building project. Chloe shared one drawing with a peer.",
      strategy: "The 'Trampoline Gravity' physical activity worked incredibly well to engage kinesthetic learners."
    },
    aiReview: "Classroom engagement was high (72%). You effectively structured physical breaks. To support quiet students next week, focus on structured partner play rather than larger groups.",
    actions: ["Incorporate the Astronaut stretch in afternoon sessions", "Implement the Chloe-Leo lego pairing"]
  }
];

export const mockSettings = {
  theme: "light",
  language: "English",
  notifications: {
    email: true,
    browser: true,
    weeklyReport: true,
    aiAlerts: true
  },
  aiPreferences: {
    creativityLevel: "balanced",
    focusAreas: ["Social Skills", "Focus/ADHD Support", "Reading Accessibility"],
    generationStyle: "Duolingo Story Hybrid"
  },
  profile: {
    name: "Mrs. Sarah Jenkins",
    school: "Oakwood Elementary School",
    role: "3rd Grade Lead Teacher",
    classroom: "Class 3-B",
    email: "sarah.jenkins@oakwoodelementary.edu"
  }
};
