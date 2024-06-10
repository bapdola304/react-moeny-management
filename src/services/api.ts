const BASEURL = 'https://mphjhpsbcqpgqilshxwe.supabase.co/rest/v1';

class ApiMethods {
  static apiRequest(method: string, url: string, body: any = {}) {
    let fetchOptions: any = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1waGpocHNiY3FwZ3FpbHNoeHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NjU4MzMsImV4cCI6MjAzMTQ0MTgzM30.71aen4dlTR0RJCLa1oRa1UHgTpInQoCaeOXFGP2SHdY'
      }
    };
    if (method !== 'GET') {
      fetchOptions.body = JSON.stringify(body);
    }

    return fetch(BASEURL + url, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        if (response.status === 200) {
          return response.json();
        }
        return {};
      });
  }

  static get(url: string) {
    return this.apiRequest('GET', url);
  }

  static post(url: string, data: any) {
    return this.apiRequest('POST', url, data);
  }

  static put(url: string, data: any) {
    return this.apiRequest('PUT', url, data);
  }

  static delete(url: string) {
    return this.apiRequest('DELETE', url);
  }
}

export default ApiMethods;