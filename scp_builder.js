'use strict';

const subjects_s_obj = [
    'abacus',
    'accordion',
    'acorn',
    'advertisement',
    'airplane',
    'alarm',
    'alcoholic drink',
    'alligator',
    'almanac',
    'altar',
    'android',
    'apple',
    'aquarium',
    'army',
    'avocado',
    'baby',
    'badge',
    'bag',
    'bag of blood',
    'bag of sand',
    'bagel',
    'balaclava',
    'ball',
    'balloon',
    'banana',
    'banjo',
    'barrel',
    'barstool',
    'baseball',
    'basketball',
    'bassoon',
    'bat',
    'bathrobe',
    'bathtub',
    'battery',
    'battleship',
    'bear',
    'beard',
    'beaver',
    'bed',
    'bell',
    'bench',
    'bicycle',
    'bikini',
    'birdcage',
    'blackboard',
    'blanket',
    'boat',
    'bomb',
    'book',
    'bottle',
    'bow',
    'bowl',
    'box',
    'box of cereal',
    'bracelet',
    'brain',
    'bucket',
    'bull',
    'bus',
    'button',
    'cactus',
    'cake',
    'calendar',
    'camel',
    'can of beans',
    'can of tuna',
    'candle',
    'car',
    'carton of eggs',
    'carton of milk',
    'cash register',
    'casket',
    'cat',
    'chair',
    'chicken',
    'chimpanzee',
    'cigar',
    'clock',
    'cockroach',
    'coin',
    'comb',
    'comic book',
    'compass',
    'computer',
    'crystal',
    'demon',
    'dog',
    'doll',
    'dolphin',
    'door',
    'egg',
    'elephant',
    'elevator',
    'elf',
    'eyeball',
    'face',
    'fairy',
    'feather',
    'fish',
    'flower',
    'fountain',
    'frog',
    'fruit',
    'ghost',
    'glove',
    'gun',
    'hand',
    'harp',
    'hat',
    'heart',
    'horn',
    'horse',
    'hot dog',
    'humanoid entity',
    'jar of jam',
    'jar of mayonnaise',
    'jar of pickles',
    'kazoo',
    'key',
    'kite',
    'knife',
    'ladder',
    'lamp',
    'liquid',
    'lizard',
    'lollipop',
    'machine',
    'magnet',
    'mailbox',
    'mammoth',
    'map',
    'mask',
    'microwave',
    'mirror',
    'monkey',
    'monster',
    'necklace',
    'orange',
    'ostrich',
    'oven',
    'owl',
    'painting',
    'pearl',
    'pen',
    'perfume',
    'phone',
    'piano',
    'plant',
    'plate',
    'pool',
    'potato',
    'potion',
    'printer',
    'rabbit',
    'radio',
    'record',
    'record player',
    'refrigerator',
    'ring',
    'robot',
    'rock',
    'sandwich',
    'scarecrow',
    'scarf',
    'scorpion',
    'sea creature',
    'seed',
    'shadow',
    'shell',
    'shirt',
    'shovel',
    'skeleton',
    'skull',
    'snake',
    'snowman',
    'spider',
    'sponge',
    'staircase',
    'statue',
    'submarine',
    'suitcase',
    'sword',
    'table',
    'toaster',
    'toilet',
    'tomato',
    'toothbrush',
    'towel',
    'toy',
    'train',
    'trumpet',
    'umbrella',
    'urn',
    'utensil',
    'vacuum cleaner',
    'vase',
    'violin',
    'volcano',
    'wall',
    'wallet',
    'watch',
    'whale',
    'window',
    'wrench',
    'yoyo',
    'zebra',
    'zombie'
];

