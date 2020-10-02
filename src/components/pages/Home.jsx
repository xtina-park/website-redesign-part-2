import React, { Component } from 'react'
import {Container} from 'bootstrap-4-react';

import Content from '.';

import guanica from './images/guanica.png';
import algarrobo from './images/algarrobo.png';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <div align="center">
                    <Content.Image src={guanica}/>
                    <Content.Image src={algarrobo} disappear="medium"/>
                </div>
                <br/>
                <Content.Title>About Me</Content.Title>
                <Content.Text>Hey, there! My name is Christina- lover of technology, human languages, 
                and problem-solving (business!)</Content.Text>
                <Content.Text>After spending four years working towards a career in economics, 
                I pivoted towards a career at the intersection of: 
                technology, human languages, and problem-solving. 
                I realized that life was too short not to pursue what I love, 
                and what I am intrinsically motivated to work on.</Content.Text>
                <br/><Content.Title>About DuoLivre</Content.Title>
                <Content.Text>DuoLivre is an idea born out of my experience of years of 
                failed efforts to become truly fluent in Spanish, and the 
                break-through I had thanks to a conversation at a college party. 
                There, I met a really interesting guy who spoke beautiful English, 
                despite having learned later in life, as a teenager. In fact, 
                he was so confident in his English skills, that he claimed to have 
                better English than most U.S.-born Americans. I asked him, how did 
                he achieve his level of (a) fluency and (b) confidence? The secret, 
                he said, was to read a lot of books.</Content.Text>
                <Content.Text>This conversation truly changed my life. After that night, 
                I went to the small Spanish-language section of my local bookstore 
                and bought Un Pez Dos Peces Pez Rojo Pez Azul (One Fish Two Fish 
                Red Fish Blue Fish) by Dr. Seuss. Eventually, I worked up to 
                reading my favorite book in the world in the language that it was 
                originally written in: One Hundred Years of Solitude by 
                Gabriel García Márquez. For me, this remains one of my most 
                satisfying accomplishments.</Content.Text>
                <Content.Text>Not only did I hit this huge personal milestone 
                (reading the work of García Márquez in Spanish), but in the 
                process of doing so, my vocabulary, grammatical familiarity, 
                and confidence in Spanish sky-rocketed. Later, I was able to 
                travel and live in Latin America, where I could learn even more.</Content.Text>
                <Content.Text>Note that many people go to live in a foreign country and still do 
                not learn the language because they don't have the baseline 
                confidence or skill-level to hold a meaningful conversation 
                with native speakers. So, they end up keeping social circles 
                with individuals who speak their native tongue. It is both 
                understandable and avoidable! The way to avoid this, and to 
                build a solid foundation in a foreign language -before you travel- 
                is through reading.</Content.Text>
                <Content.Text>DuoLivre aims to make reading in a foreign language widely 
                accessible and easy-to-do, with translations to unfamiliar 
                words and phrases at the touch of a button. If you are 
                interested in following along with the journey of developing 
                DuoLivre, or would like to collaborate on its development (!), 
                please join the following e-mail list, or check out the 
                contact page and shoot me an e-mail! I truly look forward to 
                hearing from you :)</Content.Text>
                <Content.Text>Sign up for infrequent e-mails about DuoLivre's progress:</Content.Text>

            </Container>
        )
    }
}
