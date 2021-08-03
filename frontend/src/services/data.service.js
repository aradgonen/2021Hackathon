import axios from "axios";

const API_URL = "/api/barzelim/";

const getDevices = () => {
  return axios.get(API_URL + "devices", { headers:{'Access-Control-Allow-Origin': '*'}});
};

const getRacks = () => {
  return axios.get(API_URL + "racks", { headers:{'Access-Control-Allow-Origin': '*'}});
};

const getHomelessDevices = () => {
  return axios.get(API_URL + "homelessdevices", { headers:{'Access-Control-Allow-Origin': '*'}}); 
};
const getCourses = (racks,devices) => {

  // for each rack in dc - insert the devices into the rack and then add an rack object to the dc object
  let dc = racks.data.map(curRack =>{
    let curRackDevices = []
    let data = []
    let tempRack = new Array(curRack.size)
    tempRack.fill('emptyCell',0,tempRack.length) //fill the temp array with empty data
    devices.data.forEach(device => {
        if(curRack.name === device.rackNumber){
            //curRackDevices[device.unumber] = device
            curRackDevices.push(device)
        }
    })
    curRackDevices.forEach(currentRackDevice => {
        // currentRackDevice.unumber - 1 because if the real u is X, the place in the array is x - 1 
        tempRack[currentRackDevice.unumber - 1] = {unumber:currentRackDevice.unumber - 1, data:currentRackDevice} //currentRackDevice //TODO: change the u data to this format : {unumber:currentRackDevice.unumber - 1, data:currentRackDevice}
    })

    // fill the empty cells with the "empty" json
    for (let tempRackIndex = 0; tempRackIndex <= curRack.size; tempRackIndex++) {
        if (tempRack[tempRackIndex] === 'emptyCell') {
            tempRack[tempRackIndex] = {unumber:tempRackIndex, data:{}}
        }
    }
    data = tempRack;
    return {rack_id:curRack.name, data:data, network: curRack.networkId}
})
  return dc;
};


export default {
  getCourses,
  getRacks,
  getDevices,
  getHomelessDevices,
};