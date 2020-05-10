import * as React from 'react';
import { Button } from 'reactstrap';

const Survey: React.FC<{}> = () => (
    <section className="page-section bg-primary text-white mb-0" id="survey">
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading d-inline-block text-secondary">CHIP IN!</h2>
            </div>
            {/* Icon Divider*/}
            <div className="divider-custom divider-dark">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                <div className="divider-custom-line" />
            </div>
            <p>Help us develop Transfer Buddy® by taking a few minutes to complete our survey</p>
            <Button color="secondary" href="https://www.surveymonkey.co.uk/r/J2HGM5S">Take Survey</Button>
        </div>
    </section>
);

export default Survey;