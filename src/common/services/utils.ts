export const isValidHexCode = (value: string | null) => {
  return value?.match(/^#[a-f0-9]{6}$/i) !== null;
};

export const isValidEmail = (value: string) => {
  const Regex =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
  return Regex.test(value);
};

export const removeDuplicates = (list: any[]) => {
  return list?.filter(
    (value: any, index: number) => list.indexOf(value) === index,
  );
};

export const getFields = (source: any, ...fields: any) => {
  return source?.map((item: any) => {
    let newItem: any = {};
    for (let field of fields) {
      try {
        newItem[field] = item[field];
      } catch (error) {
        newItem[field] = error;
      }
    }
    return newItem;
  });
};

export const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const isBlank = (value: any) => {
  return (
    value === undefined ||
    value === null ||
    value === '' ||
    value === 'null' ||
    value === []
  );
};

export const cleanText = (value: any) => {
  return isBlank(value) ? '' : value;
};

export const isHTML = (value: any) => {
  var hasHtmlTag = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
  return hasHtmlTag(value);
};
