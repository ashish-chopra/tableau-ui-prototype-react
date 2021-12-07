import React from 'react';
import { getHistoryCollection, getHistoryTags } from '../../service/vizz.service';
import Filters from '../filters/filters.component';
import Tags from '../tags/tags.component';
import VizzCard from '../vizz-card/vizz-card.component';
import './history.styles.scss';

class History extends React.Component {

    constructor() {
        super();
        this.state = {
            filters: {
                views: true,
                time: false,
                author: false
            },
            tags: {
                user: [],
                system: []
            },
            active: null,
            isUserTag: false,
            collection: null
        }
        this._tagsChange = this._tagsChange.bind(this);
        this._filterChange = this._filterChange.bind(this);
    }

    componentDidMount() {
        getHistoryTags().then(data => this.setState({ tags: data }));
        getHistoryCollection({
            filters: this.state.filters,
            tag: null,
            isUserTag: false
        }).then(data => this.setState({ collection: data }));
    }

    _filterChange(key) {
        const { filters } = this.state;
        filters[key] = !filters[key];

        getHistoryCollection({
            filters,
            tag: this.state.active,
            isUserTag: this.state.isUserTag
        }).then(data => {
            this.setState(prevState => {
                return {
                    filters: {
                        ...prevState.filters, [key]: !prevState.filters[key],
                    },
                    collection: data
                };
            })
        })
        this.setState((prevState) => ({ filters: { ...prevState.filters, [key]: !prevState.filters[key] } }));
    }

    _tagsChange(tag, isUserTag) {
        const changed = tag === this.state.active ? null : tag;
        getHistoryCollection({
            filters: this.state.filters,
            tag: changed === 'all' ? null : changed,
            isUserTag
        }).then(data => this.setState({ collection: data, active: changed, isUserTag }));
    }

    render() {
        return (
            <div>
                <div className="strip-title">
                    <h5>History</h5>
                    <span className="spacer"></span>
                    <div>
                        <i className="fas fa-th-large"></i> &nbsp;
                        <i className="fas fa-list"></i>
                    </div>
                </div>
                <Filters filters={this.state.filters} filterChange={this._filterChange} />
                <Tags active={this.state.active} tags={this.state.tags} tagsChange={this._tagsChange} />
                {
                    this.state.collection === null
                        ?
                        <span>Loading...</span>
                        :
                        <React.Fragment>
                            <div className="result-block">{this.state.collection.length} items found</div>
                            <div className="strip" style={{ flexWrap: 'wrap' }}>
                                {
                                    this.state.collection.map(item => <VizzCard showTime element={item} key={item.id} />)
                                }
                            </div>
                        </React.Fragment>
                }
            </div>

        );
    }
}

export default History;