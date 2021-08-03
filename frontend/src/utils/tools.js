
/*
This function convers input color and a (transparency level)
into a string of the proper css rgba attribute immplementation.

It converts from hex to decimal
*/
function colorToRgba(color, a = 1) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
        c = color.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + a + ')';
    }
    throw new Error('Bad Hex');
}


const isObject = (item) => {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

const mergeTwoJsons = (first, second) => {
    let newJson = {}
    if (!isObject(first) || !isObject(second))
        return {}

    // copying all first object keys
    for (let key in first)
        // copy data if not in second
        if (!(key in second))
            if (isObject(first[key]))
                newJson[key] = { ...first[key] }
            else
                newJson[key] = first[key]
        // if both values are objects
        else if (isObject(first[key]) && isObject(second[key]))
            newJson[key] = mergeJsons(first[key], second[key])
        else if (Array.isArray(first[key]) && Array.isArray(second[key]))
            newJson[key] = [...first[key], ...second[key]]
        else
            newJson[key] = second[key]


    // copying all keys that are in the second but not in first
    for (let key in second)
        if (!(key in first))
            if (isObject(second[key]))
                newJson[key] = { ...second[key] }
            else
                newJson[key] = second[key]
    return newJson
}

const mergeJsons = (...jsons) => {
    if (Array.isArray(jsons))
        return jsons.reduce((marged, newJson) => mergeTwoJsons(marged, newJson))
    return {}

}

export { colorToRgba, mergeJsons }


