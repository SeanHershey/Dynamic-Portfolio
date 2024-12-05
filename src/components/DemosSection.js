import React, { useState } from 'react'
import Footer from './Footer'
import '../App.css';
import './DemosSection.css';

function DemosSection() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setResponse("Loading...");
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt })
            });
            const data = await response.json();
            setResponse(data.response);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
    <div className='demos-container'>
        <h1>Text Generation with Targon</h1>

        <div className='response'>
            {response}
        </div>

        <div className='prompt'>
            <form onSubmit={handleSubmit}>
                <input
                    className='text-input' 
                    type="text" value={prompt} 
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask DeepSeek Something"
                ></input>
                <button className='submit-btn' type="submit">Submit</button>
            </form>
        </div>
        
        <Footer/>
    </div>
    );
}

export default DemosSection;