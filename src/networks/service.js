import axios from "axios";

function emailFunction(values) {
    return axios.post(process.env.REACT_APP_API_URL + '/routes/email/send', values)
    .then((response) => {
        return response.data
    })
    .catch((err)=>{
        throw err
    })
}

export const service = {emailFunction}