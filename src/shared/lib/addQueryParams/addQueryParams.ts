/** Функция, которая добавляет query параметры в адресную строку
 *
 * @param params
 * @returns
 */

export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const queryParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      queryParams.set(name, value);
    }
  });
  return `?${queryParams.toString()}`;
};

export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, "", getQueryParams(params));
};
