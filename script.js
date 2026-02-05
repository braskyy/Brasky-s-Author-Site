// 1. SITE NAVIGATION
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');
    document.querySelector('.main-content').scrollTop = 0;
}

// 2. SHAPES EASTER EGG LOGIC
const shapesScript = [
    { slide: 1, text: "The History of Shapes. A TedX Talk by Dr. Triangela Shapiro, Shape Hero." },
    { slide: 2, text: "Since the beginning of time, shapes have captured our imagination. They bound the borders of the knowable universe. The sun and moon, for example, were once thought to be an old man and woman in a loveless marriage whose bitter arguments over custody of the earth were what caused night and day. Of course, today we know that that same sun and moon are in fact ancient circles. Shapes define natural fauna, like the starfish, the circle bird, and the rectangle puppy. We rely on shapes to describe our social circumstances: describing anyone perpendicular to our subculture as ‘squares.’ Trianguloid foodstuffs are now estimated to account for 8% of total global GDP—it’s likely you consumed one today, whether it be pizza slices, Doritos, a sandwich half, or pyramid soup. A 2016 study conducted by the Pew Research Institute showed that 98% of humans and 6% of dogs described shapes as ‘Somewhat Important’ or ‘Very Important in my life.’ Indeed, shapes are the primordial ectoplasm in which humanity is suspended; the dense angular syrup into which our lives have been packed." },
    { slide: 3, text: "I know what you’re thinking. Shapes are old-fashioned. My parents used shapes. Shapes are over. These days we prefer diffuse unbounded sets distributed at random among various cardinalities of infinity. You don’t care about equalizing torus meridians. You say: Save that partial geometric differential equation drama for your mama. I get it. Hell, I’ll admit it, I even used to feel the same way. You see, I was born a Shapiro. In case you don’t know, I’ll give you a quick etymology lesson: ‘Shapiro’ is derived from the modern English ‘Shape Hero,’ a nom-de-geom conferred to my grandfather after he found the area under the curve of Winston Churchill’s moustache." },
    { slide: 4, text: "But shapes is not just stuffy old foggy old jolly old england town. Shapes concern you and your subculture specifically. The crystals that dangle heedlessly from your irreverent necks and ears are actually a form of shapes, believe it or not. So as you strut from cafe to co-op and back again, consider how a parallelogram grid replicates along the z-axis of that rock in regular atomic hexagonal lattice to allow the sturdy translucent beauty you covet. Indeed, some of society’s most effective drugs are available in crystalline formats that can be smoked discretely and which scientists agree are responsible for the steady increase in vibing over the last 40 years. It appears modern society is being driven toward a syncretic health-religion of shapes, combining traditions of Euclidean gemoetry, platonic solids, vedic chakras, and mapping meridians on the atlas of the body in order to insert various rectangular prisms of nutrients and columns of satisfaction into this or that aperture." },
    { slide: 5, text: "So before we get too far ahead of ourselves, how about a little quick history. Shapes were invented in the year 50,000 B.C.E. by a gentleman named Loaf Rocktickler. At the time, Mr. Rocktickler was employed as a sun-starer, earning two coconuts a day by staring at the sun, which ensured the stories he told that night around the campfire would be interesting and dynamic to capture the imaginations of his neanderthal compatriots. The permanent circles of sun burned into Mr. Rocktickler’s eyes led him to suggest that the next season of cave paintings be done using abstract shapes instead of aurochs, which at the time were considered the funniest animal. Rocktickler reasoned that by populating vertical surfaces with rectangles, and then decorating the rectangles in a public forum for collective consumption, the men and women in the Plop Plop precinct of Neandertalladega, now new york city, would develop bonds through access to a common topic they could describe and reflect on together. This tradition persists today in art galleries, on phones and TVs, and in window shopping, wherein agreed upon rectangles are audited and discussed by modern humans subconsciously craving the warmth of a burnt cornea but too alienated from sun-staring and the communal campfire to have access the primordial sharing shape." },
    { slide: 6, text: "The word shape originated as a verb, not a noun. It comes to us from the Old English scapan, the past participle of scieppan, which means ‘to create, form, destine,’ and can be seen in the Proto-Germanic skapjanan “create, ordain,” and has its roots in the Proto Indo European skep, which meant “to cut, scrape, hack.” The noun means ‘form; created being, creature; condition; sex, genitalia” and evolved to mean “contours of the body.” In 1800s America recorded use of the word as “condition, state,” is attested. Who among you weary pupils has not at one time had a body, or a condition? I’m here to tell you: These are shapes." },
    { slide: 7, text: "Moreover, which of us has not at one time or another been cast as a ‘shapeshifter,’ or resolved firmly to get ‘in shape’ this winter, or had one’s genitals described furtively as ‘misshapen’ by a jilted lover? To those of us who have seen our doughy hearts leavened by love, only to be sliced bare into tidy squares and left to stale on the gluten free buffet of life, we are possessed of the gravity of shapes. How many of us spent years in a relationship, realizing only afterward that it persisted largely due to an irrational preoccupation with the symmetrical geometry of a face’s shape or the stone fruit contours of the shapely area under the curve? Indeed, many times we have sought to find the area of the shape of love, only to divide by zero." },
    { slide: 8, text: "Make no mistake, the punishment for irrational shape love can be traced back to antiquity. Hippasus, a Pythagorean philosopher, was drowned at sea in 450 BC after he refused to recant his testimony of the existence of irrational numbers, such as the square root of 2 and pi and phi, such among them were possible to for the first time construct a dodecahedron inside a sphere. Such constructions were of incommensurable spiritual magnitude, and indeed have breeded a genealogy of apocrypha and study as ‘sacred geometry.’ By law, I am obliged to introduce the topic of ‘Sacred Geometry’ with a rhyming quatrain of my choice. The shifting sands of time offer dilettantes a fecund dune. Whose spheroid granules run serpentine on scales un-slaked. Tumble-polished granite slabs, the timbre of a well-tuned tomb. In catacombs a tattooed wound will bloom a sacred shape. Those of us who have tried to square the circle in a DIY rite know the irrationality of the effort is also a source of its power. Pi is transcendental, the same pi we used for circle-As, deathly hallows, and celtic crosses. Honeybee hexagons, nautilus spirals, microcosmic mandalas, Kepler’s nesting cosmoses, all seem to find their way onto the skin as tattoos or find themselves warmed just above it as jewelry." },
    { slide: 9, text: "Likewise, the rhomboids, the trapezius, and even the pronator quadratus all ride silently under our skin as we exchange cloth rectangles and copper discs for circle sectors with extra cheese and piping hot columns of coffee." },
    { slide: 10, text: "One of the chief causes of music’s rise in popularity in the 20th century is shapes. The inventor of the record, Reggie Recordplayer, came up with a shrewd and frankly brilliant concept: put a circle inside a square, in order to delight and surprise people. This tradition actually dates back to antiquity, and can be seen today in modern food preparation, such as the application of Bologna rounds to bread squares, and the insertion of pizza discs into 3-dimensional square ovens." },
    { slide: 11, text: "Conclusion: laying on a gently sloping hill, gallons of summer sun pouring into our skin, we gaze skyward and assign the amorphous clouds shapes as a pastime. We gather kith and kin to sing shapes under domes in cathedrals. We pump gallantly across lines of traffic on two thin circles spinning on sphere bearings held in place by well-welded geometry. We notice the shapes in the wilderness that match the shapes we met in society, or vice versa. We trouble civility with projectiles and shapeless fire. And more than anything, we stare and stare and stare at the bright rectangles attached to the electronic amulets and virtual veda mecums we tote and secret in our homes. Shapes are all around us. Thanks shapes." },
    { slide: 12, text: "My body is the shape I live in and it shapes the way I live. Raquel Welch said this while she was staring at the clouds trying to determine what shapes they looked like to her. She did such a good job at this that she was awarded an honorary degree at Oxford University. It was actually called Boxford University at the time, but she convinced the chancellor to change the name to Oxford by reasoning the first letter in the word Oxford, ‘O,’ could actually be considered a circle, one of mankind’s earliest known shapes. And you’ll no doubt recognize the connection between this Oxford Circle and the celebrated Harvard Square in America. Suncube, square dance, circle pit? Let’s find out! THE END." }
];

