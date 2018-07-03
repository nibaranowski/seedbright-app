import React from 'react';

export default class LoadingPage extends React.Component {
    componentDidMount () {
        //console.log('loadingPage mounted!')
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="loader">
                <img className="loader__image" src="/images/loader.gif" />
            </div>
        );
    }
}
