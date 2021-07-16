import React, { Component } from 'react';

import styles from './Home.css';

import Icon from './../../assets/images/logo.png';

/* 
    This is just a sample introduction file.
    You can clear the code written in this file and start writing your own code.
*/

export class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src={Icon} />
                    <h1 className={styles.title}>Broadway Cinemas</h1>
                    <p>
                        Broadway Cinemas has launched a brand new booking portal that will simplify the process of booking tickets online. 
                        Customers can book tickets for their favorite shows by reserving their preferable seats and downloading a sample ticket.
                    </p>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions</h2>
                    <p>
                        This is a boilerplate template to help you start coding with 
                        your application straightaway.
                    </p>
                    <ul>
                        <li>
                            Candidates are expected to implement Redux and store.
                        </li>
                        <li>
                            Routing has also been enabled in this template, but the candidate  
                            is expected to implement the routes on their own.
                        </li>
                        <li>
                            Candidates are free to use CSS, SASS, SCSS or LESS for styling.
                        </li>
                        <li>
                            Images to use in the application are provided in the folder.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;

