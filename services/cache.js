
const cache = new Map();

const CACHE_DURATION = 5 * 60 * 1000;

function getCache(key) {
    const item = cache.get(key);

    if (!item) {
        return null;
    }

    if (Date.now() > item.expiresAt) {
        cache.delete(key);
        return null;
    }

    return item.data;
}

function setCache(key, data) {
    cache.set(key, {
        data,
        expiresAt: Date.now() + CACHE_DURATION
    });
}

module.exports = { getCache, setCache };
