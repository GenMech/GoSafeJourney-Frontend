import { State } from 'country-state-city';

const stateList = State.getStatesOfCountry('IN');
const arr = [];

for (const i in stateList) {
  arr.push(stateList[i].name);
}

// console.log(arr);
// Its working fine (all states in array are done) i dont why states name not showing there in search list:(
export default arr;
