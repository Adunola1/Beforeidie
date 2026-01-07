document.addEventListener('DOMContentLoaded', () => {
    const entryInput = document.getElementById('entryInput');
    const submitBtn = document.getElementById('submitBtn');
    const entriesGrid = document.getElementById('entriesGrid');

    const defaultEntries = [
        "Before I die, I want to travel to Japan and see the cherry blossoms",
        "Before I die, I want to make peace with my estranged brother",
        "Before I die, I want to learn to play the piano",
        "Before I die, I want to feel completely comfortable in my own skin",
        "Before I die, I want to write a letter to my future self",
        "Before I die, I want to fall in love and be loved back",
        "Before I die, I want to see my children grow up happy",
        "Before I die, I want to volunteer for a cause I truly care about",
        "Before I die, I want to own a small home in the countryside",
        "Before I die, I want to say sorry to someone I hurt",
        "Before I die, I want to swim in the ocean at sunrise",
        "Before I die, I want to run a marathon",
        "Before I die, I want to take a solo trip and discover a new city on my own",
        "Before I die, I want to forgive someone who hurt me deeply",
        "Before I die, I want to start a garden and grow my own vegetables",
        "Before I die, I want to see the Northern Lights",
        "Before I die, I want to publish a short story or poem",
        "Before I die, I want to dance like nobody is watching",
        "Before I die, I want to have a proper heart-to-heart with my best friend",
        "Before I die, I want to climb a mountain and see the view from the top",
        "Before I die, I want to adopt a pet and give it a loving home",
        "Before I die, I want to learn a new language",
        "Before I die, I want to sit quietly and watch the sunset without my phone",
        "Before I die, I want to tell my parents how much I appreciate them",
        "Before I die, I want to travel with no plan and just go wherever the road takes me",
        "Before I die, I want to take a painting or pottery class",
        "Before I die, I want to forgive myself for past mistakes",
        "Before I die, I want to cook a full meal for my friends and family",
        "Before I die, I want to write a journal every day for a month",
        "Before I die, I want to watch the sunrise from a quiet hilltop",
        "Before I die, I want to learn to meditate and feel inner calm",
        "Before I die, I want to say “I love you” without fear",
        "Before I die, I want to ride a hot air balloon",
        "Before I die, I want to spend a day without checking my phone",
        "Before I die, I want to make a meaningful contribution to someone’s life",
        "Before I die, I want to laugh until I cry with friends",
        "Before I die, I want to listen to someone’s story and truly understand them",
        "Before I die, I want to surprise someone with an act of kindness",
        "Before I die, I want to learn how to swim",
        "Before I die, I want to finish a book I’ve always wanted to read",
        "Before I die, I want to have a picnic in a quiet park",
        "Before I die, I want to see a live concert of my favorite musician",
        "Before I die, I want to forgive my own fears and try something new",
        "Before I die, I want to sit under the stars and feel small and alive",
        "Before I die, I want to make a scrapbook of my happiest memories",
        "Before I die, I want to take a road trip with no destination",
        "Before I die, I want to plant a tree",
        "Before I die, I want to tell someone how proud I am of them",
        "Before I die, I want to bake bread from scratch",
        "Before I die, I want to take a yoga class and stretch fully",
        "Before I die, I want to capture a moment in a photograph that I never want to forget",
        "Before I die, I want to dance in the rain",
        "Before I die, I want to visit my grandparents’ hometown",
        "Before I die, I want to ride a bicycle through a quiet forest trail",
        "Before I die, I want to make a playlist of songs that shaped my life",
        "Before I die, I want to experience snow for the first time",
        "Before I die, I want to forgive someone I can’t forget",
        "Before I die, I want to watch a movie that makes me cry",
        "Before I die, I want to write down everything I’ve learned about life",
        "Before I die, I want to try surfing",
        "Before I die, I want to have a full day with no obligations",
        "Before I die, I want to tell someone I love them and mean it",
        "Before I die, I want to celebrate my birthday in a way I’ve always dreamed of",
        "Before I die, I want to go stargazing in a place with no light pollution",
        "Before I die, I want to swim in a waterfall",
        "Before I die, I want to taste a cuisine I’ve never tried",
        "Before I die, I want to build something with my own hands",
        "Before I die, I want to learn how to drive a car confidently",
        "Before I die, I want to forgive someone who never apologized",
        "Before I die, I want to make peace with my past",
        "Before I die, I want to enjoy a cup of coffee while watching the world wake up",
        "Before I die, I want to dance at a wedding just for joy",
        "Before I die, I want to take a painting outdoors and let the world inspire me"
    ];
    let userEntries = JSON.parse(localStorage.getItem('beforeIDieEntries')) || [];
    let entries = [...defaultEntries, ...userEntries];

    const saveEntries = () => {
        localStorage.setItem('beforeIDieEntries', JSON.stringify(entries));
    };

    const createEntryCard = (text) => {
        const card = document.createElement('div');
        card.classList.add('entry-card');
        card.textContent = text;
        return card;
    };

    const renderEntries = () => {
        entriesGrid.innerHTML = '';
        const shuffledEntries = [...entries].sort(() => Math.random() - 0.5);
        shuffledEntries.forEach(entry => {
            entriesGrid.appendChild(createEntryCard(entry));
        });
    };

    const addEntry = () => {
        const newEntryText = entryInput.value.trim();
        if (newEntryText) {
            entries.push(newEntryText);
            saveEntries();
            entryInput.value = '';
            renderEntries();
        }
    };

    submitBtn.addEventListener('click', addEntry);

    entryInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addEntry();
        }
    });

    // Initial render
    renderEntries();
});

