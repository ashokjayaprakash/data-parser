import { ClientInfo } from "../../data/ClientInfo";

export class ParseService {

    parseClientInfo(data: String) {
        const SEPERATOR = '0'
        let info = []

        let startIndex = 0, counter = 0;
        for(let i=0; i< data.length; i++) {
            if(data[i] == SEPERATOR) {
                counter++
            }

            if(counter > 1 && data[i+1] != SEPERATOR) {
                info.push(data.substring(startIndex, i));
                startIndex = i;
                counter = 0
            }
        }        
        let [ firstName, lastName, clientId ] = info
        return new ClientInfo(firstName, lastName, clientId)
    }

}

