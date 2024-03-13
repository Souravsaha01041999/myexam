import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDetails } from '../app/PojoClassess/UserDetails'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpService: HttpClient) { }

    //The method it for fetch data
    fetUserData(onSuccess, onError) {
        this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (data: UserDetails[]) => {
                onSuccess(data);
            },
            (err) => {
                onError();
            }
        );
    }
}