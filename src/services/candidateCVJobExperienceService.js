import axios from 'axios'

export default class CandidateCVJobExperienceService{

    getCandidateCVJobExperiences(){
        return axios.get("http://localhost:8080/api/candidatescvjobexperiences/getall");
    }
}