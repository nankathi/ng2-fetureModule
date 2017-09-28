import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BikesService {

    private _apiUrl = "http://localhost:12345/api/bikes/all"; 

    constructor(private _http: Http) { }

    public getAllBikes$(): Observable<Array<any>> {
        return this._http.get(this._apiUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || { _body: "Unknown Error" });
    }
}