const subjects_pl_obj = [
    'acorns',
    'airplanes',
    'alarms',
    'alligators',
    'androids',
    'ants',
    'apples',
    'arrows',
    'avocadoes',
    'babies',
    'bacteria',
    'badges',
    'bagels',
    'bagpipes',
    'bags of sand',
    'balloons',
    'balls',
    'bananas',
    'banjoes',
    'barrels',
    'baseballs',
    'basketballs',
    'bathtubs',
    'bats',
    'batteries',
    'battleships',
    'bears',
    'beavers',
    'beds',
    'bees',
    'bells',
    'benches',
    'berries',
    'bicycles',
    'bikinis',
    'binoculars',
    'birdcages',
    'birds',
    'blankets',
    'boats',
    'bombs',
    'bones',
    'bongos',
    'books',
    'boots',
    'bottles',
    'bowls',
    'bows',
    'boxes',
    'bracelets',
    'brains',
    'bricks',
    'bubbles',
    'buckets',
    'buffalo',
    'bulls',
    'buses',
    'butterflies',
    'buttons',
    'cacti',
    'cakes',
    'camels',
    'candles',
    'cans of tuna',
    'cars',
    'cats',
    'chairs',
    'chickens',
    'chimpanzees',
    'chopsticks',
    'cigars',
    'clocks',
    'cockroaches',
    'coins',
    'combs',
    'comic books',
    'computers',
    'crystals',
    'demons',
    'dogs',
    'dolls',
    'dolphins',
    'doors',
    'eggs',
    'elephants',
    'elves',
    'eyeballs',
    'fairies',
    'feathers',
    'fish',
    'flowers',
    'frogs',
    'fruits',
    'ghosts',
    'glasses',
    'gloves',
    'guns',
    'hands',
    'hats',
    'horses',
    'hot dogs',
    'humanoid entities',
    'jars of mayonnaise',
    'kazoos',
    'keys',
    'knives',
    'lamps',
    'lizards',
    'magnets',
    'maps',
    'maracas',
    'masks',
    'mirrors',
    'monkeys',
    'monsters',
    'mosquitos',
    'oranges',
    'ostriches',
    'owls',
    'paintings',
    'pants',
    'pens',
    'plants',
    'plates',
    'potatoes',
    'potions',
    'rabbits',
    'records',
    'rings',
    'robots',
    'rocks',
    'sandwiches',
    'scarves',
    'scissors',
    'scorpions',
    'sea creatures',
    'seeds',
    'shadows',
    'shells',
    'shoes',
    'shovels',
    'skeletons',
    'skulls',
    'snakes',
    'socks',
    'spiders',
    'sponges',
    'statues',
    'swords',
    'tomatoes',
    'toothbrushes',
    'towels',
    'toys',
    'trains',
    'trumpets',
    'umbrellas',
    'underwear',
    'utensils',
    'vases',
    'violins',
    'volcanoes',
    'wallets',
    'walls',
    'watches',
    'whales',
    'windows',
    'wrenches',
    'yoyoes',
    'zebras',
    'zombies'
];

const subjects_s_con = [
    'company',
    'computer program',
    'containment procedure',
    'cooking recipe',
    'disease',
    'drawing',
    'dream',
    'email',
    'font',
    'game',
    'haircut',
    'image',
    'language',
    'mathematical equation',
    'meme',
    'movie',
    'number',
    'poem',
    'radio station',
    'religion',
    'riddle',
    'ritual',
    'song',
    'sound',
    'story',
    'television program',
    'time loop',
    'video game',
    'virus',
    'voice',
    'website',
    'word'
];

const subjects_pl_con = [
    'ancient writings',
    'body movements',
    'computer programs',
    'cooking recipes',
    'dreams',
    'emails',
    'hieroglyphics',
    'images',
    'jokes',
    'mathematical equations',
    'memes',
    'numbers',
    'patterns',
    'poems',
    'riddles',
    'sounds',
    'television commercials',
    'video games',
    'voices',
    'words'
];

const subjects_s_place = [
    '7-square-mile area',
    'amusement park',
    'beach',
    'building',
    'burger joint',
    'cabin',
    'canyon',
    'casino',
    'castle',
    'cave',
    'city',
    'country',
    'desert',
    'dimension',
    'factory',
    'forest',
    'Foundation site',
    'graveyard',
    'hospital',
    'hotel',
    'house',
    'island',
    'lake',
    'mansion',
    'museum',
    'neighborhood',
    'planet',
    'region of the ocean',
    'region of space',
    'river',
    'room',
    'school',
    'store',
    'swamp',
    'testing chamber',
    'town',
    'tunnel',
    'village'
];

