const XYZ = require("../models/XYZ");

const methods = {
  calculateXYZ(req) {
    return new Promise((resolve, reject) => {
      try {
        let arr = req.body.lists;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i - 1] === undefined) {
            arr[i] = 0;
          }
          if (isNaN(arr[i]) || arr[i] === "") {
            if (arr[i + 1] == undefined) {
              arr[i] = arr[i - 1] + (arr[i - 1] - arr[i - 2]) + 2;
            } else if (isNaN(arr[i + 1])) {
              arr[i] = arr[i - 1] + (arr[i - 1] - arr[i - 2]) + 2;
            } else {
              arr[i] = arr[i + 1] - (Math.abs(arr[i + 1] - arr[i + 2]) - 2);
            }
          }
        }
        const result = new XYZ(arr[0], arr[1], arr[6]);
        resolve({ result: result.getAll() });
      } catch (error) {
        reject(error);
      }
    });
  },
  error(msg, status = 500) {
    let error = new Error(msg);
    error.status = status;
    return error;
  },
};

module.exports = { ...methods };
