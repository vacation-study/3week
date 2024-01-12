import { atom } from 'recoil';

const arr123 = atom({
    key: 'arr123', 
    default: [],
  });
  
const modal123 = atom({
    key: 'modal123',
    default: 'false',
  });
  
const modal1234 = atom({
    key: 'modal1234',
    default: 'true',
});
  
export { arr123, modal123, modal1234 };

