export function generateUrlFromParams(url: string, params: { [key: string]: string | null | undefined }): string {
  // Tạo một danh sách các phần tử từ các cặp key-value trong params
  const queryParams = Object.entries(params)
    .filter(([_, value]) => value !== null && value !== undefined) // Lọc ra các giá trị không null hoặc undefined
    .map(([key, value]) => {
      // Tạo phần tử của query nếu giá trị không null hoặc undefined
      return `${key}=${value}`;
    });

  // Kết hợp các phần tử của danh sách queryParams thành một chuỗi
  const queryString = queryParams.join('&');

  // Tạo path dựa trên chuỗi query
  const path = `${url}?${queryString}`;

  return path;
}

export function isEmpty(obj: any) {
  if (obj === undefined || obj === null) {
    return true;
  }
  let empty = Object.keys(obj);
  return empty.length === 0;
}