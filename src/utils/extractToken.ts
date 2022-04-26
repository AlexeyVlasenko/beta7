import Express from 'express';

export default (req: Express.Request) => {
  let token = null;
  if (req?.headers?.authorization) {
    token = req?.headers?.authorization?.replace('Bearer ', '').trim();
  } else if (req?.body?.token) {
    token = req?.body?.token?.trim();
  } else if (req?.query?.token) {
    token = req?.query?.token?.toString()?.trim();
  }
  return token;
};