let currentSlideIdx = 0;
// Replace YOUR_SLIDE_ID with your actual Slide ID
const slideBase = "https://docs.google.com/presentation/d/YOUR_SLIDE_ID/embed?start=false&loop=false&rm=minimal";

function startShapesEgg() {
    const overlay = document.getElementById('shapes-overlay');
    const audio = document.getElementById('quinha-audio');
    
    overlay.style.display = 'flex';
    audio.play();
    currentSlideIdx = 0;
    speakSlide(0);
}

function speakSlide(idx) {
    if (idx >= shapesScript.length || document.getElementById('shapes-overlay').style.display === 'none') return;

    // Advanced Navigation: Updating the SRC with the specific Slide ID (id.p{number})
    // For many decks, id.p1, id.p2, etc. correspond to the order
    const iframe = document.getElementById('shapes-frame');
    iframe.src = slideBase + "&slide=id.p" + (idx + 1);

    const utterance = new SpeechSynthesisUtterance(shapesScript[idx].text);
    const voices = window.speechSynthesis.getVoices();
    
    // Voice Profile: Ominous Old Lady
    utterance.voice = voices.find(v => v.name.includes('Female') || v.name.includes('Google US English') || v.name.includes('Hazel')) || voices[0];
    utterance.pitch = 0.7; 
    utterance.rate = 0.82; 

    utterance.onend = () => {
        currentSlideIdx++;
        if (currentSlideIdx < shapesScript.length) {
            setTimeout(() => speakSlide(currentSlideIdx), 1500); // 1.5s pause between slides
        }
    };

    window.speechSynthesis.speak(utterance);
}

function closeShapesEgg() {
    const overlay = document.getElementById('shapes-overlay');
    const audio = document.getElementById('quinha-audio');
    window.speechSynthesis.cancel();
    audio.pause();
    audio.currentTime = 0;
    overlay.style.display = 'none';

}
