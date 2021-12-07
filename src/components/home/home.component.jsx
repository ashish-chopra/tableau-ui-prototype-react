import React from 'react';
import { getPreviewVizzesFor } from '../../service/vizz.service';
import VizzPreview from '../vizz-preview/vizz-preview.component';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            pinned: [],
            recentlyVisited: [],
            recommendations: []
        }
    }

    componentDidMount() {
        getPreviewVizzesFor('pinned', 'recommendations', 'recentlyVisited')
            .then(data => this.setState({ ...data }));
    }
    
    render() {
        return (
            <div>
                <VizzPreview collection={this.state.pinned} title="My Pinned Vizzes" />
                <div className="line-separator"></div>
                <VizzPreview collection={this.state.recommendations} title="Recommended" />
                <div className="line-separator"></div>
                <VizzPreview collection={this.state.recentlyVisited} title="Recently Visited" />
            </div>
        );
    }
}

export default Home;