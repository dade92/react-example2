export class RestClient {
    constructor() {
    }

    get<T>(url: string, headers: Record<string, string> = {'Content-Type': 'application/json'}): Promise<T> {
        return fetch(
            url,
            {headers: headers}
        ).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            } else {
                return response.json() as Promise<T>
            }
        });
    }

    post<T, S>(url: string, body: T, headers: Record<string, string> = {'Content-Type': 'application/json'}): Promise<S> {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers,
        }).then(response => {
            if (response.status != 200 && response.status != 204) {
                console.log('response status is ' + response.status)
                throw new Error(response.statusText)
            } else {
                //TODO what if the body is empty (for instance for a 204 no content)?
                console.log('response ok')
                if (response.status == 204) {
                    return {} as Promise<S>
                } else {
                    return response.json() as Promise<S>
                }
            }
        });
    }
}