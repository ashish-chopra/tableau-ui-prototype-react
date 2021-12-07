const cache = {
    vizzes: {},
    serverResponse: null,
    loaded: false
};

export async function getPreviewVizzesFor(...keys) {
    if (!cache.loaded) await load();
    return keys.reduce((acc, key) => {
        acc[key] = _getVizzesByKey(key);
        return acc;
    }, {});
}

export async function getHistoryCollection(options) {
    if (!cache.loaded) await load();

    const { filters, tag, isUserTag } = options;
    const { history } = cache.serverResponse;
    let data = null;
    if (tag !== null) {
        data = history.tags[isUserTag ? 'user' : 'system'][tag].map(id => cache.vizzes[id]);
    } else {
        data = cache.serverResponse.vizzes.sort(_sortChronologically);
    }
    return _applyFilters(data, filters);
}

export async function load() {
    const response = await fetch('./data/vizzes.json')
    const data = await response.json();
    _setupCache(data);
}

export async function getHistoryTags() {
    if (!cache.loaded) await load();
    return {
        system: Object.keys(cache.serverResponse.history.tags['system']),
        user: Object.keys(cache.serverResponse.history.tags['user'])
    };

}

export async function getVizzById(id) {
    if (!cache.loaded) await load();
    return cache.vizzes[id];
}

function _applyFilters(data, filters) {
    let output = [...data];
    for (let key in filters) {
        if (filters[key]) {
            switch (key) {
                case 'time':
                    output = output.filter(item => item.isLessThanSeven);
                    break;
                case 'views':
                    output = output.sort((a, b) => (Number(b.views) - Number(a.views)));
                    break;
                case 'date':
                    output = output.sort((a, b) => {
                        let a_ms = new Date(a.last_saved).getTime();
                        let b_ms = new Date(b.last_saved).getTime();
                        return b_ms - a_ms;
                    });
                    break;
                case 'author':
                    output = output.sort((a, b) => {
                        if (a.author > b.author) { return 1; }
                        if (a.author < b.author) { return -1; }
                        return 0;
                    });
                    break;
                default:
                    return output;
            }
        }
    }
    return output;
}

export function hasPin(id) {
    return cache.serverResponse.pinned.includes(id);
}

export function togglePin(id) {
    const pinned = cache.serverResponse.pinned;
    const item = pinned.find(i => i === id);
    item ? pinned.splice(pinned.indexOf(id), 1) : pinned.unshift(id);
}



function _getVizzesByKey(key) {
    return cache.serverResponse[key].map(id => cache.vizzes[id]);
}

function _setupCache(data) {
    cache.serverResponse = data;
    data.vizzes.forEach(vizz => cache.vizzes[vizz.id] = vizz);
    cache.loaded = true;
}



function _sortChronologically(a, b) {
    let date1 = new Date(a.last_saved);
    let date2 = new Date(b.last_saved);
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
}

