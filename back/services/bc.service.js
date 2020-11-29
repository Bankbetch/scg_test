const BC = require("../models/BC");

const methods = {
  calculateBC(req) {
    return new Promise((resolve, reject) => {
      try {
        const a = req.body.a;
        const b = req.body.ans_b - a;
        const c = req.body.ans_c * 2;
        let bc = new BC(b, c);
        resolve({ result: bc.getAll() });
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
