import axios from 'axios';

const mountDogsList = (data) => {
  let dogs = [];
  Object.keys(data).forEach(prop => {
    if (data[prop].length > 0)
      data[prop].forEach(item => {
        dogs.push(`${prop}-${item}`)
      })
    else dogs.push(`${prop}`)
  })
  return dogs
}
const mountDogImage = (data, type) => {
  let image = data.find(item => item.match(type));
  return image || '';
}
export default {
  async getAllDogs() {
    const response = await axios.get('breeds/list/all');
    return mountDogsList(response.data.message) || [];
  },
  async getDogByType(type) {
    const split = type.split('-');
    const response = await axios.get(`breed/${split[0]}/images`);
    return mountDogImage(response.data.message, type);
  }
}
