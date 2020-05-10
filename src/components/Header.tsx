import * as React from 'react';

const Header: React.FC<{}> = () => (
    <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <h1 className="masthead-heading mb-0">THE TRANSFER BUDDY</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                <div className="divider-custom-line" />
            </div>
            {/* Masthead Subheading*/}
            <p className="pre-wrap masthead-subheading font-weight-light mb-0" />
        </div>
    </header>
);

export default Header;