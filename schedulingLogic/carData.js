let carData = {};

const updateCarLocation = function (id, lat, lng) {
    if (!carData[id]) {
        carData[id] = {}
    }
    carData[id].lat = lat,
    carData[id].lng = lng
}

const updateRetrieveNewInfo = function (id) {
    carData[id].newInfo = !carData[id].newInfo;
}

const getCarLocation = function (id) {
    return {
        lat: carData[id].lat,
        lng: carData[id].lng
    }
}

const getNewInfo = function (id) {
    return carData[id].newInfo;
}

module.exports = { updateCarLocation, updateRetrieveNewInfo, getCarLocation, getNewInfo }