const subjects_pl_place = [
    'a number of cities in France',
    'a number of towns in West Africa',
    'buildings',
    'catacombs',
    'caves',
    'hills',
    'houses',
    'islands',
    'mountains',
    'plains',
    'planets',
    'regions of space',
    'roads',
    'several famous historical sites',
    'several villages in the Italian countryside',
    'tunnels',
    'woods'
];

const subjects_s_ppl = [
    'actor',
    'alien',
    'angel',
    'artist',
    'athlete',
    'bus driver',
    'butler',
    'child',
    'cook',
    'cowboy',
    'D-Class',
    'deity',
    'doctor',
    'dwarf',
    'famous person',
    'farmer',
    'fictional character',
    'fisherman',
    'Foundation researcher',
    'Foundation agent',
    'genie',
    'giant',
    'gymnast',
    'historical figure',
    'janitor',
    'king',
    'lawyer',
    'magician',
    'man',
    'nun',
    'old man',
    'old woman',
    'police officer',
    'politician',
    'priest',
    'prostitute',
    'soldier',
    'teacher',
    'teenager',
    'vigilante',
    'waitor',
    'waitress',
    'woman',
];

const subjects_pl_ppl = [
    'Asian people',
    'a band of rock stars',
    'a city of people',
    'actors',
    'aliens',
    'athletes',
    'British people',
    'children',
    'criminals',
    'D-Class',
    'Europeans',
    'famous people',
    'fishermen',
    'Foundation personnel',
    'gymnasts',
    'men',
    'old people',
    'people',
    'police',
    'politicians',
    'poor people',
    'prostitutes',
    'psycopaths',
    'rich people',
    'soldiers',
    'teachers',
    'teenagers',
    'triplets',
    'twins',
    'women'
];

const adjectives = [
    'agitated',
    'angry',
    'attractive',
    'blind',
    'cold',
    'confused',
    'dead',
    'gelatinous',
    'happy',
    'heavy',
    'hostile',
    'hungry',
    'ignited',
    'immortal',
    'incorporeal',
    'menacing',
    'obedient',
    'sad',
    'sick',
    'smart',
    'snarky',
    'sticky',
    'strong',
    'talkative',
    'transparent',
    'ugly',
    'uncomfortable'
];

const materials = [
    'bread',
    'cheese',
    'chocolate',
    'clay',
    'concrete',
    'dirt',
    'glass',
    'hair',
    'human tissue',
    'ice',
    'metal',
    'paper',
    'plastic',
    'sand',
    'stone',
    'water',
    'wood'
];

let scp_list = [

];

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function needs_an(word) {
    return ['a', 'e', 'i', 'o', 'u'].includes(word.charAt(0));
}

function rand_el(words) {
    return words[Math.floor(Math.random()*words.length)];
}

