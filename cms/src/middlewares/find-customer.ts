export default (config, { strapi, env }) => {
  return async (context, next) => {
    let token = context.request.header.authorization;

    if (!token)
      return Response.json(
        { message: "Missing Authorization header." },
        { status: 401 }
      );

    let jwt = require("jsonwebtoken");

    token = token.replace("Bearer ", "");

    const isValid = await jwt.verify(token, process.env.SECRET_KEY);

    if (!isValid)
      return Response.json({ message: "Invalid token" }, { status: 401 });

    const payload = jwt.decode(token);

    const customer = await strapi.db.query("api::customer.customer").findOne({
      where: { domain: payload.aud },
    });

    if (!customer)
      return Response.json({ message: "Forbidden" }, { status: 403 });

    context.req.customer = customer;

    await next({ customer: customer });
  };
};
