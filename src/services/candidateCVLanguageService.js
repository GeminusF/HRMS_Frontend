import axios from "axios";

export default class CandidateCVLanguageService {
    
   getCandidateCVLanguages(){
       return axios.get("http://localhost:8080/api/candidatescvforeignlanguages/getall");
   } 
}
