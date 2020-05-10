import * as React from 'react';
import { Image } from 'react-bootstrap';
import { Button, Col, Row } from 'reactstrap';
import * as Example from '../images/example.png';

const About: React.FC<{}> = () => (
        <section className="page-section text-secondary mb-0" id="about">
            <div className="container">
                {/* About Section Heading*/}
                <div className="text-center">
                    <h2 className="page-section-heading d-inline-block text-secondary">ABOUT</h2>
                </div>
                {/* Icon Divider*/}
                <div className="divider-custom divider-dark">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                <Row>
                    <Col>
                        <p>
                            The <i>Transfer Buddy®</i> is a simple way of decanting your favourite brands into a handy collapsible pouch. If you love to get away for a camping trip, cycling touring holidays, walking holidays, a picnic, a drive in the country, a weekend away in a hotel, the <i>Transfer Buddy®</i> allows you to decant any flowable material from moisturiser to sun-cream to your favourite shampoo.<br /><br />
                        The <i>Transfer Buddy®</i> allows you to buy in bulk and take as little, or as much, as you like with you when you head out on those well-earned breaks as we all emerge from lockdown. It is economical and better for the environment as you can wash out the pouch to use on the next adventure.<br /><br />
                        As we all start to recover from this unprecedented period the opportunity to treat ourselves, our family and friends with beach days, picnics, weekends, family camping excursions, cycling trips, backpacking into the wilds, getting the motorbike out, whatever your pleasure is, use the <i>Transfer Buddy®</i> to take that treat with you. The joy of never again having to hunt for an old plastic bottle to decant milk into for the tea/coffee, take that last bit in the wine bottle in the fridge. You can transfer hand sanitiser into a pouch via the <i>Transfer Buddy®</i> and have it conveniently with you. The possibilities are endless. <br /><br />
                        The <i>Transfer Buddy®</i> is designed and made from materials that are safe and reusable. The pouches are robust and collapse so they can be stuffed into picnic hampers (stop things rattling!), rucksacks, cycle bags, panniers, hand luggage on flights (<b>50ml</b> and <b>100ml</b> volume options), once again the possibilities are endless. You can even freeze the pouches with your favourite soups, sauces, gourmet secret recipes, so versatile, easy to use and saves you money. Great if you have a young family as you can mix their favourite drinks, purees and kids can drink directly from the pouches, saving time, money and mess. <br />
                        Be kind to yourself, your family and friends, use the <i>Transfer Buddy®</i> and take a little luxury with you wherever you go.
                    </p>
                        <Image src={String(Example)} fluid />
                        <h2>Help us develop Transfer Buddy®!</h2>
                        <p>Help us by taking a few of minutes to complete our survey</p>
                        <Button color="primary" href="https://www.surveymonkey.co.uk/r/J2HGM5S">Take Survey</Button>
                    </Col>
                </Row>
            </div>
        </section>
);

export default About;