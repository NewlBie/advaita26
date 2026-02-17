/**
 * fetchEventById - Utility to find specific event data.
 * @param id - The unique event identifier.
 * @returns The matching event object or undefined.
 */
export const fetchEventById = (id: string): Event | undefined => {
    return events.find(e => e.id === id);
};

/**
 * Interface defining the structure of an Event anomaly.
 */
export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    link: string;
    isCorrupted?: boolean;
}

/**
 * Central event registry for ADVAITA 2026.
 */
export const events: Event[] = [
    {
        id: 'EV-001',
        title: "HACKFEST",
        date: "MARCH 13, 2026",
        time: "21:00 HRS - OVERNIGHT",
        location: "PLACEMENT CELL",
        description: "A competitive hackathon where teams develop innovative tech solutions across multiple domains like healthcare, fintech, and IoT. Participants present their projects to judges and compete for prizes based on originality, feasibility, and impact.",
        image: "/assets/events/hackfest.png",
        link: "https://unstop.com/hackathons/hackfest-international-institute-of-information-technology-iiit-bhubaneswar-1640143"
    },
    {
        id: 'EV-002',
        title: "Stringed Delicacy",
        date: "MARCH 15, 2026",
        time: "10:00 - 13:00 HRS",
        location: "FOOD COURT",
        description: "A two-member team race combining sack jumping and food-eating challenges. The fastest team completing both tasks without violations wins.",
        image: "/assets/events/string delicacy.png",
        link: "https://unstop.com/o/krwbpJl?lb=SAD4u1e3&utm_medium=Share&utm_source=sathvbha84965&utm_campaign=Events"
    },
    {
        id: 'EV-003',
        title: "Photography Advaita Theme",
        date: "MARCH 13-15, 2026",
        time: "OPEN ALL TIME",
        location: "ONLINE",
        description: "An exhibition showcasing participants’ best photographs on open or Advaita themes. Photos are displayed digitally or in print and evaluated for quality and creativity.",
        image: "/assets/events/photo gallery.png",
        link: "https://unstop.com/o/xRJFpTd?lb=SAD4u1e3&utm_medium=Share&utm_source=sathvbha84965&utm_campaign=Events"
    },
    {
        id: 'EV-004',
        title: "Broken String",
        date: "MARCH 13-15, 2026",
        time: "OPEN ALL TIME",
        location: "ONLINE",
        description: "A storytelling contest using 5–6 sequential photographs. Participants narrate a complete story through visuals and written descriptions.",
        image: "/assets/events/broken strings.png",
        link: "https://unstop.com/o/CvORbDZ?lb=SAD4u1e3&utm_medium=Share&utm_source=sathvbha84965&utm_campaign=Competitions"
    },
    {
        id: 'EV-005',
        title: "FOOTLOOSE SOLO DANCE",
        date: "MARCH 15, 2026",
        time: "09:00 - 14:00 HRS",
        location: "A-BLOCK OPEN SPACE",
        description: "A solo dance competition including western and classical styles. Judges evaluate choreography, expressions, and presentation.",
        image: "/assets/events/footloose.png",
        link: "https://unstop.com/events/footloose-solo-dance-advaita-2026-international-institute-of-information-technology-iiit-bhubaneswar-1640713"
    },
    {
        id: 'EV-006',
        title: "FOOTLOOSE GROUP DANCE",
        date: "MARCH 15, 2026",
        time: "09:00 - 14:00 HRS",
        location: "A-BLOCK OPEN SPACE",
        description: "A group dance competition including western and classical styles. Teams are judged on coordination, choreography, and group dynamics.",
        image: "/assets/events/footloose.png",
        link: "https://unstop.com/events/footloose-group-dance-advaita-2026-international-institute-of-information-technology-iiit-bhubaneswar-1640726"
    },
    {
        id: 'EV-007',
        title: "LAMODE",
        date: "MARCH 15, 2026",
        time: "17:30 - 20:00 HRS",
        location: "MAIN STAGE",
        description: "A team-based fashion show highlighting creativity, themes, and costume design. Judges evaluate runway walk, coordination, styling, and audience engagement.",
        image: "/assets/events/lamode.png",
        link: "https://unstop.com/o/kJ0FGzQ?lb=SAD4u1e3&utm_medium=Share&utm_source=sathvbha84965&utm_campaign=Events"
    },
    {
        id: 'EV-008',
        title: "ACOUSTICA",
        date: "MARCH 14, 2026",
        time: "09:00 - 13:00 HRS",
        location: "CG-02",
        description: "A solo singing competition testing vocal ability and artistic expression. Participants perform within a time limit with minimal instrumental support.",
        image: "/assets/events/acoustica.png",
        link: "https://unstop.com/events/acoustica-international-institute-of-information-technology-iiit-bhubaneswar-1636839"
    },
    {
        id: 'EV-009',
        title: "INVENTO EXPO",
        date: "ALL DAY",
        time: "OPEN ALL TIME",
        location: "TBD",
        description: "Showcasing the latest in dimensional hardware and retro-tech solutions. Participants present innovative prototypes.",
        image: "/assets/events/product teardown.png",
        link: "https://unstop.com/competitions/invento-expo-international-institute-of-information-technology-iiit-bhubaneswar-1640527"
    },
    {
        id: 'EV-010',
        title: "FRAME-A-THON",
        date: "MARCH 13, 2026",
        time: "10:00 - 13:00 HRS",
        location: "CG-02",
        description: "A short-film competition encouraging filmmakers to showcase storytelling through drama, documentaries, or thrillers. Entries are judged on direction, visuals, editing, and storytelling quality.",
        image: "/assets/events/photo gallery.png",
        link: "https://unstop.com/events/frameathon-international-institute-of-information-technology-iiit-bhubaneswar-1640541"
    },
    {
        id: 'EV-011',
        title: "HIDDEN TRAIL",
        date: "MARCH 13, 2026",
        time: "09:00 - 13:00 HRS",
        location: "AG-01",
        description: "Follow the clues through the woods. A thrilling race to uncover hidden secrets and reach the finish line.",
        image: "/assets/events/ace hunt.png",
        link: "https://unstop.com/o/kU0wHIO?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Events"
    },
    {
        id: 'EV-012',
        title: "NUKKAD",
        date: "MARCH 14, 2026",
        time: "09:00 - 13:00 HRS",
        location: "OPEN SPACE",
        description: "A street-play competition focused on social awareness and public engagement. Teams perform live using acting and music to convey impactful messages.",
        image: "/assets/events/rangbhoomi.png",
        link: "https://unstop.com/events/nukkad-international-institute-of-information-technology-iiit-bhubaneswar-1640723"
    },
    {
        id: 'EV-013',
        title: "VALORANT",
        date: "MARCH 14-15, 2026",
        time: "09:00 - 18:00 HRS",
        location: "PLACEMENT CELL",
        description: "A tactical shooter tournament featuring knockout and playoff rounds. Matches follow official competitive rules with map bans and timeouts.",
        image: "/assets/events/valorant.png",
        link: "https://unstop.com/o/JZHKP2C?lb=SAD4u1e3&utm_medium=Share&utm_source=sathvbha84965&utm_campaign=Competitions"
    },
    {
        id: 'EV-014',
        title: "BGMI",
        date: "MARCH 14-15, 2026",
        time: "09:00 - 18:00 HRS",
        location: "PLACEMENT CELL",
        description: "A competitive battle royale tournament played in squad format. Teams earn points through placements and kills to qualify for finals.",
        image: "/assets/events/bgmi.png",
        link: "https://unstop.com/o/vqBYEIr?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Competitions"
    },
    {
        id: 'EV-015',
        title: "ROCKATHON",
        date: "MARCH 13, 2026",
        time: "16:00 - 19:00 HRS",
        location: "MAIN STAGE",
        description: "A live band performance contest where teams showcase vocal and instrumental skills. Judging is based on originality, stage presence, and musical quality.",
        image: "/assets/events/acoustica.png",
        link: "https://unstop.com/events/rockathon-international-institute-of-information-technology-iiit-bhubaneswar-1641405"
    },
    {
        id: 'EV-016',
        title: "FUTSAL",
        date: "MARCH 13-14, 2026",
        time: "07:30 - 15:00 HRS",
        location: "BASKETBALL COURT",
        description: "A 5-a-side indoor football competition with league and knockout stages. Teams compete based on goals, fair play, and match performance.",
        image: "/assets/events/robo soccer.png",
        link: "https://unstop.com/o/H4MfvWN?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Events"
    },
    {
        id: 'EV-017',
        title: "MAGGIE CHEF",
        date: "MARCH 14, 2026",
        time: "10:00 - 13:00 HRS",
        location: "FOOD COURT",
        description: "A culinary contest where participants prepare dishes within a fixed time. Judging is based on creativity, hygiene, taste, and presentation.",
        image: "/assets/events/maggie chef.png",
        link: "https://unstop.com/o/MtyXpci?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Events"
    },
    {
        id: 'EV-018',
        title: "GOLGAPPA KING",
        date: "MARCH 15, 2026",
        time: "15:30 - 18:00 HRS",
        location: "FOOD COURT",
        description: "A fun contest where participants compete to eat the maximum golgappas in limited time. Winners are selected through multiple elimination rounds.",
        image: "/assets/events/golgappa king.png",
        link: "https://unstop.com/o/b8v0rSA?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Events"
    },
    {
        id: 'EV-019',
        title: "MIC DROP",
        date: "MARCH 13, 2026",
        time: "10:00 - 13:00 HRS",
        location: "A BLOCK OPEN SPACE",
        description: "A hip-hop event featuring rap battles and beatboxing rounds. Participants compete through showcases and duels based on rhythm, delivery, and originality.",
        image: "/assets/events/acoustica.png",
        link: "https://unstop.com/events/mic-drop-international-institute-of-information-technology-iiit-bhubaneswar-1640745"
    },
    {
        id: 'EV-020',
        title: "REEL MAKING",
        date: "MARCH 13-15, 2026",
        time: "OPEN ALL TIME",
        location: "ONLINE",
        description: "A vertical short-video competition based on the theme “Advaita.” Participants create engaging 20–30 second reels using original footage.",
        image: "/assets/events/photo gallery.png",
        link: "https://unstop.com/o/375acwV?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Events"
    },
    {
        id: 'EV-021',
        title: "ART CURRACY",
        date: "MARCH 15, 2026",
        time: "14:00 - 17:00 HRS",
        location: "AG-02",
        description: "Sketching the anomalies. Visual documentation of the entities beyond.",
        image: "/assets/events/art curracy.png",
        link: "https://unstop.com/o/UiQaGNp?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Events"
    },
    {
        id: 'EV-022',
        title: "PAINT AND WEAR",
        date: "MARCH 14, 2026",
        time: "10:30 - 13:00 HRS",
        location: "AG-02",
        description: "Wearable art design. Camouflage for the Upside Down.",
        image: "/assets/events/artistic alchemy.png",
        link: "https://unstop.com/o/PwSp7KE?lb=nUKPGfOC&utm_medium=Share&utm_source=hrusikar1761&utm_campaign=Events"
    },
    {
        id: 'EV-023',
        title: "SHOLE PARATHE",
        date: "MARCH 13, 2026",
        time: "15:30 - 18:00 HRS",
        location: "FOOD COURT",
        description: "The spicy paratha challenge. Hotter than the core of the gate.",
        image: "/assets/events/shole paratha.png",
        link: "https://unstop.com/o/a24ymXA?lb=SAD4u1e3&utm_medium=Share&utm_source=sathvbha84965&utm_campaign=Events"
    },
    {
        id: 'EV-024',
        title: "MANTHAN (STARTUP CONCLAVE)",
        date: "MARCH 15, 2026",
        time: "10:00 - 12:00 HRS",
        location: "CG-02",
        description: "The ultimate startup pitch competition. Present your business models to a panel of expert judges.",
        image: "/assets/events/startup conclave.png",
        link: "https://unstop.com/college-fests/advaita-2026-international-institute-of-information-technology-iiit-bhubaneswar-438972"
    },
    {
        id: 'EV-025',
        title: "PHOTOGALLERY",
        date: "MARCH 13-15, 2026",
        time: "OPEN ALL TIME",
        location: "C311",
        description: "An exhibition showcasing participants’ best photographs on open or Advaita themes. Photos are displayed for visitors to appreciate the visual art.",
        image: "/assets/events/photo gallery.png",
        link: "https://unstop.com/o/xRJFpTd?lb=SAD4u1e3&utm_medium=Share&utm_source=sathvbha84965&utm_campaign=Events"
    }
];
