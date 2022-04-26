export default async (func: Function, errorMessage: string) => {
  try {
    return await func();
  } catch (e: any) {
    console.error(e);

    if (e?.message === 'VALIDATION_ERROR') {
      return e;
    }

    return new Error(errorMessage || 'INTERNAL_ERROR');
  }
};