function rand_attrib(subject_type, plural) {
    let w;
    switch (subject_type) {
        case 'obj':
            return rand_el([
                `${(plural) ? 'are' : 'is'} made of ${rand_el(materials)}`,
                `${(plural) ? 'turn' : 'turns'} ${rand_el(subjects_pl_ppl)} into ${rand_el(subjects_pl_obj)}`,
                `${(plural) ? 'look like ' + rand_el(subjects_pl_obj) :
                    'looks like ' + ((needs_an(w = rand_el(subjects_s_obj))) ? 'an ' : 'a ') + w }`,
                `${(plural) ? 'taste like ' + rand_el(subjects_pl_obj) :
                    'tastes like ' + ((needs_an(w = rand_el(subjects_s_obj))) ? 'an ' : 'a ') + w }`,
                `${(plural) ? 'become' : 'becomes'} sentient when in contact with ${rand_el(subjects_pl_obj)}`,
                `${(plural) ? 'cause' : 'causes'} ${rand_el(subjects_pl_ppl)} to think they are ${((needs_an(w = rand_el(subjects_s_obj))) ? 'an ' : 'a ') + w}`,
                `${(plural) ? 'eat' : 'eats'} ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'summon' : 'summons'} ${((needs_an(w = rand_el(adjectives))) ? 'an ' : 'a ') + w + ' ' + rand_el(subjects_s_ppl)}`,
                `${(plural) ? 'are' : 'is'} possessed by ${((needs_an(w = rand_el(adjectives))) ? 'an ' : 'a ') + w + ' ' + rand_el(subjects_s_ppl)}`,
                `${(plural) ? 'pass' : 'passes'} through ${rand_el(materials)}`,
                `instantly ${(plural) ? 'become' : 'becomes'} ${rand_el(adjectives)} when observed`,
                `${(plural) ? 'speak' : 'speaks'} with ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'heal' : 'heals'} ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'each contain' : 'contains'} ${((needs_an(w = rand_el(subjects_s_place))) ? 'an ' : 'a ') + w}`,
                `${(plural) ? 'are' : 'is'} only found in ${rand_el(subjects_pl_place)}`,
                `${(plural) ? 'are' : 'is'} abnormally large`,
                `${(plural) ? 'are' : 'is'} indestructable`,
                `${(plural) ? 'are' : 'is'} very old`,
                `${(plural) ? 'are' : 'is'} permanently on fire`,
                `${(plural) ? 'freeze' : 'freezes'} people`,
                `${(plural) ? 'poison' : 'poisons'} people`,
                `${(plural) ? 'extend' : 'extends'} infinitely`,
                `${(plural) ? 'tell' : 'tells'} the future`,
                `${(plural) ? 'levitate' : 'levitates'}`,
                `${(plural) ? 'sing' : 'sings'}`,
                `${(plural) ? 'fight each other' : 'fights people'}`,
                `${(plural) ? 'manipulate' : 'manipulates'} time`,
                `${(plural) ? 'defy' : 'defies'} the laws of thermodynamics`,
                `spontaneously ${(plural) ? 'duplicate' : 'duplicates'}`,
                `can only be described with ${rand_el(subjects_pl_con)}`,
                `can generate infinite ${rand_el(subjects_pl_obj)}`,
                `cannot be moved`,
                `can talk`
            ]);
        case 'con':
            return rand_el([
                `${(plural) ? 'make' : 'makes'} ${rand_el(subjects_pl_ppl)} become increasingly ${rand_el(adjectives)}`,
                `${(plural) ? 'make' : 'makes'} ${rand_el(subjects_pl_ppl)} dance`,
                `${(plural) ? 'make' : 'makes'} ${rand_el(subjects_pl_ppl)} go crazy`,
                `${(plural) ? 'make' : 'makes'} ${rand_el(subjects_pl_ppl)} fight each other`,
                `${(plural) ? 'make' : 'makes'} ${rand_el(subjects_pl_ppl)} lose their memory`,
                `${(plural) ? 'heal' : 'heals'} ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'kill' : 'kills'} ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'cause' : 'causes'} ${((needs_an(w = rand_el(subjects_s_obj))) ? 'an ' : 'a ') + w} to appear`,
                `${(plural) ? 'cause' : 'causes'} ${((needs_an(w = rand_el(subjects_s_obj))) ? 'an ' : 'a ') + w} to disappear`,
                `${(plural) ? 'influence' : 'influences'} the thoughts of ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'summon' : 'summons'} ${((needs_an(w = rand_el(adjectives))) ? 'an ' : 'a ') + w + ' ' + rand_el(subjects_s_ppl)}`,
                `${(plural) ? 'attract' : 'attracts'} ${rand_el(subjects_pl_obj)}`,
                `${(plural) ? 'repel' : 'repels'} ${rand_el(subjects_pl_obj)}`,
                `only ${(plural) ? 'affect' : 'affects'} ${rand_el(subjects_pl_obj)}`,
                `${(plural) ? 'cause' : 'causes'} ${rand_el(subjects_pl_obj)} to emerge from nearby ${rand_el(materials)}`,
                `${(plural) ? 'corrode' : 'corrodes'} ${rand_el(materials)}`,
                `${(plural) ? 'change' : 'changes'} reality`,
                `${(plural) ? 'affect' : 'affects'} the climate`,
                `${(plural) ? 'revive' : 'revives'} the dead`,
                `${(plural) ? 'cause' : 'causes'} natural disasters`,
                `${(plural) ? 'tell' : 'tells'} the future`,
                `can only be described with ${rand_el(subjects_pl_con)}`,
                `can only be used once`
            ]);
        case 'place':
            return rand_el([
                `gravity is reversed, but only for ${rand_el(subjects_pl_obj)}`,
                `information can only be recorded via ${rand_el(subjects_pl_con)}`,
                `${rand_el(subjects_pl_ppl)} kill each other`,
                `${rand_el(subjects_pl_ppl)} are unable to sleep`,
                `${rand_el(subjects_pl_ppl)} are unable to speak`,
                `a population of sentient ${rand_el(subjects_pl_obj)} rule`,
                `people are terrorized by giant ${rand_el(subjects_pl_obj)}`,
                `${((needs_an(w = rand_el(subjects_s_ppl))) ? 'an ' : 'a ') + w} watches you`,
                `${((needs_an(w = rand_el(subjects_s_con))) ? 'an ' : 'a ') + w} controls the laws of physics`,
                `everything is made of ${rand_el(materials)}`,
                `people are teleported to ${((needs_an(w = rand_el(subjects_s_place))) ? 'an ' : 'a ') + w} upon exiting`,
                `everyone is ${rand_el(adjectives)}`,
                `everyone is transformed into ${((needs_an(w = rand_el(subjects_s_obj))) ? 'an ' : 'a ') + w}`,
                `everything is abnormally ${rand_el(adjectives)}`,
                `everything is ${Math.floor(Math.random()*4) + 2} times bigger`,
                `everything is ${Math.floor(Math.random()*4) + 2} times smaller`,
                `days are ${Math.floor(Math.random()*4) + 2} times longer`,
                `there are absolutely no ${rand_el(subjects_pl_obj)}`,
                `there is an abundance of ${rand_el(subjects_pl_obj)}`,
                `everyone shares consciousness`,
                `everything is underwater`,
                `everything is upside down`,
                `everything is sideways`,
                `perception is greatly affected`,
                `sound does not exist`,
                `smell does not exist`,
                `taste does not exist`,
                `time is stopped`,
                `time is slower`
            ]);
        case 'ppl':
            return rand_el([
                `${(plural) ? 'are' : 'is'} made of ${rand_el(materials)}`,
                `${(plural) ? 'are' : 'is'} part ${rand_el(subjects_s_obj)}`,
                `${(plural) ? 'are' : 'is'} abnormally ${rand_el(adjectives)}`,
                `${(plural) ? 'use' : 'uses'} ${rand_el(subjects_pl_con)} to control ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'use' : 'uses'} ${rand_el(subjects_pl_con)} to steal the memories of ${rand_el(subjects_pl_ppl)}`,
                `${(plural) ? 'use' : 'uses'} ${rand_el(subjects_pl_obj)} like ${rand_el(subjects_pl_obj)}`,
                `only ${(plural) ? 'eat' : 'eats'} ${rand_el(subjects_pl_obj)}`,
                `${(plural) ? 'have' : 'has'} ${Math.floor(Math.random()*7) + 3} arms`,
                `only ${(plural) ? 'live' : 'lives'} in ${rand_el(subjects_pl_place)}`,
                `${(plural) ? 'are' : 'is'} from the future`,
                `${(plural) ? 'are' : 'is'} from the past`,
                `${(plural) ? 'are' : 'is'} from another dimension`,
                `${(plural) ? 'are' : 'is'} inhumanly flexible`,
                `${(plural) ? 'are' : 'is'} undead`,
                `${(plural) ? 'reflect' : 'reflects'} all damage`,
                `${(plural) ? 'have' : 'has'} no personal records`,
                `${(plural) ? 'levitate' : 'levitates'}`,
                `only ${(plural) ? 'come' : 'comes'} out at night`,
                `${(plural) ? 'are' : 'is'} only alive during the day`,
                `can read the minds of ${rand_el(subjects_pl_ppl)}`,
                `can communicate with ${rand_el(subjects_pl_obj)}`,
                `can transform into ${((needs_an(w = rand_el(subjects_s_obj))) ? 'an ' : 'a ') + w}`,
                `can destroy anything that isn't made of ${rand_el(materials)}`,
                `can teleport to ${((needs_an(w = rand_el(subjects_s_place))) ? 'an ' : 'a ') + w} at will`,
                `can phase through ${rand_el(materials)}`,
                `can run ${Math.floor(Math.random()*200) + 50} mph`,
                `can jump ${Math.floor(Math.random()*140) + 10} feet in the air`,
                `cannot be killed`,
                `can fly`
            ]);
        default:
            return 'is alive';
    }
}

