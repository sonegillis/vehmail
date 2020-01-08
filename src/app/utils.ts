
export class Toolkits {
  constructor() {
  }

  public static getRequestParams(params: object): string {
     let newParams = '';
     for (const [key, value] of Object.entries(params)) {
       newParams += `${key}=${value}&`;
     }
     return newParams;
  }
}

