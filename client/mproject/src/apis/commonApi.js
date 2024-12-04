import axios from 'axios'

const commonapi=(reqMethod,reqData,reqUrl,reqHeader)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        headers:reqHeader?reqHeader:{"content-type":"application/json"}
    }
  return axios(config)
}

export default commonapi