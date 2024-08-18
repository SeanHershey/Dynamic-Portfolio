import React from 'react';
import './Posts.css';
import Post from './Post';

const Posts = () => {
    const blogPosts = [
        {
        title: 'fEMR Dynamic Translation',
        body: `fEMR is a fast EMR solution for remote clinics
        focussing on humanitarian relief applications who 
        depend on speed and ease of use rather than complex 
        features. I have been working on a dynamic
        translation service for physicians and healthcare
        coders who may write and read in different languages
        but must be on the same page. Our dynamic translation
        involves the neural networks Argos (OpenNMT) and 
        MarianMT working in the background in python.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1tqut77BaV7eObpsiYZy1Q1Ft1xH3GrOY',
        link: 'https://github.com/FEMR/femr',
        id: 'femr',
        },
        {
        title: 'Structural Image Classification',
        body: `Structural building damage comes in many different
        forms and levels, and can be classified by using images of the
        damage. Our team's aim was to use CNNs to classify the level of damage
        depicted in a picture. Our approach has improved extensibility
        and accuracy of structural damage classification with a CNN.
        The main criteria we analyzed our model on is accuracy with a
        secondary goal of computational efficiency`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1O1APkihqOSfJ-7F1BO67iirUaxB34h9S',
        link: 'https://github.com/SeanHershey/StructuralDamage',
        id: 'structural',
        },
        {
        title: 'Warehouse',
        body: `An application that allows its employees to keep track of its physical inventory.
        Able to define the layout of a warehouse.
        Then associate an item's storage shelf with a physical location.
        Using Vite provided a minimal setup to get React + TypeScript working in Vite with HMR and some ESLint rules.
        I then added ApolloClient to send GraphQL queries and mutations.
        I created React components for GetShelves, CreateWarehouse, CreateShelf, GetStatus, and Reset.
        I did simple CSS styling for the App as a whole.
        The backend is built on FastAPI and I used Strawberry for GraphQL classes, which made queries easy to represent.
        Then I ran Postgres SQL with SQLalchemy to the Supabase database (The schema can be found in schema.sql).
        CORS was handled using Starlette.As far as Deployment Supabase handles the database tables and a CRON job 
        that keeps the sites up always accessible and Render hosts the API server and the website.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/12Dvw5raRHd7yv9jdHE53JvvrDycgazrS',
        link: 'https://github.com/SeanHershey/Warehouse',
        id: 'warehouse',
        },
        {
        title: 'Dynamic Portfolio',
        body: `This website is created in react with a focus on 
        dynamic scaling and showcasing my work over the years. It is deployed with
        Netlify and does not have a backend instead focusing on a refined frontend
        utilizing JavaScript, CSS, and HTML.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1RZo6FOSHoyd9IKz9Z74N9zUSCBt24bi4',
        link: 'https://github.com/SeanHershey/Portfolio',
        id: 'portfolio',
        },
        {
        title: 'Glowbe',
        body: `This is a interactive visual showcase of WebGL in react. The points 
        display a sphere using the golden ratio and PI. The number and scale of 
        the points depend on the distance the cursor is from the center of the sphere.
        I created this to get a better understanding of WebGL in react and shaders.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1_LJV6mu6bQnNFVQmKN8mBCZwKk3TWlHx',
        link: 'https://github.com/SeanHershey/Glowbe',
        id: 'glowbe',
        },
        {
        title: 'Stable Diffusion',
        body: `I created a react website to showcase stable diffusion 
        image generation. It utilizes a simple frontend and flask backend.
        The backend uses Python and Keras to generate a stable diffusion image which
        is based on the users text input.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1isFtSrItx--RQbPL5_wD1cOHMZwxRbX1',
        },
        {
        title: 'Jitterbug',
        body: `I worked in a group to make a bullet-hell game in godot.
        The game features a simple yet engaging, top-down 2D-pixel art style.
        We draw inspiration from the games Enter the Gungeon and Deathstate: Abyssal Edition, 
        known for their unique visual appeal. Below are some screenshots for reference.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/14VDgrlUTiqSNz45oAC3RGDMi4wVhfLn_',
        link: 'https://github.com/jlrJames/Jitterbug',
        id: 'jitterbug',
        },
        {
        title: 'Printer Toners',
        body: `This project was done while working for my highschool.
        The application uses web scraping on a WAN in order to collate
        printer status information to respond to printer malfunctions and toner 
        levels before the kindergarten through 12th grade teachers would
        contact tech support. This improved my efficiency in my tech support
        role and improved the effectiveness of teachers and administrators
        at my school.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1U3x1FnknLTw0HPeDN4fYwZNM-_79T0Oy',
        },
        {
        title: 'PACMAN Chip Vulnerability Report',
        body: `This report details the Pacman M1 chip vulnerability and is written in three different
        mediums and for three different audiences. The first is an online article explaining the 
        Pacman exploit to a general audience who may not have any computer science knowledge. The 
        second medium in this paper is an executive summary which takes on a more business centered 
        explanation of Pacman. Finally, the third medium contained in this paper is an IEEE 
        compliant technical report research paper. This includes the most detail and is meant for an 
        informed computer scientist in academia.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1C9YailDHAZmhG_iOaZSVLNKGJivYY_7P',
        },
        {
        title: 'Cat and Mouse Forest',
        body: `Cat and Mouse Forest is a game based on a Java repository that I refactored to align 
        with principles of abstraction and implementing creational, structural, and behavioral patterns.
        The original game had the functionality of cutting trees and returning wood to the cabins,
        where the trees could be regrown by fairies. I added to this with a mouse infestation. 
        These mice are spawned by clicking the ground  and slowly destroy the cabins. The game can 
        again be brought to balance by clicking next to a fairy which transforms it into a cat who hunts
        mice.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1Z9mRB-U-QZtKO-XiOlKbLzhMlVbB-fQI',
        id: 'cat',
        },
        {
        title: 'Spider World',
        body: `The Spider World game has blocks that can be
        programmed by dragging and dropping for the spider to
        color all the goals and complete the stage. This was
        one of the first projects I built with a team in Java.
        This project taught me the fundamentals of team software 
        development and gave me the understanding to go on to 
        larger team based projects.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1d1kgo2KNIp4VE-Al3pqgnsuxGnMVg0mz',
        },
        {
        title: 'Huffman',
        body: `Huffman coding works by assigning data, in this implementation characters, to a 
        variable-length binary representation of a tree. The more frequently used a character is the closer 
        to the root and shorter the binary representation. For example, 'a' may get 001 while 'z' may have 
        the longer representation of 1010010. I implemented my Huffman encode and decode in python. In the 
        Huffman output file, I appended a header to translate this data with a tree where we know when 
        a ends in 0011010010 by traversing the tree. This project helped me understand the fundamentals
        of computer algorithms and along with proofs gave me a better grounding for more complex algorithms.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1eTrVzkHwOp3riotm9ysS77AtJcGXq57k',
        },
        {
        title: 'Concordance with a Hash Table',
        body: `A concordance assignment shows the
        number of occurrences of each word in a document,
        the example here is run on a dictionary and displays 
        the line number the word appears on in alphabetical
        order. The goal of this project was to understand
        hash tables as apart of learning data structures
        and their unique applications `,
        imgUrl: 'https://lh3.googleusercontent.com/d/1nQWz4-whN8YfLx5nXNo3Y0kUdeMw5VBM',
        },
        {
        title: 'Two-Colorable Graph',
        body: `Graphs are two-colorable or bipartite when 
        we can color each of its vertices with one of two 
        colors so that no two colored vertices are connected 
        by an edge. This implementation in python uses depth 
        first search to accomplish this classification. As one
        of the fundamental algorithms in computer science, applying
        this traversal helped reinforce the concepts of traversal
        strategies.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1e7qE-a8U11WC9SrTpl8gZ4gp8qpjKicf',
        },
        {
        title: 'Big Number Calculator',
        body: `Integers in Java are 32 bits so a max value of 
        2147483647 limits calculations. With floats we could 
        conceivably do calculations up to 3.40282347 x 10 ^ 38, 
        but what if this isn't enough for you? Using linked lists, 
        we can create a number representation class that can 
        store a variable amount of Integer nodes. This project
        reinforced limitations of datatypes and how object oriented 
        programming can be used to circumnavigate these limitations.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1yphp8u-neE1O8ivdrlxGivp7ZJaR3F4w',
        },
        {
        title: 'Calculator in C and ASM',
        body: `This project for Assembly entailed a command
        line calculator in C and Assembly. Learning assembly
        helped me understand the necessary bridge from higher 
        level programming languages to the machine code that 
        our computers run on.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1UDpMyhOQfoCBDuq6n7K8BeBYhCtUQFlt',
        },
        {
        title: 'Implementing ecalls in ASM ',
        body: `Event calls are how assembly communicates 
        with IO like printing to and reading from the command 
        line. This project overrides existing ecalls and 
        instead modified register values in order to build 
        other ecalls.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1YPuXxFYrWv6-fpuByIBLWhZtTcvGh2Et',
        },
        {
        title: 'Assembler',
        body: `This C project takes an assembly program and
        creates a machine code like representation of it so it
        can be run by the Emulator project that follows. An example
        of the binary template for 'and' is '000000 s t d 00000 100100',
        with specific registers to be filled out.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1TZ22ufaOYM55m9gCrGmMd0WJPZqMXFJD',
        },
        {
        title: 'Emulator',
        body: `This continuation of the Assembler C project
        takes machine code and runs it in the Emulator.
        The program keeps track of registers and uses them
        to support 14 instructions. This simulator can emulate
        and run assembly programs with these 14 instructions.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1BY_PQooleG1DHBiNrdaKPxr_wHH_s5i8',
        },
        {
        title: 'Computer Architecture Simulations',
        body: `First, I created a 5-stage piped CPU simulator
        which reports step by step the stages while keeping track of registers with an emulator. The idea of a 
        piped CPU is to allow multiple instruction to be  concurrently in the CPUs various stages. To achieve 
        this stall must be added for back-to-back dependent  instructions like x = 1 then x++. The next modification 
        I simulated is a branch predictor. When jumping to  different sections of code based on conditionals we 
        would have to stall until the jump was calculated but  if we could predict the jump, we could load those 
        instructions into the pipe. Finally, a cache simulation  allowed for testing of size, associativity, and block 
        size effect on cache hit rate. A higher cache hit rate  translates to data that can be looked up easily by the 
        CPU without needing to access disk or slower memory. `,
        imgUrl: 'https://lh3.googleusercontent.com/d/1qyzlyt7YnCZ1W220LzODIKvdzub4Svte',
        },
        {
        title: 'Over The Wire Bandit CTF',
        body: `Completing the Over The Wire wargames allows for 
        the practice of security concepts. I completed the 
        Bandit and Natas shell and web security games. These
        taught me common security flaws in web and shell security
        through the lens of exploiting them but helped me understand
        how to avoid them in my own projects.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1_WcxVbTevvsf8xeOyzpDGwUwaIRs9MUI',
        },
        {
        title: 'Microcorruption CTF',
        body: `The Microcorruption capture the flag has various
        exercises that deal with bit manipulation and hardware 
        level exploits with how assembly works on proprietary 
        hardware.  `,
        imgUrl: 'https://lh3.googleusercontent.com/d/1pgAQ3soFXgVub6Lj-YSdd8DpZbOsI1Hu',
        },
        {
        title: 'Symmetric Key Crypto',
        body: `This report and implementation of ECB and CBC
        cryptography methods shows how ECB is venerable to
        leak information in the encrypted representation
        because it uses the same mapping to encrypt. However,
        CBC fixes this by using an initialization vector and
        piping previous encrypted pixels into the next which
        produces noise that hides any information leaking.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1SDTDyEzjK_XizUFJZIgTAhdyKmFPeRSf',
        },
        {
        title: 'Public Key Crypto',
        body: `This implementation of public key crypto shows
        how public keys can be shared to encrypt, and then
        private keys can be used to decrypt communication 
        between two parties. Also, this project demonstrates 
        how a malicious party can exploit this if the value 
        of p, a large prime number, and g are not secure.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1Ms41S7yIp2L-BLPoeGIPUFTgE4uKi9Ce',
        },
        {
        title: 'AWS IAM Course',
        body: `The AWS IAM Course teaches you how to manage
        roles, permissions, and polices to keep a secure server
        on AWS. This course helped me understand amazon's systems
        and some common practices in server security and access.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1A6s-YbNCqUq1B2Z6MzjzIWIPhKXlD-WK',
        },
        {
        title: 'Wireshark Network Investigation',
        body: `Using Wireshark to investigate a network shows 
        web common security exploits and highlights how network 
        communication can be done securely.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1taEjqAVRDjQ0Qkcs1ighOVSvolBsNKIm',
        },
        {
        title: 'Memory Simulator',
        body: `This memory simulation was built in C and uses 
        chunks to store information in a extensible form,
        while freeing information properly. This helped me learn
        common practices for simple memory management strategies.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/15zgWivqsfN_JCAOlBnuAaFuIX1x0IXm7',
        },
        {
        title: 'Image Compression',
        body: `This project had me reduce the file size of 
        images with the huffman encoding I had worked on previously, 
        this time implemented in C instead of python. I learned 
        image processing, compression, and decompression throughout 
        this project.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1CcuFPK6rlr1IsXrnn7l9pVs9oyDCEnxl',
        },
        {
        title: 'Terminal File Explorer',
        body: `The hierarchial file explorer I implemented worked
        in a similar way to the command line with options like cd 
        and ls. During this project I gained a better understanding
        how an operating system navigates folders as files.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1HblfCtp4fEWyzIDIhEtEb8_5Wt-8qerN',
        },
        {
        title: 'Parallel Processing',
        body: `This foyer into distributed computing had me solve
        matrix multiplications with a variable number of parallel 
        processes. I resolved critical section and other timing
        problems.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1NA-q1CkisIfqomEqp6xIM-1fdfnrmbMg',
        },
        {
        title: 'Racket and OAZO',
        body: `Racket is a programming language I learned in order to
        write my own parser, type checker, and interpreter for my own
        language called OAZO. OAZO has its own unique syntax and supports
        anonymous functions, an environment, mutation, and recursion. Shown
        is a game I wrote in OAZO and compiled with Racket as the host language.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1n9UUQmAQ6mBzGP4txyn23VtyHUxLzLUb',
        id:'oazo',
        },
        {
        title: 'Everest Data Exploration',
        body: `This report was created with statistical computing with R.
        It explored the everest attempts dataset highlighting the duration
        and outcome of each everest summit attempt over time.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1YHmpSKSJkqFLn1W_cPPX7M4OlPHFwv9i',
        },
        {
        title: 'Mandelbrot Set',
        body: `This exploration of the mandelbrot fractal was done
        in Processing a visually focused programming language that
        I used to create visual explorations of math concepts and 
        even video games in.`,
        imgUrl: 'https://lh3.googleusercontent.com/d/1YXAspZrXWrGpI4GJ1D4y85g-wPisT5mo',
        id: 'set',
        },
    ];
    
    return (
    <div className='posts-container'>
        {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post}/>
        ))}
    </div>
    );
};

export default Posts;