function new_scp() {
    let i;
    document.getElementById("prev_ideas").innerHTML = '';
    for (i= 0; i < scp_list.length; i++) {
        let textNode = document.createTextNode(scp_list[i]);
        let node = document.createElement("p");
        node.appendChild(textNode);
        document.getElementById("prev_ideas").appendChild(node);
    }
    document.getElementById("list_container").style.display = "block";

    let scp_item;
    let article;
    let idea;

    switch (Math.floor(Math.random()*8)) {
        // Singular object
        case 0:
            scp_item = rand_el(subjects_s_obj);
            article = (needs_an(scp_item)) ? 'An' : 'A';
            idea = article + ' ' + scp_item + ' which ' + rand_attrib('obj', 0);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('obj', 0));
            }
            break;
        // Multiple objects
        case 1:
            scp_item = rand_el(subjects_pl_obj);
            idea = capitalize(scp_item) + ' which ' + rand_attrib('obj', 1);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('obj', 1));
            }
            break;
        // Singular abstract concept
        case 2:
            scp_item = rand_el(subjects_s_con);
            article = (needs_an(scp_item)) ? 'An' : 'A';
            idea = article + ' ' + scp_item + ' which ' + rand_attrib('con', 0);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('con', 0));
            }
            break;
        // Multiple abstract concepts
        case 3:
            scp_item = rand_el(subjects_pl_con);
            idea = capitalize(scp_item) + ' which ' + rand_attrib('con', 1);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('con', 1));
            }
            break;
        // Singular place
        case 4:
            scp_item = rand_el(subjects_s_place);
            article = (needs_an(scp_item)) ? 'An' : 'A';
            idea = article + ' ' + scp_item + ' where ' + rand_attrib('place', 0);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('place', 0));
            }
            break;
        // Multiple places
        case 5:
            scp_item = rand_el(subjects_pl_place);
            idea = capitalize(scp_item) + ' where ' + rand_attrib('place', 1);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('place', 1));
            }
            break;
        // Singular sentient being
        case 6:
            scp_item = rand_el(subjects_s_ppl);
            article = (needs_an(scp_item)) ? 'An' : 'A';
            idea = article + ' ' + scp_item + ' who ' + rand_attrib('ppl', 0);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('ppl', 0));
            }
            break;
        // Multiple sentient beings
        case 7:
            scp_item = rand_el(subjects_pl_ppl);
            idea = capitalize(scp_item) + ' who ' + rand_attrib('ppl', 1);
            if (Math.random() > 0.5) {
                idea = idea.concat(' and ' + rand_attrib('ppl', 1));
            }
            break;

        default:
            break;
    }

    document.getElementById('scp_idea').innerHTML = idea;
    scp_list.unshift(idea);
    if (scp_list.length > 16)
        scp_list.pop();
}

new_scp();
document.getElementById("prev_ideas").innerHTML = '';
document.getElementById("list_container").style.display = "none";