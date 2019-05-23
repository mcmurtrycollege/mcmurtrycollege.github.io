import React from 'react';
import Title from '../../../title';
import { Box } from 'rebass';
import './financial_inclusivity.css';

const FinancialInclusivity = () => (
    <div className='fin-inc-page'>
        <Title title="Financial Inclusivity" width={300} smallText={true} />
        <Box width={[0.9, 0.8, 0.7, 0.6]} className='fin-inc-content'>
            <p> McMurtry College has committed to making financial accessibility an utmost priority and to be a leader in the socioeconomic inclusivity initiative at Rice. </p>
            <p>After holding discussions at several town halls, with the magisters, and at cabinet meetings, McMurtry is implementing an initiative (starting in Spring 2017) to address socioeconomic inequality with regards to social life at our college. With the expectation that this proposal will be continuously improved based on tracking certain metrics, below is a summary of the current plan: </p>
            <p><b> Our mission:</b> To create a residential college experience in which events and Murtchandise are accessible to all students regardless of socioeconomic status.</p>
            <p><b>Guidelines</b></p>
            <ul>
                <li>Make all events and merchandise as inexpensive as possible (if possible, free), with a cap of $5/event or $5/merchandise.</li>
                <li>Provide Beer Bike shirts free of cost.</li>
                <li>Establish the Magister's Fund so students (when in need) can opt into extra funding. This fund is intended to cover ground we may miss with blanket subsidization, to offer extra support to students in difficult circumstances, and to avoid limiting students to social events that the college has deemed essential.</li>
            </ul>
            <Box width={220} className='fin-inc-link'>
                <a href='https://goo.gl/forms/KEyPplLhclljdSOm2' style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <h2 className='reservation-link'>Click here for more info or to apply!</h2>
                </a>
            </Box>
        </Box>
    </div>
)

export default FinancialInclusivity;