import './Resume.css';


function Resume() {
    return (
    <div className='resume-container'>
        <h1>SEAN HERSHEY</h1>
        <p className='long-p'>sean.p.hershey@gmail.com | github.com/seanhershey | linkedin.com/in/seanhershey</p>
        <p className='short-p'>sean.p.hershey@gmail.com</p>
        <p className='short-p'>github.com/seanhershey</p>
        <p className='short-p'>linkedin.com/in/seanhershey</p>
        <hr/>

        <h3>EDUCATION</h3>
        <h5>Bachelor of Science Degree in Computer Science</h5>
        <h4>California Polytechnic State University, San Luis Obispo</h4>
        <h4>Dean's List 2023, 2024</h4>

        <h5>Relevant Coursework:</h5>
        <h4>Data Structures, Systems Programming, Computer Architecture</h4>
        <h4>Design & Analysis of Algorithms, Computer Security, Database Systems,</h4>
        <h4>Software Requirements, Software Construction, Software Deployment, Artificial Intelligence</h4>

        <h3>SKILLS</h3>
        <h5>Programming Languages:</h5>
	    <h4>Python, Java, C, C++, JS, HTML, CSS, SQL, R</h4>
        <h5>Software Tools:</h5>
	    <h4>VSCode, IntelliJ, Git, RStudio, Docker, Astah</h4>

        <h3>PROGRAMMING PROJECTS</h3>
        <h5>fEMR: AWS, Play Framework</h5>
        <h4>Worked with a non-profit EMR system for medical teams in low-resource settings</h4>
        <h4>•	Internationalized and expanded the interface through database modifications </h4>
        <h4>•	Integrated offline dynamic machine translation of patient records for doctors</h4>
        <h5>Portfolio: Node.js, React</h5>
        <h4>A frequently updated website displaying projects with a focus on responsive UI</h4>
        <h4>•	seanhersheysoftware.com</h4>
        <h5>Structural Damage: Jupyter Notebook, TensorFlow</h5>
        <h4>A model to classify damage levels of earthquake damaged buildings by image</h4>
        <h4>•	Trained and deployed convolutional neural networks to classify images</h4>
        <h5>Warehouse: FastAPI, React</h5>
        <h4>An application that allows users to keep track of physical inventory</h4>
        <h4>•	Developed TypeScript React frontend with ApolloClient integration</h4>
        <h4>•	Built FastAPI backend with GraphQL and Postgres SQL database interactions</h4>
	
        <h3>WORK EXPERIENCE</h3>
        <h5>Software Developer: Square Feet Hawaii</h5>
	    <h4>Developed a map visual-based real estate discovery engine for displaying properties</h4>
        <h4>•	Created a Django powered website with data from a real estate service provider</h4>
        <h4>•	Implemented the Mapbox API to display an interactive map</h4>
        <h5>Tech Aide: Le Jardin Academy</h5>
        <h4>Demonstrated teamwork, time management, and customer service</h4>
        <h4>•	Completed tech support tickets from teachers and administrators</h4>
        <h4>•	Initialized and formatted new devices and user management systems</h4>

    </div>
    );
}

export default Resume;