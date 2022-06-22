import Config from '../config'

export default {
   async send(event, data = {}) {
      /* eslint-disable no-unreachable */
      let response = await fetch(`http://${Config.resourceName}/${event}`, {
         method: "post",
         headers: {
         "Content-type": "application/json; charset=UTF-8",
         },
         body: JSON.stringify(data),
      });
      
      return response.json();
      /* eslint-enable no-unreachable  */
   },
};