import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
export const verifyToken = async (req, res, next) => {
    res.locals.jwtData = {
        "id": '65549341d802e288d15b56e2',
        "email": 'demo@demo.demo'
    };
    return next();
    // const token = req.cookies[`${COOKIE_NAME}`];
    // if (!token || token.trim() === "") {
    //   return res.status(401).json({ message: "Token Not Received" });
    // }
    // return new Promise<void>((resolve, reject) => {
    //   return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
    //     if (err) {
    //       reject(err.message);
    //       return res.status(401).json({ message: "Token Expired" });
    //     } else {
    //       resolve();
    //       res.locals.jwtData = success;
    //       console.log(success);
    //       return next();
    //     }
    //   });
    // });
};
//# sourceMappingURL=token-manager.js.map