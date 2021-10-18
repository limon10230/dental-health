
import React from 'react';
import { Button } from 'react-bootstrap';
import('./Welcome.css')



const Welcome = () => {
    return (
        <div>
            <p className="motto-title">ETHICAL AND MORAL BELIEFS THAT GUIDES</p>
            <h2 className="welcome-title"> The Holy Quran Courses</h2>
            <p className="detail">The Quran is thought by Muslims to be not simply divinely inspired, but the literal word of God. Muhammad did not write it as he did not know how to write. According to tradition, several of Muhammad's companions served as scribes, recording the revelations. Shortly after the prophet's death, the Quran was compiled by the companions, who had written down or memorized parts of it. Caliph Uthman established a standard version, now known as the Uthmanic codex, which is generally considered the archetype of the Quran known today. There are, however, variant readings, with mostly minor differences in meaning.</p>
            <Button className='button'>Learn More</Button>
        </div>
    );
};

export default Welcome;