import { ComputerData } from "./Computer";
import { furnatuerData } from "./Furnatuer";
import { menData } from "./Men";
import { watchesData } from "./Watches";
import { womenData } from "./Women";
import { mobileData } from "./mobiles"
export const getData = (type) => {
    switch(type){
        case 'mobiles': return mobileData;
        case 'computers': return ComputerData
        case 'watches': return watchesData
        case 'women': return womenData
        case 'men': return menData
        case 'furnatuer': return furnatuerData
        default: return []
    }

}